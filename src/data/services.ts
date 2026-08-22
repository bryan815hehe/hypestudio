export type Service = {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "category-first-positioning-audit",
    title: "Category-First Positioning Audit",
    description:
      "We define the exact market category your business will own — and what you must stop saying to own it.",
    deliverables: ["Category definition", "Exclusion criteria", "Messaging audit"],
  },
  {
    slug: "content-strategy-on-position",
    title: "Content Strategy Built on That Position",
    description:
      "Every piece of content is subordinated to your category position, not made for its own sake.",
    deliverables: ["8 videos/month", "Content calendar", "Platform management"],
  },
  {
    slug: "pipeline-reporting",
    title: "Pipeline Reporting",
    description:
      "Every month, we report on consultation bookings and inbound enquiries — not follower counts.",
    deliverables: ["Consultation bookings", "Inbound enquiry tracking", "Monthly pipeline report"],
  },
];
