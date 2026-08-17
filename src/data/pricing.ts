export type PricingTier = {
  label: string;
  price: string;
  note?: string;
};

export type PricingPlan = {
  slug: string;
  name: string;
  description?: string;
  features: string[];
  tiers: PricingTier[];
  tiersNote?: string;
  highlight?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    slug: "brand-clarity-sprint",
    name: "Brand Clarity Sprint",
    description: "A focused one-time engagement to nail your positioning.",
    features: [
      "StoryBrand Framework audit",
      "Competitive Positioning Analysis (Blue Ocean framework)",
      "1-page Brand Messaging guide",
      "A 60-minute strategy presentation",
    ],
    tiers: [{ label: "One-time only", price: "RM1,500" }],
  },
  {
    slug: "essentials-package",
    name: "Essentials Package",
    description: "Monthly content and social management to build momentum.",
    features: [
      "10* social media video content creations",
      "Included Brand Clarity Audit",
      "Social media management (keyword copywriting, content calendar, community engagement)",
      "Monthly 10 sets of informative graphic designs (5 images / set)",
      "Copywriting in English, Mandarin and/or Malay",
      "Monthly performance report",
    ],
    tiers: [
      { label: "1 Platform", price: "RM3,250" },
      { label: "2 Platforms", price: "RM3,800" },
    ],
    tiersNote:
      "Selections of: Instagram + Facebook / TikTok / Xiaohongshu / LinkedIn",
  },
  {
    slug: "hype-flight-package",
    name: "Hype Flight Package",
    description: "Full-service growth partnership for brands scaling up.",
    features: [
      "Everything in Essentials Package (total 15 videos included)",
      "Brand identity refinement",
      "Content strategy with monthly review & analysis",
      "Social media marketing with Ad strategy management",
      "Quarterly brand health reviews",
      "Monthly performance report",
    ],
    tiers: [
      { label: "2 Platforms", price: "RM6,880" },
      { label: "3 Platforms", price: "RM7,800" },
    ],
    tiersNote:
      "Selections of: Instagram + Facebook / TikTok / Xiaohongshu / LinkedIn",
    highlight: true,
  },
];

export type AddOn = {
  slug: string;
  name: string;
  description?: string;
  features: string[];
  tiers: PricingTier[];
  note?: string;
};

export const addOns: AddOn[] = [
  {
    slug: "content-creations",
    name: "Content Creations",
    description: "Standalone content production, billed by volume.",
    features: [
      "Content planning aligned with brand message for Meta platforms, TikTok, Rednote (Xiaohongshu)",
      "Industry and market analysis",
      "Included basic photo and video shooting (phones, minimal lighting, without talent)",
      "Content editing for image, graphic design, or video (up to 60 seconds per video)",
      "Copywriting in English, Mandarin, Malay",
      "Three amendments for each content",
    ],
    tiers: [
      { label: "8 Videos", price: "RM1,800", note: "or 5 single statics + 6 videos" },
      { label: "10 Videos", price: "RM2,050", note: "or 10 single statics + 6 videos" },
    ],
    note: "Fees are calculated based on the number and type of unique content, regardless of platforms.",
  },
];
