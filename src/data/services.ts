export type Service = {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "niche-positioning-diagnosis",
    title: "Niche Positioning Diagnosis",
    description:
      "We identify exactly what makes you the category authority in your specific field — not just another coach with a camera.",
    deliverables: ["Category audit", "Positioning strategy", "Messaging clarity"],
  },
  {
    slug: "category-first-system",
    title: "The Category-First System",
    description:
      "We build and execute a 90-day content strategy designed to generate client inquiries, not just views.",
    deliverables: ["8 videos/month", "2 strategy meetings/month", "Content calendar"],
  },
  {
    slug: "inquiry-tracking",
    title: "Inquiry Tracking, Not Vanity Metrics",
    description:
      "We track and report on inquiry volume — not follower counts — so you know exactly what your investment is producing.",
    deliverables: ["Inquiry-volume reporting", "Platform management", "Monthly reviews"],
  },
];
