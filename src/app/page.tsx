import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import WorkCard from "@/components/WorkCard";
import { agency } from "@/data/agency";
import { services } from "@/data/services";
import { work } from "@/data/work";

export default function Home() {
  const marqueeItems = services.map((s) => s.title.toUpperCase());
  const marqueeText = [...marqueeItems, ...marqueeItems].join(" — ");

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="grid grid-cols-1 gap-10 border-b border-foreground/10 px-6 py-20 sm:grid-cols-[1.4fr_1fr] sm:items-end sm:px-14 sm:py-24 lg:py-28">
        <div className="animate-fade-up">
          <div className="mb-6 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            Marketing Agency
          </div>
          <h1 className="font-display text-5xl leading-[0.98] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-[96px]">
            {agency.tagline}
          </h1>
        </div>
        <div className="animate-fade-up pb-2">
          <p className="mb-8 text-lg leading-relaxed text-foreground/70">
            {agency.bio}
          </p>
          <a
            href={agency.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border-b-2 border-foreground pb-1.5 text-base font-semibold uppercase hover:border-accent hover:text-accent"
          >
            Book a strategy call &rarr;
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

      {/* SERVICES */}
      <section
        id="services"
        className="border-b border-foreground/10 px-6 py-24 sm:px-14 sm:py-28"
      >
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2fr] sm:gap-10">
          <div className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            What We Do
          </div>
          <h2 className="font-display max-w-xl text-4xl font-bold tracking-tight uppercase sm:text-[52px]">
            {services.length} disciplines. One relentless focus on growth.
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
            Results our clients brag about.
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
            About Us
          </div>
          <h2 className="font-display mb-7 text-4xl font-bold tracking-tight uppercase sm:text-5xl">
            Small team. Sharp instincts. No fluff.
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-foreground/70">
            {agency.bio}
          </p>
          <p className="text-lg leading-relaxed text-foreground/70">
            Every engagement starts with the same question: what actually
            moves the number you care about? Everything else is noise.
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
          <Link href="/pricing" className="hover:text-accent">
            Pricing
          </Link>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-2.5 sm:text-right">
          {agency.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {s.label}
            </a>
          ))}
          <span>
            &copy; {new Date().getFullYear()} {agency.name}
          </span>
        </div>
      </footer>
    </>
  );
}
