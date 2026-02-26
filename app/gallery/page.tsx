import { FadeIn } from "@/components/site/fade-in";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { SectionHeader } from "@/components/site/section-header";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery | Azure Waves Resort",
  description: "Browse resort gallery highlights across rooms, amenities, beach, dining, and activities.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="container py-10 sm:py-12 md:py-14">
      <FadeIn>
        <SectionHeader
          eyebrow="Gallery"
          title="Cinematic Highlights from Azure Waves"
          description="Explore curated visuals from suites, dining, beach moments, and resort experiences."
        />
      </FadeIn>

      <div className="mt-8">
        <GalleryGrid />
      </div>
    </div>
  );
}


