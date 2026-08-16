import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import WorkCard from "@/components/WorkCard";
import WorkMedia from "@/components/WorkMedia";
import { agency } from "@/data/agency";
import { work } from "@/data/work";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) return {};
  return {
    title: `${item.client} — ${agency.name}`,
    description: item.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) notFound();

  const otherWork = work.filter((w) => w.slug !== item.slug).slice(0, 3);

  return (
    <>
      <Header />

      <section className="border-b border-foreground/10 px-6 py-14 sm:px-14 sm:py-20">
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase text-foreground/70 hover:text-accent"
        >
          &larr; Back to work
        </Link>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2fr] sm:gap-10">
          <div>
            <div className="mb-4 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
              {item.tags.join(" / ")}
            </div>
            <div className="text-sm text-foreground/50">{item.year}</div>
          </div>
          <div>
            <h1 className="font-display max-w-2xl text-4xl font-bold tracking-tight uppercase sm:text-[52px]">
              {item.client}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/70">
              {item.summary}
            </p>
            {item.result && (
              <p className="mt-5 text-sm font-semibold text-accent">
                {item.result}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10 px-6 py-14 sm:px-14 sm:py-20">
        <div className="relative aspect-video w-full overflow-hidden bg-foreground">
          <WorkMedia image={item.image} video={item.video} alt={item.client} />
        </div>

        {item.gallery && item.gallery.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {item.gallery.map((media, i) => (
              <div
                key={i}
                className="relative aspect-4/5 w-full overflow-hidden bg-foreground"
              >
                <WorkMedia
                  image={media.image}
                  video={media.video}
                  alt={`${item.client} ${i + 1}`}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      {otherWork.length > 0 && (
        <section className="border-b border-foreground/10 px-6 py-24 sm:px-14 sm:py-28">
          <div className="mb-14 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            More Work
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {otherWork.map((w) => (
              <WorkCard key={w.slug} item={w} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-foreground px-6 py-28 text-center text-background sm:px-14 sm:py-36">
        <div className="mb-7 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
          Let&apos;s Talk
        </div>
        <h2 className="font-display mx-auto mb-10 max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight uppercase sm:text-6xl lg:text-[68px]">
          Ready to make some noise?
        </h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={agency.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent inline-flex items-center gap-2.5 rounded-sm px-9 py-4.5 text-lg font-semibold uppercase text-foreground hover:opacity-90"
          >
            Book a free strategy call &rarr;
          </a>
          <a
            href={`mailto:${agency.email}`}
            className="text-background/70 text-sm hover:text-background hover:underline"
          >
            {agency.email}
          </a>
        </div>
      </section>
    </>
  );
}
