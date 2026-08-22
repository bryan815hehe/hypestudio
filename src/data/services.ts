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
      "We map your market, name the exact category you can own, and hand you a clear list of what to stop saying so no competitor can blur the line.",
    deliverables: ["Category definition", "Competitor exclusion map", "Messaging audit"],
  },
  {
    slug: "content-strategy-on-position",
    title: "Content Strategy Built on That Position",
    description:
      "Every video, post, and caption exists to reinforce your category — not just to fill a content calendar.",
    deliverables: ["Content Creation", "Content calendar", "Platform management"],
  },
  {
    slug: "pipeline-reporting",
    title: "Pipeline Reporting",
    description:
      "Every month, we report on consultation bookings and inbound enquiries — not follower counts.",
    deliverables: ["Monthly pipeline report", "Monthly Strategy Meetings", "Enquiry source tracking"],
  },
];
