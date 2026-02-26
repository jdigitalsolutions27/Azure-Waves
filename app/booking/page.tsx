import { Building2, CalendarCheck2, Phone, ShieldCheck } from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { FadeIn } from "@/components/site/fade-in";
import { SectionHeader } from "@/components/site/section-header";
import { buildMetadata } from "@/lib/seo";

type BookingPageProps = {
  searchParams?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    roomId?: string;
  };
};

export const metadata = buildMetadata({
  title: "Booking Inquiry | Azure Waves Resort",
  description: "Send a multi-step booking inquiry and receive quick confirmation from Azure Waves Resort.",
  path: "/booking",
});

export default function BookingPage({ searchParams }: BookingPageProps) {
  return (
    <div className="container py-10 sm:py-12 md:py-14">
      <FadeIn>
        <SectionHeader
          eyebrow="Booking Inquiry"
          title="Plan Your Stay in Minutes"
          description="Complete the inquiry flow and our reservations team will confirm availability and next steps quickly."
        />
      </FadeIn>

      <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_0.42fr]">
        <FadeIn>
          <BookingForm defaults={searchParams} />
        </FadeIn>

        <FadeIn delay={0.1}>
          <aside className="space-y-4 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl border border-primary/10 bg-white/95 p-5">
              <h3 className="font-display text-2xl">Why inquire now</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="inline-flex items-center gap-2"><CalendarCheck2 className="h-4 w-4 text-primary" /> Fast availability response</li>
                <li className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-primary" /> Tailored room matching</li>
                <li className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Secure reservation process</li>
                <li className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> Concierge follow-up support</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-primary/5 p-5 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Policies & disclaimers</p>
              <p className="mt-2">Rates are sample placeholders and may vary by date, occupancy, and package inclusions.</p>
              <p className="mt-2">Submitting an inquiry does not guarantee a reservation until confirmed by our team.</p>
            </div>
          </aside>
        </FadeIn>
      </div>
    </div>
  );
}


