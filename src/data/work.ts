export type WorkItem = {
  slug: string;
  client: string;
  summary: string;
  tags: string[];
  result?: string;
  link?: string;
  year: string;
};

export const work: WorkItem[] = [
  {
    slug: "pinyouting-cny-bento",
    client: "Pinyouting",
    summary:
      "CNY bento box content series for Xiaohongshu — food and lifestyle content built to stop the scroll during the festive shopping season.",
    tags: ["F&B", "Content Creation"],
    year: "2025",
  },
  {
    slug: "master-kam-feng-shui",
    client: "Master Kam Feng Shui",
    summary:
      "Personal brand video content and storytelling strategy to help a feng shui consultant build trust and reach across Facebook and Instagram.",
    tags: ["Personal Brand", "Video"],
    result: "Continuous organic traffic + paid leads from RM2/lead",
    year: "2025",
  },
  {
    slug: "maru",
    client: "Maru",
    summary:
      "Product feature and lifestyle content for a pet sensor water fountain, including short-form video and animated content for Instagram Reels.",
    tags: ["Artistic", "Product Content"],
    year: "2024",
  },
  {
    slug: "insurance-client",
    client: "Insurance Client",
    summary:
      "Content and storytelling strategy for an insurance advisor, translating a complex product into content people actually understand.",
    tags: ["Insurance", "Content Creation"],
    year: "2024",
  },
  {
    slug: "curtain-client",
    client: "Curtain Client",
    summary:
      "Product and lifestyle content for a curtain and home furnishing business, built to showcase craftsmanship and drive local leads.",
    tags: ["Home & Living", "Content Creation"],
    year: "2024",
  },
  {
    slug: "interior-design-client",
    client: "Interior Design Client",
    summary:
      "Portfolio-driven content and social media management for an interior design studio, positioning past projects as the sales pitch.",
    tags: ["Interior Design", "Social Media"],
    year: "2024",
  },
  {
    slug: "public-speaker-client",
    client: "Public Speaker",
    summary:
      "Personal brand content and storytelling for a public speaker, turning stage moments into shareable social content.",
    tags: ["Personal Brand", "Content Creation"],
    year: "2024",
  },
  {
    slug: "corporate-client",
    client: "Corporate Client",
    summary:
      "Brand messaging and content support for a corporate client, aligning internal and external communications under one narrative.",
    tags: ["Corporate", "Brand Strategy"],
    year: "2024",
  },
  {
    slug: "space-organizers",
    client: "Space Organizers",
    summary:
      "Social media content and storytelling for a professional organizing business, showing transformations that sell the service.",
    tags: ["Space Organizing", "Social Media"],
    year: "2024",
  },
  {
    slug: "universiti-malaya",
    client: "Universiti Malaya",
    summary:
      "Content support for a university initiative, communicating programs and stories to a student and public audience.",
    tags: ["Education", "Content Creation"],
    year: "2024",
  },
  {
    slug: "osteotherapy-client",
    client: "Osteotherapy Client",
    summary:
      "Educational and trust-building content for an osteotherapy practice, explaining treatments in plain language for new patients.",
    tags: ["Healthcare", "Content Creation"],
    year: "2024",
  },
  {
    slug: "coworking-space",
    client: "Coworking Space",
    summary:
      "Social media and community content for a coworking space, spotlighting members and events to drive membership sign-ups.",
    tags: ["Coworking", "Social Media"],
    year: "2024",
  },
];
