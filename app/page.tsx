import Image from "next/image";
import Link from "next/link";
import { Compass, MapPin, Ship, Sparkles, Star } from "lucide-react";

import { AvailabilityWidget } from "@/components/site/availability-widget";
import { FadeIn } from "@/components/site/fade-in";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { SectionHeader } from "@/components/site/section-header";
import { TestimonialSlider } from "@/components/site/testimonial-slider";
import { LuxuryCanvasBackdrop } from "@/components/site/luxury-canvas-backdrop";
import { OfferCard } from "@/components/site/offer-card";
import { RoomCard } from "@/components/site/room-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { amenities } from "@/data/amenities";
import { experiences } from "@/data/experiences";
import { galleryItems } from "@/data/gallery";
import { offers } from "@/data/offers";
import { rooms } from "@/data/rooms";
import { buildMetadata } from "@/lib/seo";
import { resortInfo } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Azure Waves Resort | Escape to Azure Waves",
  description:
    "A premium beachfront resort experience with luxury rooms, curated amenities, and seamless booking inquiry.",
  path: "/",
});

const featuredRooms = rooms.filter((room) => room.featured).slice(0, 4);

export default function HomePage() {
  return (
    <div className="relative overflow-hidden pb-8 md:pb-10">
      <LuxuryCanvasBackdrop className="absolute inset-0 -z-20 hidden h-full w-full opacity-90 md:block" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12rem] top-[26rem] h-[24rem] w-[24rem] rounded-full bg-[#55b8d2]/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-[78rem] h-[28rem] w-[28rem] rounded-full bg-[#0f3f74]/16 blur-3xl" />
        <div className="absolute left-[22%] top-[118rem] h-[16rem] w-[16rem] rounded-full bg-[#89cfb8]/25 blur-3xl" />
      </div>
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[88svh] min-h-[540px] w-full sm:min-h-[620px] lg:min-h-[680px]">
          <Image
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2200&q=80"
            alt="Cinematic beachfront view of Azure Waves Resort"
            fill
            priority
            className="hero-pan object-cover"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="container relative z-10 flex h-full flex-col justify-center text-[#f8f6f1]">
            <div className="max-w-4xl rounded-[1.7rem] border border-white/25 bg-[linear-gradient(135deg,rgba(4,22,40,0.66),rgba(6,33,53,0.48))] p-5 shadow-[0_30px_90px_rgba(3,21,41,0.45)] sm:rounded-[2.2rem] sm:p-7 md:bg-[linear-gradient(135deg,rgba(4,22,40,0.56),rgba(6,33,53,0.4))] md:p-10">
              <FadeIn>
                <Badge className="w-fit bg-white/15 text-white">Luxury Beachfront Retreat</Badge>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.1rem,8vw,4.6rem)] leading-[0.95]">Escape to Azure Waves.</h1>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="mt-4 max-w-xl text-sm text-[#d9e5ef] sm:text-base md:text-lg">
                  A premium beachfront resort experience with signature rooms, cinematic ocean views, and unforgettable moments.
                </p>
              </FadeIn>
              <FadeIn delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="#availability">Check Availability</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                    <Link href="/stay">Explore Accommodations</Link>
                  </Button>
                </div>
              </FadeIn>

              <FadeIn delay={0.32}>
                <div className="mt-8 grid max-w-2xl gap-3 rounded-2xl border border-white/25 bg-[#071f34]/50 p-4 sm:rounded-3xl sm:p-5 md:grid-cols-3 md:bg-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#a9c2d8]">Guest Rating</p>
                    <p className="mt-2 inline-flex items-center gap-2 text-xl font-semibold">
                      4.9 <Star className="h-4 w-4 fill-[#f3c76a] text-[#f3c76a]" />
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#a9c2d8]">Best Time to Visit</p>
                    <p className="mt-2 text-sm font-semibold">November - May</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#a9c2d8]">Flexible Policy</p>
                    <p className="mt-2 text-sm font-semibold">Free cancellation on most rates</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-white/90 md:block">
            <p className="animate-bounce text-xs uppercase tracking-[0.26em]">Scroll</p>
          </div>
        </div>
      </section>

      <section id="availability" className="container relative z-20 -mt-8 sm:-mt-14 md:-mt-24">
        <AvailabilityWidget />
      </section>

      <section className="container mt-14 sm:mt-16 md:mt-20">
        <FadeIn>
          <SectionHeader
            eyebrow="Featured Stay"
            title="Signature Rooms and Villas"
            description="Crafted spaces designed for comfort, privacy, and panoramic ocean or lagoon perspectives."
          />
        </FadeIn>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredRooms.map((room, index) => (
            <FadeIn key={room.id} delay={index * 0.06}>
              <RoomCard room={room} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container mt-16 sm:mt-20 md:mt-24">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-[#d3e3ef] bg-[linear-gradient(145deg,#f7fbff_0%,#f3f8fb_52%,#e7f1f7_100%)] px-5 py-10 md:px-8 md:py-12">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-16 h-40 w-40 rounded-full bg-[#5db6d5]/20 blur-3xl" />
            <div className="absolute -right-12 bottom-10 h-52 w-52 rounded-full bg-[#204f82]/15 blur-3xl" />
          </div>
          <FadeIn>
            <SectionHeader
              eyebrow="Amenities"
              title="Everything You Need, Elevated"
              description="From sunrise pool dips to rooftop sunset cocktails, each amenity is curated for modern luxury stays."
            />
          </FadeIn>
          <div className="relative mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {amenities.slice(0, 6).map((amenity, index) => (
              <FadeIn key={amenity.id} delay={index * 0.06}>
                <article className="group overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-[0_16px_40px_rgba(10,58,95,0.12)] backdrop-blur">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={amenity.image}
                      alt={amenity.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105 group-hover:saturate-[1.12]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#03203d]/45 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary/70">{amenity.highlight}</p>
                    <h3 className="mt-2 font-display text-2xl">{amenity.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{amenity.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container mt-16 sm:mt-20 md:mt-24">
        <FadeIn>
          <SectionHeader
            eyebrow="Experiences"
            title="Curated Coastal Adventures"
            description="Discover sea-bound adventures and intimate evening moments designed around your pace."
          />
        </FadeIn>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {experiences.slice(0, 4).map((experience, index) => (
            <FadeIn key={experience.id} delay={index * 0.07}>
              <div className="rounded-3xl border border-primary/10 bg-white/90 p-5">
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-2 text-primary">
                  {index % 2 === 0 ? <Compass className="h-4 w-4" /> : <Ship className="h-4 w-4" />}
                </div>
                <h3 className="font-display text-2xl">{experience.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{experience.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">{experience.duration}</p>
                <Button asChild variant="ghost" className="mt-3 px-0">
                  <Link href={`/booking?experience=${experience.id}`}>Ask about this</Link>
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container mt-16 sm:mt-20 md:mt-24">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-[#13395f]/20 bg-[linear-gradient(135deg,#031529_0%,#0a3456_60%,#114a6f_100%)] px-5 py-10 md:px-8 md:py-12">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(119,196,222,0.22),transparent_35%),radial-gradient(circle_at_82%_88%,rgba(137,214,189,0.16),transparent_30%)]" />
          </div>
          <FadeIn>
            <SectionHeader
              eyebrow="Gallery"
              title="A Glimpse of Azure Moments"
              description="See curated highlights across suites, dining, experiences, and our private shoreline."
              className="[&>p]:text-[#b8d4e8] [&>h2]:text-white"
            />
          </FadeIn>
          <div className="relative mt-8 grid gap-4 md:grid-cols-3">
            {galleryItems.slice(0, 6).map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.05}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/95">{item.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="relative mt-6">
            <Button asChild variant="outline" className="border-white/35 bg-white/10 text-white hover:bg-white/20">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mt-16 sm:mt-20 md:mt-24">
        <FadeIn>
          <SectionHeader
            eyebrow="Packages"
            title="Offers Designed for Every Escape"
            description="Choose from romantic, family, wellness, and long-stay packages with premium inclusions."
          />
        </FadeIn>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {offers.slice(0, 3).map((offer, index) => (
            <FadeIn key={offer.id} delay={index * 0.08}>
              <OfferCard offer={offer} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container mt-16 sm:mt-20 md:mt-24">
        <FadeIn>
          <SectionHeader
            eyebrow="Guest Reviews"
            title="Trusted by Travelers Worldwide"
            description="Consistently rated for exceptional service, memorable experiences, and premium comfort."
          />
        </FadeIn>
        <div className="mt-8">
          <TestimonialSlider />
        </div>
      </section>

      <section className="container mt-16 grid gap-10 sm:mt-20 md:mt-24 lg:grid-cols-[1fr_1.1fr]">
        <FadeIn>
          <SectionHeader
            eyebrow="FAQs"
            title="Booking and Stay Questions"
            description="Helpful answers for the details guests ask most before arriving at Azure Waves Resort."
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <FAQAccordion />
        </FadeIn>
      </section>

      <section className="container mt-16 grid gap-8 rounded-[2rem] border border-primary/10 bg-white/85 p-5 sm:mt-20 sm:p-6 md:mt-24 md:grid-cols-2 md:p-7">
        <FadeIn>
          <SectionHeader
            eyebrow="Location"
            title="At the Heart of Azure Coast"
            description="Minutes from local attractions, marine tours, and scenic coastal roads."
          />
          <div className="mt-5 space-y-3 text-sm text-muted-foreground">
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {resortInfo.location}
            </p>
            <p>Nearby attractions: Blue Haven Lighthouse, Coral Point Market, and Sapphire Marine Park.</p>
          </div>
          <Button asChild className="mt-6">
            <a href={resortInfo.mapDirections} target="_blank" rel="noreferrer">
              Get Directions
            </a>
          </Button>
        </FadeIn>
        <FadeIn delay={0.12}>
          <iframe
            title="Azure Waves Resort Map"
            src={resortInfo.mapEmbed}
            loading="lazy"
            className="h-80 w-full rounded-3xl border border-primary/15"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FadeIn>
      </section>

      <section className="container mt-16 sm:mt-20 md:mt-24">
        <FadeIn>
          <div className="wave-grid rounded-[2rem] border border-primary/10 bg-wave-gradient px-5 py-11 text-center sm:rounded-[2.2rem] sm:px-8 sm:py-14">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Ready for your escape?
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">
              Send your inquiry today and let us craft your perfect beachfront stay.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Our team usually confirms availability within a few hours. Rates and inclusions are subject to seasonal updates.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/booking">Book Inquiry</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Concierge</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}


