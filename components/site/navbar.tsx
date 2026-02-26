"use client";

import Link from "next/link";
import { Menu, MessageCircle, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";

import { navLinks, resortInfo } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ResortLogo } from "@/components/site/resort-logo";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-white/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="inline-flex items-center gap-2">
          <ResortLogo hideTextOnMobile className="sm:gap-3" markClassName="h-10 w-10 sm:h-11 sm:w-11" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-foreground/80 transition hover:text-primary",
                pathname === link.href && "text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Quick Contact</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a href={`tel:${resortInfo.phoneRaw}`}>Call Concierge</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={`mailto:${resortInfo.email}`}>Email Reservations</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  target="_blank" rel="noreferrer"
                  href={`https://wa.me/${resortInfo.whatsappRaw}?text=${encodeURIComponent("Hi Azure Waves Resort, I'd like to inquire about available rooms.")}`}
                >
                  WhatsApp Us
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild>
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button size="icon" variant="outline" asChild>
            <a href={`tel:${resortInfo.phoneRaw}`} aria-label="Call resort">
              <PhoneCall className="h-4 w-4" />
            </a>
          </Button>
          <Button size="icon" variant="outline" asChild>
            <a
              href={`https://wa.me/${resortInfo.whatsappRaw}?text=${encodeURIComponent("Hi Azure Waves Resort, I'd like to ask about availability.")}`}
              target="_blank" rel="noreferrer"
              aria-label="WhatsApp resort"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm">
              <SheetHeader>
                <SheetTitle>
                  <ResortLogo markClassName="h-10 w-10" />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium hover:bg-primary/10",
                      pathname === link.href && "bg-primary/10 text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="/booking">Book Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

