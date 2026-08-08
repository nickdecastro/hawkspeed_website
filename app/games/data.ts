export type GameEntry = {
  slug: string;
  title: string;
  blurb: string;
  status: "coming-soon" | "available";
  body: string[];
};

export const games: GameEntry[] = [
  {
    slug: "tank-commander",
    title: "Tank Commander",
    blurb:
      "A first-person tank combat game with base-building and strategy, inspired by Battlezone II.",
    status: "coming-soon",
    body: [
      "You command a single tank at all times — no infantry, no ejecting, no multiplayer. Lightweight strategy sits directly on top of first-person tank combat: capture resource points around the map, build up your command base, and produce Scout, Assault, and Heavy tanks to grind down an AI enemy commander who has access to everything you do.",
      "A full match runs 15–30 minutes, from opening skirmishes over resource points to a final push on the enemy's command base. The enemy commander expands, produces units, and attacks on its own escalating logic rather than following a script.",
      "Tank Commander is currently in development, with core combat, economy, base building, unit production, and enemy AI already playable. Polish and shipping content are still ahead.",
    ],
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}
