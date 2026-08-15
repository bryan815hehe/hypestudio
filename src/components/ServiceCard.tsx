import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 border-t border-foreground/15 py-9 last:border-b sm:grid-cols-[80px_1fr_1fr] sm:items-baseline sm:gap-6">
      <div className="font-heading text-base font-semibold text-accent">
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="font-display text-2xl font-semibold uppercase sm:text-[32px]">
        {service.title}
      </h3>
      <div>
        <p className="text-base leading-relaxed text-foreground/70">
          {service.description}
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {service.deliverables.map((item) => (
            <li key={item} className="text-sm text-foreground/60">
              · {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
