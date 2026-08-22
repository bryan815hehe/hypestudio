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
    slug: "insurance-client",
    client: "Insurance",
    summary:
      "Content and storytelling strategy for an insurance advisor, translating a complex product into content people actually understand.",
    tags: ["Insurance", "Content Creation"],
    year: "2024",
    image: "/work/insurance-client-poster.jpg",
    video: "/work/insurance-client.mp4",
    videos: [
      "/work/insurance-client.mp4",
      "/work/insurance-client-2.mp4",
      "/work/insurance-client-3.mp4",
    ],
    videos2: ["/work/insurance-client-4.mp4", "/work/insurance-client-5.mp4"],
    briefLabel: "Meet the Client",
    brief:
      "To translate a complex insurance product into content people actually understand — and trust.",
    briefDetail:
      "We're all about making the confusing feel simple. Every piece of content is built to answer the question a prospect is too embarrassed to ask.",
    approachHeadline: "Making insurance make sense on a scrolling feed",
    approachChallenge:
      "Insurance is a high-consideration, low-trust category — most content in the space is either too technical to follow or too salesy to trust, and either way, people scroll past it.",
    approachSolution:
      "We built a storytelling strategy that breaks products down into plain-language scenarios people recognize from their own lives, delivered with a consistent, credible on-camera presence. The goal isn't just clicks — it's the kind of trust that gets someone to actually book a call.",
    pillarsLabel: "Brand Personality",
    pillars: [
      {
        title: "Clear",
        description:
          "Complex products explained without jargon, so nothing gets lost in translation.",
      },
      {
        title: "Credible",
        description:
          "A consistent, confident delivery that reads as advice, not a sales pitch.",
      },
      {
        title: "Relatable",
        description:
          "Real scenarios people recognize from their own lives, not abstract policy talk.",
      },
    ],
  },
  {
    slug: "master-kam-feng-shui",
    client: "Master Kam Feng Shui",
    summary:
      "Personal brand video content and storytelling strategy to help a feng shui consultant build trust and reach across Facebook and Instagram.",
    tags: ["Personal Brand", "Video"],
    result: "209% organic growth in 12 months",
    year: "2025",
    image: "/work/master-kam-feng-shui.jpg",
    video: "/work/master-kam-feng-shui.mp4",
    briefLabel: "Meet Master Kam",
    brief:
      "To build Master Kam's presence as the feng shui consultant Malaysians trust first, not just find first.",
    briefDetail:
      "We're all about turning expertise into content people actually watch. Every video is built to make a stranger stop scrolling and start listening.",
    approachHeadline: "Turning traditional expertise into a modern personal brand",
    approachChallenge:
      "Feng shui is a trust-first service — people don't book a consultant off a single ad, they need to feel like they know them first. Master Kam had deep expertise but no consistent way to show it on video.",
    approachSolution:
      "We built a storytelling system around his voice — short, confident explainers that translate feng shui concepts into everyday language, paired with a consistent visual identity across Facebook and Instagram. The result: content people watch, share, and eventually book from.",
    pillarsLabel: "Brand Personality",
    pillars: [
      {
        title: "Trustworthy",
        description:
          "Grounded, expert delivery that never feels like a sales pitch.",
      },
      {
        title: "Approachable",
        description:
          "Traditional concepts explained in plain language, not jargon.",
      },
      {
        title: "Consistent",
        description:
          "A recognizable face and voice across every platform and post.",
      },
    ],
    videos: [
      "/work/master-kam-feng-shui.mp4",
      "/work/master-kam-feng-shui-2.mp4",
      "/work/master-kam-feng-shui-3.mp4",
    ],
    videos2: [
      "/work/master-kam-feng-shui-4.mp4",
      "/work/master-kam-feng-shui-5.mp4",
    ],
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
    slug: "mr-solar",
    client: "Mr. Solar",
    summary:
      "Performance ad creatives and video content for a residential solar energy provider, turning a government rebate scheme into leads.",
    tags: ["Solar Energy", "Performance Ads"],
    result: "RM53,300 in sales generated at an average cost per lead of RM18",
    year: "2025",
    image: "/work/mr-solar-poster.jpg",
    video: "/work/mr-solar.mp4",
    gallery: [
      { video: "/work/mr-solar.mp4" },
      { image: "/work/mr-solar-1.png" },
      { image: "/work/mr-solar-2.png" },
      { image: "/work/mr-solar-3.jpg" },
      { image: "/work/mr-solar-4.jpg" },
    ],
    briefLabel: "Meet Mr. Solar",
    brief:
      "To turn a government solar rebate scheme into a reason homeowners actually reach out, not scroll past.",
    briefDetail:
      "We're all about making an incentive impossible to ignore. Every ad is built to make a homeowner stop, do the math, and want to claim it before the quota runs out.",
    approachHeadline: "Turning a rebate scheme into a lead-gen engine",
    approachChallenge:
      "Solar is a high-consideration purchase most homeowners keep putting off — and a government rebate program means nothing if people don't know it exists or don't trust it's real before the quota fills up.",
    approachSolution:
      "We built a content system around urgency and proof — bold rebate callouts, real numbers, and social proof from other homeowners who already claimed theirs, paired with explainer video that walks through the offer in plain language. The goal was to turn a bureaucratic-sounding scheme into a limited-time offer worth acting on now.",
    pillarsLabel: "Results",
    pillars: [
      {
        title: "RM53,300",
        description: "Total sales generated",
      },
      {
        title: "RM18",
        description: "Average cost per lead",
      },
    ],
  },
  {
    slug: "osteotherapy-client",
    client: "Osteotherapy",
    summary:
      "Educational and trust-building content for an osteotherapy practice, explaining treatments in plain language for new patients.",
    tags: ["Healthcare", "Content Creation"],
    year: "2024",
    image: "/work/osteotherapy-client-poster.jpg",
    video: "/work/osteotherapy-client.mp4",
    videos: [
      "/work/osteotherapy-client.mp4",
      "/work/osteotherapy-client-2.mp4",
      "/work/osteotherapy-client-3.mp4",
    ],
    videos2: ["/work/osteotherapy-client-4.mp4"],
    briefLabel: "Meet the Practice",
    brief:
      "To turn osteotherapy from an unfamiliar treatment into a first choice new patients feel confident booking.",
    briefDetail:
      "We're all about building trust before the first appointment. Every piece of content is designed to answer the question a nervous new patient is quietly asking.",
    approachHeadline: "Building trust before a patient ever walks in",
    approachChallenge:
      "Most people don't know what osteotherapy is, let alone why it might help them — and health content is easy to distrust if it feels too clinical or too vague.",
    approachSolution:
      "We built educational content that explains treatments in plain language, paired with a warm, reassuring on-camera presence that makes the practice feel approachable rather than intimidating. The content does the reassuring, so the first visit feels like a formality, not a leap.",
    pillarsLabel: "Brand Personality",
    pillars: [
      {
        title: "Reassuring",
        description:
          "A calm, confident tone that eases first-visit nerves before they walk in.",
      },
      {
        title: "Educational",
        description:
          "Treatments explained in plain language, not clinical jargon.",
      },
      {
        title: "Trustworthy",
        description:
          "Consistent, credible delivery that builds confidence over time, not just in one post.",
      },
    ],
  },
  {
    slug: "pinyouting-cny-bento",
    client: "Pinyouting",
    summary:
      "CNY bento box content series for Xiaohongshu — food and lifestyle content built to stop the scroll during the festive shopping season.",
    tags: ["F&B", "Content Creation"],
    year: "2025",
    image: "/work/pinyouting-cny-bento.jpg",
    gallery: [
      { image: "/work/pinyouting-cny-bento-1.jpg" },
      { image: "/work/pinyouting-cny-bento-4.jpg" },
      { image: "/work/pinyouting-cny-bento-5.jpg" },
      { image: "/work/pinyouting-cny-bento-6.jpg" },
      { image: "/work/pinyouting-cny-bento-7.jpg" },
      { image: "/work/pinyouting-cny-bento-12.jpg" },
      { image: "/work/pinyouting-cny-bento-14.jpg" },
    ],
    briefLabel: "Meet Pinyouting",
    brief:
      "To turn Pinyouting's CNY bento boxes into the festive gift Malaysians can't stop sharing on Xiaohongshu.",
    briefDetail:
      "We're all about making food content people bookmark first and ask questions later. Every post is built to make CNY shopping feel a little more exciting.",
    approachHeadline: "Making a seasonal product impossible to scroll past",
    approachChallenge:
      "CNY bento boxes are a crowded, seasonal category — dozens of brands post the same red-and-gold spread every year, and shoppers tune it out fast. Pinyouting needed content that stood out in the two-week window that actually matters.",
    approachSolution:
      "We leaned into food styling and pacing built for Xiaohongshu's scroll speed — tight product shots, satisfying reveals, and captions that do the selling before the photo even loads. Every post was built to turn festive curiosity into an order.",
    pillarsLabel: "Brand Personality",
    pillars: [
      {
        title: "Festive",
        description:
          "Warm, celebratory styling that puts Pinyouting in the mood of the season, not just the calendar.",
      },
      {
        title: "Generous",
        description:
          "Every shot emphasizes abundance — the kind of spread that feels right for gifting, not just eating.",
      },
      {
        title: "Crafted",
        description:
          "Close, deliberate shots that show the care behind each box, not a mass-produced product.",
      },
    ],
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
    videos: ["/work/maru.mp4"],
    briefLabel: "Meet Maru",
    brief:
      "To present Maru's pet water fountain as the product every cat and dog owner didn't know they needed.",
    briefDetail:
      "We're all about making a small home appliance feel genuinely exciting. Every clip is built around the moment a pet actually uses it — because that's the sell.",
    approachHeadline: "Selling a product through the pet's reaction, not the spec sheet",
    approachChallenge:
      "A pet water fountain is a functional, low-drama product — the features (filtration, quiet motor, capacity) don't sell themselves on a fast-scrolling feed like Instagram Reels.",
    approachSolution:
      "We shifted focus from specs to the pet's reaction — playful, artistic short-form video and animation that shows curiosity and delight in the moment of use. The product becomes proof, not pitch.",
    pillarsLabel: "Brand Personality",
    pillars: [
      {
        title: "Playful",
        description:
          "Content built around genuine pet curiosity and delight, not staged demos.",
      },
      {
        title: "Artistic",
        description:
          "Considered framing and motion that makes a small appliance feel premium.",
      },
      {
        title: "Trustworthy",
        description:
          "Real footage of real use, so the product's benefit is obvious, not claimed.",
      },
    ],
  },
];
