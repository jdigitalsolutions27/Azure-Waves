"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Mail, MessageCircle } from "lucide-react";

import { rooms } from "@/data/rooms";
import { resortInfo } from "@/lib/site";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const bookingSchema = z.object({
  checkIn: z.string().min(1, "Please select your check-in date."),
  checkOut: z.string().min(1, "Please select your check-out date."),
  guests: z.coerce.number().min(1, "Add at least one guest.").max(8, "Maximum 8 guests per inquiry."),
  roomId: z.string().min(1, "Please choose a room."),
  addons: z.array(z.string()),
  name: z.string().min(2, "Please provide your full name."),
  phone: z.string().min(7, "Please provide a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  specialRequests: z.string().max(700, "Keep requests under 700 characters.").optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

const addons = [
  { id: "airport-pickup", label: "Airport pickup" },
  { id: "breakfast-upgrade", label: "Breakfast upgrade" },
  { id: "spa-package", label: "Spa package" },
];

type BookingFormProps = {
  defaults?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    roomId?: string;
  };
};

export function BookingForm({ defaults }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ reference: string; message: string } | null>(null);

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      checkIn: defaults?.checkIn ?? "",
      checkOut: defaults?.checkOut ?? "",
      guests: Number(defaults?.guests ?? "2"),
      roomId: defaults?.roomId ?? rooms[0]?.id,
      addons: [],
      name: "",
      phone: "",
      email: "",
      specialRequests: "",
    },
  });

  const room = rooms.find((item) => item.id === form.watch("roomId"));

  const timeline = useMemo(
    () => ["We confirm availability", "We send payment instructions", "You receive final confirmation"],
    [],
  );

  const stepFields: Record<number, (keyof BookingValues)[]> = {
    1: ["checkIn", "checkOut", "guests"],
    2: ["roomId"],
    3: ["addons"],
    4: ["name", "phone", "email"],
    5: ["specialRequests"],
  };

  const nextStep = async () => {
    const fields = stepFields[step];
    const valid = await form.trigger(fields);
    if (!valid) return;
    setStep((prev) => Math.min(5, prev + 1));
  };

  const previousStep = () => setStep((prev) => Math.max(1, prev - 1));

  const onSubmit = async (values: BookingValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      form.setError("root", { message: "We could not submit your inquiry right now. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (result) {
    const message = `Hi Azure Waves Resort, I submitted inquiry ${result.reference} for ${room?.name ?? "a room"}.`;
    const mailBody = `Inquiry Ref: ${result.reference}\nRoom: ${room?.name ?? "N/A"}\nCheck-in: ${form.getValues("checkIn")}\nCheck-out: ${form.getValues("checkOut")}\nGuests: ${form.getValues("guests")}`;

    return (
      <Card className="border-primary/10 bg-white/95">
        <CardHeader>
          <Badge className="w-fit">Inquiry Sent</Badge>
          <CardTitle className="flex items-center gap-2 text-2xl sm:text-3xl">
            <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            We received your request
          </CardTitle>
          <p className="text-sm text-muted-foreground">Reference: {result.reference}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">{result.message}</p>

          <div className="grid gap-3 md:grid-cols-2">
            <Button asChild>
              <a href={`https://wa.me/${resortInfo.whatsappRaw}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Send via WhatsApp
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`mailto:${resortInfo.email}?subject=${encodeURIComponent(`Inquiry ${result.reference}`)}&body=${encodeURIComponent(mailBody)}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </Button>
          </div>

          <div className="rounded-3xl border border-primary/10 bg-primary/5 p-5">
            <h3 className="font-semibold text-foreground">What happens next</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {timeline.map((item, index) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/10 bg-white/95">
      <CardHeader>
        <Badge className="w-fit">Step {step} of 5</Badge>
        <CardTitle className="text-2xl sm:text-3xl">Booking Inquiry</CardTitle>
        <div className="h-2 overflow-hidden rounded-full bg-primary/10">
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(step / 5) * 100}%` }} />
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.24 }}
              className="space-y-4"
            >
              {step === 1 ? (
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn">Check-in</Label>
                    <Input id="checkIn" type="date" {...form.register("checkIn")} />
                    <p className="text-xs text-rose-600">{form.formState.errors.checkIn?.message}</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checkOut">Check-out</Label>
                    <Input id="checkOut" type="date" {...form.register("checkOut")} />
                    <p className="text-xs text-rose-600">{form.formState.errors.checkOut?.message}</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Guests</Label>
                    <Input id="guests" type="number" min={1} max={8} {...form.register("guests")} />
                    <p className="text-xs text-rose-600">{form.formState.errors.guests?.message}</p>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="grid gap-3 md:grid-cols-2">
                  {rooms.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => form.setValue("roomId", item.id, { shouldValidate: true })}
                      className={`rounded-3xl border p-4 text-left transition ${
                        form.watch("roomId") === item.id
                          ? "border-primary bg-primary/10"
                          : "border-border/70 bg-white hover:border-primary/40"
                      }`}
                    >
                      <p className="font-display text-2xl">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.capacity} guests • {item.view} view</p>
                      <p className="mt-2 text-sm font-semibold text-primary">{formatCurrency(item.price)} / night</p>
                    </button>
                  ))}
                  <p className="text-xs text-rose-600 md:col-span-2">{form.formState.errors.roomId?.message}</p>
                </div>
              ) : null}

              {step === 3 ? (
                <div className="space-y-3">
                  {addons.map((addon) => {
                    const selected = form.watch("addons")?.includes(addon.id);
                    return (
                      <label
                        key={addon.id}
                        className={`flex cursor-pointer items-center justify-between rounded-2xl border p-4 ${
                          selected ? "border-primary bg-primary/10" : "border-border/70"
                        }`}
                      >
                        <span className="text-sm font-medium">{addon.label}</span>
                        <input
                          type="checkbox"
                          checked={selected}
                          className="h-4 w-4 accent-primary"
                          onChange={(event) => {
                            const values = form.getValues("addons");
                            const updated = event.target.checked
                              ? [...values, addon.id]
                              : values.filter((value) => value !== addon.id);
                            form.setValue("addons", updated, { shouldValidate: true });
                          }}
                        />
                      </label>
                    );
                  })}
                </div>
              ) : null}

              {step === 4 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your full name" {...form.register("name")} />
                    <p className="text-xs text-rose-600">{form.formState.errors.name?.message}</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@email.com" {...form.register("email")} />
                    <p className="text-xs text-rose-600">{form.formState.errors.email?.message}</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+1 555 ..." {...form.register("phone")} />
                    <p className="text-xs text-rose-600">{form.formState.errors.phone?.message}</p>
                  </div>
                </div>
              ) : null}

              {step === 5 ? (
                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special requests</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Tell us about transfers, celebrations, dietary requests, or preferred room settings."
                    {...form.register("specialRequests")}
                  />
                  <p className="text-xs text-muted-foreground">
                    Your inquiry does not guarantee availability until confirmed by our reservations team.
                  </p>
                  <p className="text-xs text-rose-600">{form.formState.errors.specialRequests?.message}</p>
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>

          {form.formState.errors.root?.message ? <p className="text-sm text-rose-600">{form.formState.errors.root.message}</p> : null}

          <div className="flex flex-wrap items-center gap-3">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={previousStep}>
                Back
              </Button>
            ) : null}
            {step < 5 ? (
              <Button type="button" onClick={nextStep}>
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

