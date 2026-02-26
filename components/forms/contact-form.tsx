"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  message: z.string().min(10, "Please add a short message."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactValues) => {
    void values;
    form.reset();
    setSubmitted(true);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" placeholder="Your name" {...form.register("name")} />
          <p className="text-xs text-rose-600">{form.formState.errors.name?.message}</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input id="contact-email" type="email" placeholder="you@email.com" {...form.register("email")} />
          <p className="text-xs text-rose-600">{form.formState.errors.email?.message}</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-phone">Phone</Label>
          <Input id="contact-phone" placeholder="+1 ..." {...form.register("phone")} />
          <p className="text-xs text-rose-600">{form.formState.errors.phone?.message}</p>
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea id="contact-message" placeholder="How can we help?" {...form.register("message")} />
          <p className="text-xs text-rose-600">{form.formState.errors.message?.message}</p>
        </div>
      </div>

      <Button type="submit">Send Message</Button>
      {submitted ? <p className="text-sm text-emerald-600">Message sent. Our team will contact you soon.</p> : null}
    </form>
  );
}

