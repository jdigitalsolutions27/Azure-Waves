import { MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";

import { resortInfo } from "@/lib/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/20 bg-white/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-soft backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2 text-xs font-semibold">
        <a href={`tel:${resortInfo.phoneRaw}`} className="inline-flex min-h-10 items-center justify-center gap-1 rounded-full border border-primary/20 px-2 py-2 text-primary transition hover:bg-primary/5">
          <PhoneCall className="h-3.5 w-3.5" />
          Call
        </a>
        <a
          href={`https://wa.me/${resortInfo.whatsappRaw}?text=${encodeURIComponent("Hi Azure Waves Resort, I want to ask about room availability.")}`}
          target="_blank" rel="noreferrer"
          className="inline-flex min-h-10 items-center justify-center gap-1 rounded-full border border-primary/20 px-2 py-2 text-primary transition hover:bg-primary/5"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          WhatsApp
        </a>
        <Link href="/booking" className="inline-flex min-h-10 items-center justify-center rounded-full bg-primary px-2 py-2 text-primary-foreground transition hover:brightness-110">
          Book
        </Link>
      </div>
    </div>
  );
}

