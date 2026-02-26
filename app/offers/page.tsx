import { Clock3 } from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { OfferCard } from "@/components/site/offer-card";
import { SectionHeader } from "@/components/site/section-header";
import { offers } from "@/data/offers";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Offers & Packages | Azure Waves Resort",
  description: "Explore curated resort packages with inclusions for romance, family, wellness, and long stays.",
  path: "/offers",
});

export default function OffersPage() {
  return (
    <div className="container py-10 sm:py-12 md:py-14">
      <FadeIn>
        <SectionHeader
          eyebrow="Offers"
          title="Exclusive Packages for Elevated Escapes"
          description="Secure special value with premium inclusions tailored to your travel style."
        />
      </FadeIn>

      <div className="mt-8 rounded-3xl border border-primary/15 bg-primary/5 p-5">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
          <Clock3 className="h-4 w-4" />
          Limited Offer Window
        </p>
        <div className="mt-4 grid gap-3 text-center sm:grid-cols-3">
          <div className="rounded-2xl bg-white/90 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Days Left</p>
            <p className="mt-1 font-display text-4xl">09</p>
          </div>
          <div className="rounded-2xl bg-white/90 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Promo Slots</p>
            <p className="mt-1 font-display text-4xl">17</p>
          </div>
          <div className="rounded-2xl bg-white/90 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Packages</p>
            <p className="mt-1 font-display text-4xl">06</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <FadeIn key={offer.id} delay={index * 0.06}>
            <OfferCard offer={offer} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}


