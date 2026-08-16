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
  /** Up to three video clips shown side by side on the project's detail page. */
  videos?: string[];
  /** A second row of up to three video clips, shown after the approach section. */
  videos2?: string[];
  /** Pill label shown above the brief headline, e.g. "Meet Space Organizers". */
  briefLabel?: string;
  /** Large headline stating the project's goal, shown in the brief section. */
  brief?: string;
  /** Supporting paragraph shown next to the brief headline. */
  briefDetail?: string;
  /** Headline for the "how we work / how we help" approach section. */
  approachHeadline?: string;
  /** Left paragraph — the challenge or context. */
  approachChallenge?: string;
  /** Right paragraph — how Hype Studio helped. */
  approachSolution?: string;
  /** Pill label above the approach pillars, e.g. "Brand Personality". */
  pillarsLabel?: string;
  /** Three short pillars describing the approach. */
  pillars?: { title: string; description: string }[];
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
    videos: [
      "/work/space-organizers.mp4",
      "/work/space-organizers-2.mp4",
      "/work/space-organizers-3.mp4",
    ],
    briefLabel: "Meet Space Organizers",
    brief:
      "To present Space Organizers as the go-to professional organizing service, turning everyday clutter into calm, camera-ready transformations.",
    briefDetail:
      "We're all about showing the before and after that actually sells the service. Every post is built to make a stranger scrolling past stop, watch, and think — I need this.",
    approachHeadline: "Turning cluttered rooms into scroll-stopping content",
    approachChallenge:
      "Professional organizing is a service people don't know they need until they see it. The work happens behind closed doors, in someone else's mess, and the results are easy to describe but hard to make people actually feel — especially in a three-second scroll.",
    approachSolution:
      "That's where we come in. We built a content system around the transformation itself — full before-and-afters, satisfying time-lapses, and the small human moments in between. Every post is shot to make the result impossible to scroll past, and easy to imagine in your own home.",
    pillarsLabel: "Brand Personality",
    pillars: [
      {
        title: "Calm",
        description:
          "The brand feels like an exhale — steady and reassuring, never chaotic, even when the mess in frame is.",
      },
      {
        title: "Practical",
        description:
          "No fluff, no gimmicks — just clear, useful methods that make the transformation feel achievable.",
      },
      {
        title: "Trustworthy",
        description:
          "Real homes and honest results, so the brand reads as dependable, not staged or salesy.",
      },
    ],
    videos2: [
      "/work/space-organizers-4.mp4",
      "/work/space-organizers-5.mp4",
      "/work/space-organizers-6.mp4",
    ],
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
