"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      <Carousel
        opts={{ loop: true }}
        setApi={(api) => {
          if (!api) return;
          const index = api.selectedScrollSnap();
          setActive(index);
          api.on("select", () => setActive(api.selectedScrollSnap()));
        }}
        className="overflow-hidden rounded-3xl"
      >
        <CarouselContent>
          {images.map((image, idx) => (
            <CarouselItem key={`${image}-${idx}`}>
              <div className="relative aspect-[16/10]">
                <Image src={image} alt={`${alt} ${idx + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
      </Carousel>

      <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
        {images.map((image, idx) => (
          <div
            key={`thumb-${image}-${idx}`}
            className={cn(
              "relative aspect-video overflow-hidden rounded-xl border-2 border-transparent",
              active === idx && "border-primary",
            )}
          >
            <Image src={image} alt={`${alt} thumbnail ${idx + 1}`} fill className="object-cover" sizes="140px" />
          </div>
        ))}
      </div>
    </div>
  );
}

