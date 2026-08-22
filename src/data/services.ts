export type Service = {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "storytelling",
    title: "Storytelling & Narrative Strategy",
    description:
      "Clarifying the story worth telling — so every piece of content has something to say and someone to say it to.",
    deliverables: ["Brand narrative", "Messaging clarity", "Audience insight"],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    description:
      "Photo, video, and written content built around your story, not generic templates.",
    deliverables: ["Short-form video", "Product & lifestyle photography", "Copywriting"],
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    description:
      "Always-on content and community management across the platforms your audience actually uses.",
    deliverables: ["Content calendars", "Community management", "Platform strategy"],
  },
];
