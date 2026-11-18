// Game text (blurb, description, features) lives in the translation
// dictionaries under games.entries[slug] — see lib/i18n/messages/en.ts.
export type GameEntry = {
  slug: string;
  title: string;
  status: "coming-soon" | "available";
  subtitle?: string;
  itch?: { embedId: string; url: string };
};

export const games: GameEntry[] = [
  {
    slug: "ivatg",
    title: "IVATG",
    subtitle: "I Value A Tank Game",
    status: "available",
    itch: {
      embedId: "5391427",
      url: "https://hawkspeedinc.itch.io/ivatg",
    },
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}
