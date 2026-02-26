"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function TestimonialSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      className="w-full"
      setApi={(api) => {
        if (!api) return;
        api.scrollTo(activeSlide);
      }}
    >
      <CarouselContent>
        {testimonials.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full border-primary/10 bg-white/90">
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-3 flex text-[#f3b536]">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={`${item.id}-${index}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.location}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}

