export type Insight = {
  slug: string;
  category: string;
  title: string;
  summary: string;
};

export const insights: Insight[] = [
  {
    slug: "story-worth-telling",
    category: "STRATEGY",
    title: "Why most brands don't have a story worth telling yet",
    summary:
      "A field guide to finding the narrative hiding in your product before you write a single caption.",
  },
  {
    slug: "content-calendar-template",
    category: "CONTENT",
    title: "The content calendar template we actually use with clients",
    summary:
      "Steal the exact system behind our clients' best-performing months.",
  },
  {
    slug: "short-form-video-funnel",
    category: "VIDEO",
    title: "Short-form video isn't a trend, it's the funnel",
    summary:
      "How we plan, shoot, and repurpose a month of video content in one day.",
  },
];
