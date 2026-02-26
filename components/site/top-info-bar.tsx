import Link from "next/link";
import { Clock3, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { resortInfo } from "@/lib/site";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function TopInfoBar() {
  return (
    <div className="hidden border-b border-primary/10 bg-[#031326] text-[#f7f4ee] lg:block">
      <div className="container flex h-10 items-center justify-between text-xs tracking-wide text-[#c8d4e2]">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            {resortInfo.phoneDisplay}
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" />
            {resortInfo.email}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {resortInfo.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-3.5 w-3.5" />
            {resortInfo.hours}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white" aria-label={social.label}>
                <Icon className="h-4 w-4" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

