import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Shield, Sparkles, Users } from "lucide-react";

import { ImageCarousel } from "@/components/site/image-carousel";
import { RoomCard } from "@/components/site/room-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rooms } from "@/data/rooms";
import { buildMetadata } from "@/lib/seo";
import { formatCurrency } from "@/lib/utils";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const room = rooms.find((item) => item.slug === params.slug);
  if (!room) {
    return buildMetadata({
      title: "Room Not Found | Azure Waves Resort",
      description: "The room you are looking for could not be found.",
      path: "/stay",
    });
  }

  return buildMetadata({
    title: `${room.name} | Azure Waves Resort`,
    description: room.description,
    path: `/stay/${room.slug}`,
    image: room.images[0],
  });
}

export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export default function RoomDetailsPage({ params }: Props) {
  const room = rooms.find((item) => item.slug === params.slug);
  if (!room) notFound();

  const similarRooms = rooms.filter((item) => item.slug !== room.slug && item.view === room.view).slice(0, 3);

  return (
    <div className="container pb-28 pt-10 sm:pb-32 sm:pt-12 md:pb-14 md:pt-14">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary/70">Accommodation Details</p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">{room.name}</h1>
            <p className="mt-3 text-sm text-muted-foreground">{room.description}</p>
          </div>

          <ImageCarousel images={room.images} alt={room.name} />

          <div className="flex flex-wrap gap-2">
            {room.highlights.map((highlight) => (
              <Badge key={highlight}>{highlight}</Badge>
            ))}
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="h-auto flex-wrap gap-1 rounded-2xl p-1.5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="policies">Policies</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> Up to {room.capacity} guests</li>
                <li className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> {room.size} private interior space</li>
                <li className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> {room.view} view category</li>
              </ul>
            </TabsContent>

            <TabsContent value="inclusions">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {room.inclusions.map((item) => (
                  <li key={item} className="inline-flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="amenities">
              <p className="text-sm text-muted-foreground">
                High-speed WiFi, premium bedding, climate control, luxury bath amenities, smart TV, minibar, and 24/7 concierge support.
              </p>
            </TabsContent>

            <TabsContent value="policies">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {room.policies.map((policy) => (
                  <li key={policy} className="inline-flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {policy}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-3xl border border-primary/10 bg-white/95 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/70">From</p>
            <p className="mt-1 font-display text-4xl text-primary">{formatCurrency(room.price)}</p>
            <p className="text-sm text-muted-foreground">Per night, taxes and fees may apply.</p>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p>{room.bedType}</p>
              <p>{room.size}</p>
              <p>{room.view} view</p>
            </div>
            <Button asChild className="mt-6 w-full">
              <Link href={`/booking?roomId=${room.id}`}>Book This Room</Link>
            </Button>
            <Button asChild variant="outline" className="mt-3 w-full">
              <Link href="/contact">Ask a Concierge</Link>
            </Button>
          </div>
        </aside>
      </div>

      <section className="mt-16">
        <h2 className="font-display text-3xl">Similar Rooms</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {similarRooms.map((item) => (
            <RoomCard key={item.id} room={item} />
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/10 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
        <Button asChild className="w-full">
          <Link href={`/booking?roomId=${room.id}`}>Book This Room - {formatCurrency(room.price)}/night</Link>
        </Button>
      </div>
    </div>
  );
}
