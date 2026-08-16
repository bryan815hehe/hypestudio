import Image from "next/image";
import type { WorkItem } from "@/data/work";

export default function WorkCard({ item }: { item: WorkItem }) {
  const Wrapper = item.link ? "a" : "div";
  const wrapperProps = item.link
    ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper {...wrapperProps} className="group block">
      <div className="relative mb-5 aspect-4/5 w-full overflow-hidden bg-foreground">
        {item.video ? (
          <video
            src={item.video}
            poster={item.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : item.image ? (
          <Image
            src={item.image}
            alt={item.client}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center font-heading text-sm text-background/35">
            {item.client}
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-semibold group-hover:underline sm:text-[22px]">
          {item.client}
        </h3>
        <span className="shrink-0 text-xs font-semibold text-accent">
          {item.result ?? item.year}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-foreground/70">{item.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-foreground/10 px-2 py-0.5 text-xs text-foreground/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
