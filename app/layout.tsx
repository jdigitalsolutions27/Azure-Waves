import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { StickyMobileCTA } from "@/components/site/sticky-mobile-cta";
import { TopInfoBar } from "@/components/site/top-info-bar";
import { buildMetadata, siteUrl } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "Azure Waves Resort | Luxury Beachfront Escape",
  description:
    "Escape to Azure Waves Resort for premium beachfront stays, curated experiences, and seamless booking inquiries.",
});

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Azure Waves Resort",
  url: siteUrl,
  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  telephone: "+1 (305) 555-0148",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Coral Bay Drive",
    addressLocality: "Azure Coast",
    addressCountry: "US",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Infinity Pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Beach Access", value: true },
    { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} min-h-screen font-sans`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }} />
        <TopInfoBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}

