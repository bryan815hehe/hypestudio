export type WorkItem = {
  slug: string;
  client: string;
  summary: string;
  tags: string[];
  result?: string;
  link?: string;
  year: string;
  image?: string;
  /** Muted, looping clip shown instead of `image` when present. */
  video?: string;
  /** Extra images/videos shown on the project's detail page. */
  gallery?: { image?: string; video?: string }[];
};

export const work: WorkItem[] = [
  {
    slug: "pinyouting-cny-bento",
    client: "Pinyouting",
    summary:
      "CNY bento box content series for Xiaohongshu — food and lifestyle content built to stop the scroll during the festive shopping season.",
    tags: ["F&B", "Content Creation"],
    year: "2025",
    image: "/work/pinyouting-cny-bento.jpg",
  },
  {
    slug: "master-kam-feng-shui",
    client: "Master Kam Feng Shui",
    summary:
      "Personal brand video content and storytelling strategy to help a feng shui consultant build trust and reach across Facebook and Instagram.",
    tags: ["Personal Brand", "Video"],
    result: "Continuous organic traffic + paid leads from RM2/lead",
    year: "2025",
    image: "/work/master-kam-feng-shui.jpg",
  },
  {
    slug: "maru",
    client: "Maru",
    summary:
      "Product feature and lifestyle content for a pet sensor water fountain, including short-form video and animated content for Instagram Reels.",
    tags: ["Artistic", "Product Content"],
    year: "2024",
    image: "/work/maru-poster.jpg",
    video: "/work/maru.mp4",
  },
  {
    slug: "insurance-client",
    client: "Insurance Client",
    summary:
      "Content and storytelling strategy for an insurance advisor, translating a complex product into content people actually understand.",
    tags: ["Insurance", "Content Creation"],
    year: "2024",
    image: "/work/insurance-client-poster.jpg",
    video: "/work/insurance-client.mp4",
  },
  {
    slug: "space-organizers",
    client: "Space Organizers",
    summary:
      "Social media content and storytelling for a professional organizing business, showing transformations that sell the service.",
    tags: ["Space Organizing", "Social Media"],
    year: "2024",
    image: "/work/space-organizers-poster.jpg",
    video: "/work/space-organizers.mp4",
  },
  {
    slug: "osteotherapy-client",
    client: "Osteotherapy Client",
    summary:
      "Educational and trust-building content for an osteotherapy practice, explaining treatments in plain language for new patients.",
    tags: ["Healthcare", "Content Creation"],
    year: "2024",
    image: "/work/osteotherapy-client-poster.jpg",
    video: "/work/osteotherapy-client.mp4",
  },
];
