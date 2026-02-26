import Link from "next/link";

import type { Offer } from "@/data/offers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <Card className="h-full border-primary/10 bg-white/90">
      <CardHeader className="space-y-4">
        <Badge className="w-fit">{offer.badge}</Badge>
        <CardTitle>{offer.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{offer.description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {offer.inclusions.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-2xl bg-primary/10 px-3 py-2 text-xs font-medium text-primary">{offer.conditions}</p>
        <Button asChild className="mt-5 w-full">
          <Link href={`/booking?offer=${offer.id}`}>Inquire</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

