"use client";

import { useRef } from "react";
import WorkMedia from "@/components/WorkMedia";

export default function GallerySlider({
  items,
  client,
}: {
  items: { image?: string; video?: string }[];
  client: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-slide]");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((media, i) => (
          <div
            key={i}
            data-slide
            className="relative aspect-4/5 w-[80%] shrink-0 snap-start overflow-hidden bg-foreground sm:w-[38%] lg:w-[30%]"
          >
            <WorkMedia
              image={media.image}
              video={media.video}
              alt={`${client} ${i + 1}`}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(-1)}
        aria-label="Previous image"
        className="absolute top-1/2 left-2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-background/90 p-3 text-foreground shadow-lg hover:bg-background sm:flex"
      >
        &larr;
      </button>
      <button
        type="button"
        onClick={() => scrollByAmount(1)}
        aria-label="Next image"
        className="absolute top-1/2 right-2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-background/90 p-3 text-foreground shadow-lg hover:bg-background sm:flex"
      >
        &rarr;
      </button>
    </div>
  );
}
