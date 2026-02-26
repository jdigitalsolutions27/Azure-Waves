import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/site/fade-in";
import { SectionHeader } from "@/components/site/section-header";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";
import { resortInfo } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact | Azure Waves Resort",
  description: "Reach Azure Waves Resort via phone, email, WhatsApp, or map directions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container py-10 sm:py-12 md:py-14">
      <FadeIn>
        <SectionHeader
          eyebrow="Contact"
          title="Let's Plan Your Escape"
          description="Reach our reservations team anytime for room recommendations, offers, and custom arrangements."
        />
      </FadeIn>

      <div className="mt-8 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <div className="space-y-4 rounded-3xl border border-primary/10 bg-white/95 p-6">
            <h3 className="font-display text-2xl">Contact Information</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {resortInfo.location}</p>
              <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {resortInfo.phoneDisplay}</p>
              <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {resortInfo.email}</p>
              <p className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" /> {resortInfo.hours}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <a href={`tel:${resortInfo.phoneRaw}`}>Call Us</a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  target="_blank" rel="noreferrer"
                  href={`https://wa.me/${resortInfo.whatsappRaw}?text=${encodeURIComponent("Hi Azure Waves Resort, I would like to inquire.")}`}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4">
              <p className="text-sm font-semibold text-foreground">Send us a message</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Our team responds quickly to booking, package, events, and transportation requests.
              </p>
            </div>

            <ContactForm />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-4">
            <iframe
              title="Azure Waves Resort Map"
              src={resortInfo.mapEmbed}
              loading="lazy"
              className="h-[420px] w-full rounded-3xl border border-primary/15"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <Button asChild className="w-full sm:w-auto">
              <a href={resortInfo.mapDirections} target="_blank" rel="noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}


