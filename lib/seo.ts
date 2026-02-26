import type { Metadata } from "next";

const siteUrl = "https://azurewavesresort.example";

export const defaultOgImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80";

export function buildMetadata({
  title,
  description,
  path = "/",
  image = defaultOgImage,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      shortcut: ["/icon.svg"],
      apple: [{ url: "/icon.svg" }],
    },
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "Azure Waves Resort",
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export { siteUrl };

