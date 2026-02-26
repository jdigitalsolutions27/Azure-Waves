"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";

import { galleryCategories, galleryItems } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [activeImageId, setActiveImageId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = useMemo(() => {
    if (category === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === category);
  }, [category]);

  const activeItem = galleryItems.find((item) => item.id === activeImageId);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((item) => (
          <Button
            key={item}
            variant={category === item ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory(item)}
          >
            {item}
          </Button>
        ))}
      </div>

      {isLoading ? (
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <Skeleton key={index} className={cn("w-full break-inside-avoid", index % 3 === 0 ? "h-80" : "h-64")} />
          ))}
        </div>
      ) : (
        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setActiveImageId(item.id)}
              className={cn(
                "group relative w-full overflow-hidden rounded-3xl break-inside-avoid text-left",
                index % 3 === 0 ? "h-[340px]" : "h-[260px]",
              )}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#bbd1e3]">{item.category}</p>
                <p className="mt-1 text-sm font-medium text-white">{item.title}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      <Dialog open={Boolean(activeItem)} onOpenChange={(open) => !open && setActiveImageId(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{activeItem?.title}</DialogTitle>
          </DialogHeader>
          {activeItem ? (
            <div className="relative aspect-[16/10] w-full">
              <Image src={activeItem.image} alt={activeItem.title} fill className="object-cover" sizes="90vw" />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

