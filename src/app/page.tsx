import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import WorkCard from "@/components/WorkCard";
import { agency } from "@/data/agency";
import { services } from "@/data/services";
import { work } from "@/data/work";

const marqueeItems = [
  "700% GROWTH",
  "209% ORGANIC GROWTH",
  "90-DAY CLIENT INQUIRY AUDIT",
  "CLIENTS, NOT VIEWS",
];

export default function Home() {
  const marqueeText = [...marqueeItems, ...marqueeItems].join(" — ");

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="grid grid-cols-1 gap-10 border-b border-foreground/10 px-6 py-20 sm:grid-cols-[1.4fr_1fr] sm:items-end sm:px-14 sm:py-24 lg:py-28">
        <div className="animate-fade-up">
          <div className="mb-6 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            For Coaching &amp; Wellness Founders
          </div>
          <h1 className="font-display text-5xl leading-[0.98] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-[96px]">
            {agency.tagline}
          </h1>
        </div>
        <div className="animate-fade-up pb-2">
          <p className="mb-8 text-lg leading-relaxed text-foreground/70">
            {agency.oneLiner}
          </p>
          <a
            href={agency.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border-b-2 border-foreground pb-1.5 text-base font-semibold uppercase hover:border-accent hover:text-accent"
          >
            {agency.ctaDirect} &rarr;
          </a>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden bg-foreground py-4.5 text-background">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          <span className="font-display pr-4 text-sm font-medium tracking-[0.04em]">
            {marqueeText} &mdash;
          </span>
          <span className="font-display pr-4 text-sm font-medium tracking-[0.04em]">
            {marqueeText} &mdash;
          </span>
        </div>
      </div>

      {/* PROBLEM */}
      <section
        id="problem"
        className="border-b border-foreground/10 px-6 py-24 sm:px-14 sm:py-28"
      >
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2fr] sm:gap-10">
          <div className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            The Problem
          </div>
          <h2 className="font-display max-w-xl text-4xl font-bold tracking-tight uppercase sm:text-[52px]">
            Great content. Zero inquiries. Sound familiar?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="border-t border-foreground/15 pt-6">
            <div className="mb-2 text-sm font-semibold text-accent uppercase">
              External
            </div>
            <p className="text-base leading-relaxed text-foreground/70">
              {agency.problem.external}
            </p>
          </div>
          <div className="border-t border-foreground/15 pt-6">
            <div className="mb-2 text-sm font-semibold text-accent uppercase">
              Internal
            </div>
            <p className="text-base leading-relaxed text-foreground/70">
              {agency.problem.internal}
            </p>
          </div>
          <div className="border-t border-foreground/15 pt-6">
            <div className="mb-2 text-sm font-semibold text-accent uppercase">
              Philosophical
            </div>
            <p className="text-base leading-relaxed text-foreground/70">
              {agency.problem.philosophical}
            </p>
          </div>
        </div>
        <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground/70">
          {agency.avoidingFailure}
        </p>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-b border-foreground/10 px-6 py-24 sm:px-14 sm:py-28"
      >
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2fr] sm:gap-10">
          <div className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            The Plan
          </div>
          <h2 className="font-display max-w-xl text-4xl font-bold tracking-tight uppercase sm:text-[52px]">
            A {services.length}-step system built to generate inquiries, not
            impressions.
          </h2>
        </div>
        <div className="flex flex-col">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="border-b border-foreground/10 px-6 py-24 sm:px-14 sm:py-28"
      >
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2fr] sm:gap-10">
          <div className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            Selected Work
          </div>
          <h2 className="font-display max-w-xl text-4xl font-bold tracking-tight uppercase sm:text-[52px]">
            Proof, not portfolio pieces.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="grid grid-cols-1 gap-12 border-b border-foreground/10 px-6 py-24 sm:grid-cols-2 sm:gap-16 sm:px-14 sm:py-28"
      >
        <div>
          <div className="mb-6 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            Your Guide
          </div>
          <h2 className="font-display mb-7 text-4xl font-bold tracking-tight uppercase sm:text-5xl">
            An agency that&apos;s already done this in niches most agencies
            won&apos;t touch.
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-foreground/70">
            {agency.bio}
          </p>
          <p className="text-lg leading-relaxed text-foreground/70">
            {agency.guide}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {agency.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-t border-foreground/15 py-8"
            >
              <div className="font-heading text-4xl font-bold sm:text-[44px]">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm text-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-foreground px-6 py-28 text-center text-background sm:px-14 sm:py-36"
      >
        <div className="mb-7 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
          Let&apos;s Talk
        </div>
        <h2 className="font-display mx-auto mb-10 max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight uppercase sm:text-6xl lg:text-[68px]">
          A steady stream of client inquiries starts here.
        </h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={agency.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent inline-flex items-center gap-2.5 rounded-sm px-9 py-4.5 text-lg font-semibold uppercase text-foreground hover:opacity-90"
          >
            {agency.ctaDirect} &rarr;
          </a>
          <a
            href={`mailto:${agency.email}`}
            className="text-background/70 text-sm hover:text-background hover:underline"
          >
            {agency.email}
          </a>
        </div>
        <Link
          href="/work/master-kam-feng-shui"
          className="text-background/70 mt-8 inline-block text-sm hover:text-background hover:underline"
        >
          {agency.ctaTransitional} &rarr;
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="grid grid-cols-2 gap-8 px-6 py-14 text-sm text-foreground/70 sm:grid-cols-3 sm:px-14">
        <Image
          src="/brand/logo.png"
          alt={agency.name}
          width={262}
          height={66}
          className="h-6 w-auto"
        />
        <div className="flex flex-col gap-2.5">
          <a href="#services" className="hover:text-accent">
            Services
          </a>
          <a href="#work" className="hover:text-accent">
            Work
          </a>
          <a href="#about" className="hover:text-accent">
            About
          </a>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2.5 sm:text-right">
          <span>
            &copy; {new Date().getFullYear()} {agency.name}
          </span>
        </div>
      </footer>
    </>
  );
}
