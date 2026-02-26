import Image from "next/image";
import Link from "next/link";
import { BedDouble, Expand, Users } from "lucide-react";

import type { Room } from "@/data/rooms";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function RoomCard({ room }: { room: Room }) {
  return (
    <Card className="overflow-hidden border-primary/10 bg-white/90 transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-[4/3]">
        <Image src={room.images[0]} alt={room.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <Badge variant="outline" className="bg-white/75 backdrop-blur">
            {room.view} View
          </Badge>
          {room.featured ? <Badge>Featured</Badge> : null}
        </div>
      </div>

      <CardContent className="p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div>
            <h3 className="font-display text-[1.65rem] leading-tight">{room.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{room.description}</p>
          </div>
          <p className="shrink-0 text-left text-sm font-semibold text-primary sm:text-right">
            {formatCurrency(room.price)}
            <span className="block text-xs font-medium text-muted-foreground">/ night</span>
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1">
            <Users className="h-3.5 w-3.5" />
            {room.capacity} Guests
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1">
            <Expand className="h-3.5 w-3.5" />
            {room.size}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1">
            <BedDouble className="h-3.5 w-3.5" />
            {room.bedType}
          </span>
        </div>

        <div className="mt-5 flex gap-2">
          <Button asChild className="flex-1">
            <Link href={`/stay/${room.slug}`}>View Room</Link>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <Link href={`/booking?roomId=${room.id}`}>Inquire</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

