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

      {/* HERO */}
      <section className="relative flex min-h-[70vh] w-full flex-col justify-center bg-foreground px-6 py-24 text-background sm:px-14">
        <Link
          href="/#work"
          className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm font-semibold uppercase text-background/90 hover:text-accent sm:top-10 sm:left-14"
        >
          &larr; Back to work
        </Link>

        <div className="mb-3 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
          {item.tags.join(" / ")}
        </div>
        <h1 className="font-display max-w-4xl text-5xl leading-[0.95] font-extrabold tracking-tight uppercase sm:text-[88px]">
          {item.client}
        </h1>
      </section>

      {/* META + SUMMARY */}
      <section className="border-b border-foreground/10 px-6 py-14 sm:px-14 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_2fr] sm:gap-16">
          <div className="flex flex-row gap-10 sm:sticky sm:top-28 sm:flex-col sm:gap-8 sm:self-start">
            <div>
              <div className="mb-2 text-xs font-semibold tracking-[0.12em] text-foreground/40 uppercase">
                Year
              </div>
              <div className="font-heading text-2xl font-bold">
                {item.year}
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold tracking-[0.12em] text-foreground/40 uppercase">
                Focus
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-foreground/15 px-2.5 py-1 text-xs text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-2xl leading-snug font-medium tracking-tight sm:text-3xl">
              {item.summary}
            </p>
            {item.result && (
              <div className="mt-8 inline-block border-t-2 border-accent pt-3">
                <div className="mb-1 text-xs font-semibold tracking-[0.12em] text-foreground/40 uppercase">
                  Result
                </div>
                <p className="text-lg font-semibold text-accent">
                  {item.result}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {item.gallery && item.gallery.length > 0 && (
        <section className="border-b border-foreground/10 px-6 py-14 sm:px-14 sm:py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
            {item.gallery.map((media, i) => (
              <div
                key={i}
                className={`relative w-full overflow-hidden bg-foreground ${
                  i % 3 === 0
                    ? "aspect-4/5 sm:col-span-4"
                    : "aspect-square sm:col-span-2"
                }`}
              >
                <WorkMedia
                  image={media.image}
                  video={media.video}
                  alt={`${item.client} ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* BRIEF */}
      {item.brief && (
        <section className="border-b border-foreground/10 bg-foreground px-6 py-20 text-background sm:px-14 sm:py-28">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[3fr_2fr] sm:gap-16">
            <div>
              {item.briefLabel && (
                <span className="mb-8 inline-block rounded-full border border-background/30 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-background/80 uppercase">
                  {item.briefLabel}
                </span>
              )}
              <h2 className="font-display max-w-2xl text-3xl leading-[1.15] font-bold tracking-tight uppercase sm:text-5xl">
                {item.brief}
              </h2>
            </div>
            {item.briefDetail && (
              <p className="max-w-md text-base leading-relaxed text-background/60 sm:pt-14">
                {item.briefDetail}
              </p>
            )}
          </div>
        </section>
      )}

      {/* VIDEO ROW */}
      {item.videos && item.videos.length > 0 && (
        <section className="border-b border-foreground/10 px-6 py-14 sm:px-14 sm:py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {item.videos.slice(0, 3).map((src, i) => (
              <div
                key={i}
                className="relative aspect-3/4 w-full overflow-hidden bg-foreground"
              >
                <WorkMedia video={src} alt={`${item.client} video ${i + 1}`} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* APPROACH */}
      {item.approachHeadline && (
        <section className="border-b border-foreground/10 bg-foreground px-6 py-20 text-background sm:px-14 sm:py-28">
          <h2 className="font-display max-w-4xl text-4xl leading-[1.05] font-bold tracking-tight uppercase sm:text-6xl">
            {item.approachHeadline}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-14 sm:grid-cols-2 sm:gap-16">
            {item.approachChallenge && (
              <p className="text-base leading-relaxed text-background/60">
                {item.approachChallenge}
              </p>
            )}
            {item.approachSolution && (
              <p className="text-base leading-relaxed text-background/60">
                {item.approachSolution}
              </p>
            )}
          </div>

          {item.pillars && item.pillars.length > 0 && (
            <div className="mt-20 sm:mt-28">
              {item.pillarsLabel && (
                <span className="mb-10 inline-block rounded-full border border-background/30 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-background/80 uppercase">
                  {item.pillarsLabel}
                </span>
              )}
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-12">
                {item.pillars.map((pillar) => (
                  <div key={pillar.title}>
                    <h3 className="font-display mb-3 text-2xl font-bold tracking-tight uppercase sm:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="text-base leading-relaxed text-background/60">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* VIDEO ROW 2 */}
      {item.videos2 && item.videos2.length > 0 && (
        <section className="border-b border-foreground/10 px-6 py-14 sm:px-14 sm:py-20">
          <div
            className={
              item.videos2.length === 2
                ? "grid grid-cols-1 gap-6 sm:mx-auto sm:max-w-[66%] sm:grid-cols-2"
                : "grid grid-cols-1 gap-6 sm:grid-cols-3"
            }
          >
            {item.videos2.slice(0, 3).map((src, i) => (
              <div
                key={i}
                className="relative aspect-3/4 w-full overflow-hidden bg-foreground"
              >
                <WorkMedia video={src} alt={`${item.client} video ${i + 4}`} />
              </div>
            ))}
          </div>
        </section>
      )}

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
