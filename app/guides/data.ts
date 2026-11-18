// Link titles and blurbs live in the translation dictionaries under
// guides.links[href] — see lib/i18n/messages/en.ts.
export type GuideLink = {
  href: string;
  status: "coming-soon" | "available";
};

export type GuideEntry = {
  slug: string;
  title: string;
  links: GuideLink[];
};

export const guides: GuideEntry[] = [
  {
    slug: "elden-ring",
    title: "Elden Ring",
    links: [
      { href: "/guides/elden-ring", status: "available" },
      { href: "/guides/elden-ring/full-walkthrough", status: "available" },
    ],
  },
];
