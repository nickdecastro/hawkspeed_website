export type GuideEntry = {
  slug: string;
  title: string;
  blurb: string;
  status: "coming-soon" | "available";
  body: string[];
};

export const guides: GuideEntry[] = [
  {
    slug: "elden-ring",
    title: "Elden Ring",
    blurb: "A spoiler-safe, step-by-step guide to every Elden Ring ending.",
    status: "coming-soon",
    body: [
      "This guide walks you through the questlines for all five Elden Ring endings — Elden Lord, Lord of Frenzied Flame, Age of the Stars, the Secret ending, and Shadow of the Erdtree — in the correct order, so nothing gets locked out by accident.",
      "Steps are revealed one at a time, so you only ever see what to do next, and every point-of-no-return is flagged in advance with an explanation of what it permanently changes.",
      "This guide is coming to Android as Endings Guide for Elden Ring. It's an unofficial fan-made companion, not affiliated with or endorsed by FromSoftware or Bandai Namco.",
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
