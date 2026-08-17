import type { Metadata } from "next";
import Header from "@/components/Header";
import { agency } from "@/data/agency";
import { addOns, pricingPlans } from "@/data/pricing";

export const metadata: Metadata = {
  title: `Pricing — ${agency.name}`,
  description: "Schedule of fees and service packages from Hype Studio.",
};

export default function PricingPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="border-b border-foreground/10 px-6 py-20 sm:px-14 sm:py-24 lg:py-28">
        <div className="mb-6 text-sm font-semibold tracking-[0.12em] text-accent uppercase">
          Schedule of Fees
        </div>
        <h1 className="font-display max-w-3xl text-5xl leading-[0.98] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-[88px]">
          Straightforward pricing. Serious results.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/70">
          Pick the package that matches where your brand is today. Every
          engagement is built around the same goal: growth you can measure.
        </p>
      </section>

      {/* PACKAGES */}
      <section className="border-b border-foreground/10 px-6 py-24 sm:px-14 sm:py-28">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.slug}
              className={`flex flex-col gap-8 border p-8 sm:p-10 ${
                plan.highlight
                  ? "border-accent bg-foreground text-background"
                  : "border-foreground/15"
              }`}
            >
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight uppercase sm:text-3xl">
                  {plan.name}
                </h2>
                {plan.description && (
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      plan.highlight
                        ? "text-background/60"
                        : "text-foreground/60"
                    }`}
                  >
                    {plan.description}
                  </p>
                )}
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2.5 text-sm leading-relaxed"
                  >
                    <span className="text-accent">✔</span>
                    <span
                      className={
                        plan.highlight
                          ? "text-background/80"
                          : "text-foreground/80"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className={`flex flex-col gap-3 border-t pt-6 ${
                  plan.highlight ? "border-background/20" : "border-foreground/15"
                }`}
              >
                {plan.tiers.map((tier) => (
                  <div
                    key={tier.label}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span
                      className={`text-xs font-semibold tracking-[0.1em] uppercase ${
                        plan.highlight
                          ? "text-background/60"
                          : "text-foreground/50"
                      }`}
                    >
                      {tier.label}
                    </span>
                    <span className="font-heading text-2xl font-bold">
                      {tier.price}
                    </span>
                  </div>
                ))}
                {plan.tiersNote && (
                  <p
                    className={`text-xs leading-relaxed ${
                      plan.highlight
                        ? "text-background/50"
                        : "text-foreground/50"
                    }`}
                  >
                    {plan.tiersNote}
                  </p>
                )}
              </div>

              <a
                href={agency.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2.5 rounded-sm px-6 py-4 text-sm font-semibold uppercase ${
                  plan.highlight
                    ? "bg-accent text-foreground hover:opacity-90"
                    : "bg-foreground text-background hover:bg-accent hover:text-foreground"
                }`}
              >
                Book a strategy call &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="border-b border-foreground/10 px-6 py-24 sm:px-14 sm:py-28">
        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_2fr] sm:gap-10">
          <div className="text-sm font-semibold tracking-[0.12em] text-accent uppercase">
            Add-Ons
          </div>
          <h2 className="font-display max-w-xl text-4xl font-bold tracking-tight uppercase sm:text-[52px]">
            Need content without the retainer?
          </h2>
        </div>

        {addOns.map((addOn) => (
          <div
            key={addOn.slug}
            className="grid grid-cols-1 gap-10 border-t border-foreground/15 py-10 sm:grid-cols-[1fr_1fr_1fr] sm:gap-8"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold uppercase sm:text-[32px]">
                {addOn.name}
              </h3>
              {addOn.description && (
                <p className="mt-3 text-base leading-relaxed text-foreground/70">
                  {addOn.description}
                </p>
              )}
            </div>

            <ul className="flex flex-col gap-2">
              {addOn.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2.5 text-sm leading-relaxed text-foreground/70"
                >
                  <span className="text-accent">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-5">
              {addOn.tiers.map((tier) => (
                <div key={tier.label}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-semibold uppercase">
                      {tier.label}
                    </span>
                    <span className="font-heading text-2xl font-bold text-accent">
                      {tier.price}
                    </span>
                  </div>
                  {tier.note && (
                    <p className="mt-1 text-xs text-foreground/50 italic">
                      {tier.note}
                    </p>
                  )}
                </div>
              ))}
              {addOn.note && (
                <p className="mt-2 text-xs leading-relaxed text-foreground/50">
                  {addOn.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* CONTACT */}
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
