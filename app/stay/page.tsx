import { ShieldCheck, Sparkles, ThumbsUp } from "lucide-react";

import { AvailabilityWidget } from "@/components/site/availability-widget";
import { FadeIn } from "@/components/site/fade-in";
import { SectionHeader } from "@/components/site/section-header";
import { StayCatalog } from "@/components/site/stay-catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Accommodations | Azure Waves Resort",
  description:
    "Browse premium rooms and villas, filter by view and capacity, and submit your resort booking inquiry.",
  path: "/stay",
});

export default function StayPage() {
  return (
    <div className="container py-10 sm:py-12 md:py-14">
      <FadeIn>
        <SectionHeader
          eyebrow="Accommodations"
          title="Find Your Perfect Room or Villa"
          description="Filter by price, capacity, and view to discover the stay that matches your ideal escape."
        />
      </FadeIn>

      <FadeIn delay={0.08} className="mt-8">
        <AvailabilityWidget compact />
      </FadeIn>

      <div className="mt-8">
        <StayCatalog />
      </div>

      <section className="mt-14 rounded-3xl border border-primary/10 bg-white/90 p-7">
        <h3 className="font-display text-3xl">Why stay with us</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl bg-primary/5 p-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="mt-2 text-sm font-semibold">Premium Curated Spaces</p>
            <p className="mt-1 text-xs text-muted-foreground">Elegant interiors, scenic views, and thoughtful in-room details.</p>
          </article>
          <article className="rounded-2xl bg-primary/5 p-4">
            <ThumbsUp className="h-5 w-5 text-primary" />
            <p className="mt-2 text-sm font-semibold">Trusted by Global Guests</p>
            <p className="mt-1 text-xs text-muted-foreground">Highly rated experiences with responsive concierge support.</p>
          </article>
          <article className="rounded-2xl bg-primary/5 p-4">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <p className="mt-2 text-sm font-semibold">Flexible Booking Policies</p>
            <p className="mt-1 text-xs text-muted-foreground">Most room types include free cancellation windows.</p>
          </article>
        </div>
      </section>
    </div>
  );
}


