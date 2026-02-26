import Image from "next/image";
import Link from "next/link";
import { CalendarDays, UtensilsCrossed } from "lucide-react";

import { FadeIn } from "@/components/site/fade-in";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { amenities } from "@/data/amenities";
import { experiences } from "@/data/experiences";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Experiences & Amenities | Azure Waves Resort",
  description:
    "Discover premium resort amenities, curated activities, culinary highlights, and daily schedules.",
  path: "/amenities",
});

const dailySchedule = [
  { time: "6:30 AM", item: "Sunrise Yoga at Ocean Deck" },
  { time: "9:00 AM", item: "Breakfast at Coastal Restaurant" },
  { time: "11:00 AM", item: "Guided Snorkeling Session" },
  { time: "3:00 PM", item: "Spa and Wellness Rituals" },
  { time: "5:30 PM", item: "Sunset Cruise Departure" },
  { time: "8:00 PM", item: "Live Music at Skyline Bar" },
];

const menuHighlights = ["Charred Lobster Linguine", "Sea Salt Ceviche", "Coconut Lime Panna Cotta", "Smoked Pineapple Mocktail"];

export default function AmenitiesPage() {
  return (
    <div className="container py-10 sm:py-12 md:py-14">
      <FadeIn>
        <SectionHeader
          eyebrow="Experiences & Amenities"
          title="Curated Resort Living from Sunrise to Starlight"
          description="From wellness rituals to ocean adventures and elevated dining, every moment is designed to feel exceptional."
        />
      </FadeIn>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {amenities.map((amenity, index) => (
          <FadeIn key={amenity.id} delay={index * 0.06}>
            <article className="overflow-hidden rounded-3xl border border-primary/10 bg-white/90">
              <div className="relative aspect-[4/3]">
                <Image src={amenity.image} alt={amenity.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-primary/70">{amenity.highlight}</p>
                <h3 className="mt-2 font-display text-3xl">{amenity.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <section className="mt-16 grid gap-6 rounded-3xl border border-primary/10 bg-white/90 p-7 lg:grid-cols-2">
        <FadeIn>
          <SectionHeader
            eyebrow="Restaurant & Bar"
            title="Chef-Led Dining and Sunset Cocktails"
            description="Enjoy refined coastal cuisine paired with signature drinks and panoramic views."
          />
          <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {menuHighlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-primary/10 bg-primary/5 p-5">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary/70">
              <CalendarDays className="h-4 w-4" />
              Daily Schedule
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              {dailySchedule.map((slot) => (
                <div key={slot.time} className="flex items-start justify-between gap-4 rounded-xl bg-white/70 p-3">
                  <span className="font-semibold text-foreground">{slot.time}</span>
                  <span className="text-right">{slot.item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mt-16">
        <SectionHeader
          eyebrow="Activities"
          title="Adventure Along the Coast"
          description="Choose from water adventures, guided explorations, and local culture immersions."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {experiences.slice(0, 6).map((experience) => (
            <article key={experience.id} className="rounded-3xl border border-primary/10 bg-white/90 p-5">
              <h3 className="font-display text-2xl">{experience.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{experience.description}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-primary/70">{experience.duration}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-primary/10 bg-wave-gradient p-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary/80">Events & Weddings</p>
        <h2 className="mt-3 font-display text-4xl">Plan your beach celebration with us</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
          Intimate ceremonies, private receptions, and curated event experiences crafted by our dedicated planning team.
        </p>
        <Button asChild className="mt-6">
          <Link href="/contact">Speak with Events Team</Link>
        </Button>
      </section>
    </div>
  );
}


