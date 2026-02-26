import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";

import { navLinks, resortInfo } from "@/lib/site";
import { ResortLogo } from "@/components/site/resort-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-primary/10 bg-[#04162b] pb-24 pt-14 text-[#d0deea] md:pb-8">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <ResortLogo
            light
            textClassName="[&>span:first-child]:text-white [&>span:last-child]:text-[#93b4cc]"
          />
          <p className="mt-3 text-sm leading-relaxed text-[#9eb3c9]">
            A luxury beachfront sanctuary where calm mornings, curated experiences, and premium hospitality meet.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={`mailto:${resortInfo.email}`} aria-label="Email" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7fa7c6]">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7fa7c6]">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#bdd1e3]">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4" />
              <span>{resortInfo.location}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={`tel:${resortInfo.phoneRaw}`} className="hover:text-white">
                {resortInfo.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${resortInfo.email}`} className="hover:text-white">
                {resortInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7fa7c6]">Newsletter</h4>
          <p className="mt-4 text-sm text-[#bdd1e3]">Receive exclusive offers and seasonal escape guides.</p>
          <form className="mt-4 space-y-3">
            <Input
              type="email"
              placeholder="Your email"
              className="border-white/20 bg-white/10 text-white placeholder:text-[#9eb3c9]"
              aria-label="Email"
            />
            <Button className="w-full" variant="secondary" type="button">
              Subscribe <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      <div className="container mt-12 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-[#8ca7bf] md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Azure Waves Resort. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/contact" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-white">
            Terms & Conditions
          </Link>
          <Link href="/contact" className="hover:text-white">
            Booking Policies
          </Link>
        </div>
      </div>
    </footer>
  );
}
