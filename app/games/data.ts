export type GameEntry = {
  slug: string;
  title: string;
  blurb: string;
  status: "coming-soon" | "available";
  body: string[];
  features?: { title: string; items: string[] }[];
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
      "Tank Commander is currently in development. Combat, the map, economy, base structures, unit production, command UI, enemy AI, and balance are all playable end-to-end. Visual/audio polish, a second map, and a shipping build are still ahead.",
    ],
    features: [
      {
        title: "First-person tank combat",
        items: [
          "Direct WASD movement (forward/reverse/strafe) with mouse-driven body rotation and independent turret pitch",
          "Primary cannon and a secondary missile slot — larger, slower, harder-hitting — each on its own cooldown",
          "Shield layer absorbs damage before hull HP and recharges after a few seconds without being hit",
          "In-cockpit first-person camera mounted on the turret, with camera lean on strafe and a dynamic crosshair that tracks the barrel's aim point",
          "Death sequence with explosion VFX/audio; the player respawns at their spawn point a few seconds after dying — only losing the command base ends the match",
        ],
      },
      {
        title: "Map & economy",
        items: [
          "Hand-built map with hills, rock clusters, and ridgelines for cover, plus a baked NavMesh for AI unit pathing",
          "5–9 resource points scattered across the map, some neutral and some closer to each side's base",
          "Capture by parking a tank in a point's zone until a progress timer fills — the opposing side can contest and reset it",
          "Captured points auto-build a resource extractor that generates Power per second for its owner",
          "Live Power counter on the HUD for both factions",
        ],
      },
      {
        title: "Base building & unit production",
        items: [
          "Each side has a Command Base — losing yours ends the match, destroying the enemy's wins it",
          "Auto-targeting defensive turrets with a limited firing arc guard each base",
          "Three unit types — Scout (fast, light), Assault (balanced backbone), and Heavy (slow, high HP/damage) — built from data-driven unit definitions",
          "FIFO build queue at the command base; Power is deducted the moment a build starts",
          "Friendly built units reuse the AI's patrol/engage state machine to fight and hold ground on their own",
        ],
      },
      {
        title: "Command UI & HUD",
        items: [
          "Build menu (Tab/Q) listing unit name, Power cost, and build time; click to queue",
          "Build queue panel showing what's queued and time remaining on the active build",
          "Select nearby friendly units (E) and issue Follow Me, Attack Target, or Defend Position orders",
          "Top-down minimap with colored dots for player, friendlies, enemies, and structures",
          "Full HUD: health, shield, Power counter, build queue, and minimap, with no extra clutter",
        ],
      },
      {
        title: "Enemy commander AI",
        items: [
          "Runs on a repeating strategic tick — expands to the nearest uncaptured resource point each cycle",
          "Queues unit production once Power crosses a threshold, favoring Assault Tanks by default",
          "Masses units and pushes an attack on the player's base once its army reaches a strength threshold",
          "Easy / Normal / Hard difficulty adjusts AI tick speed and starting Power — no cheating, just faster decisions",
          "Balanced end to end: a full player-vs-AI match plays out in roughly 15–30 minutes",
        ],
      },
    ],
  },
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}
