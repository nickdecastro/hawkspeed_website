// The key set. Every other language is type-checked against this shape.
// Two-part strings ([before, after]) wrap a link or emphasis the page inserts.

const en = {
  siteTitle: (page: string) => `${page} — HawkSpeed`,
  nav: {
    games: "Games",
    guides: "Game Guides",
  },
  language: {
    label: "Language",
  },
  footer: {
    cookies: "Cookie Notice",
    privacy: "Privacy Policy (Endings Guide for Elden Ring)",
  },
  cookieBanner: {
    region: "Cookie notice",
    text: "This site uses cookies to save checklist progress and your language between visits to the site without logins.",
    learnMore: "Learn more",
    decline: "Decline",
    accept: "Accept",
  },
  common: {
    comingSoon: "Coming Soon",
  },
  home: {
    intro:
      "HawkSpeed makes games and game guides. Browse what we've built, or jump straight into a walkthrough.",
    browseGames: "Browse Games",
    browseGuides: "Browse Game Guides",
  },
  games: {
    title: "Games",
    intro: "Games made by HawkSpeed.",
    features: "Features",
    download: (title: string) => `Download ${title} on itch.io`,
    entries: {
      ivatg: {
        blurb:
          "A first-person tank combat game with base-building and strategy, inspired by Battlezone II.",
        body: [
          "You command a single tank at all times — no infantry, no ejecting, no multiplayer. Lightweight strategy sits directly on top of first-person tank combat: capture the three resource points on the map, build up your base, and produce tanks, support units, and buildings to grind down an AI enemy commander who has access to everything you do.",
          "The game is a ten-mission campaign, each mission fought on its own map. Every mission unlocks something new for both sides — a Factory and Mobile Turrets, mortars, repair rigs, shield tanks, railguns, drone carriers, siege walkers — and the last one pits you against the Leviathan, a 25-meter walker you have to bring down. Missions average about ten minutes: around six for the first, fifteen or more for the finale. A win unlocks the next mission; a loss replays the one you're on.",
          "IVATG is in active development and available to download on itch.io. The full campaign is playable from start to finish, with an original orchestral soundtrack, six languages, and accessibility options for color vision deficiency and for d/Deaf and hard-of-hearing players.",
        ],
        features: [
          {
            title: "First-person tank combat",
            items: [
              "Direct WASD movement (forward/reverse/strafe) with mouse-driven body rotation and independent turret pitch",
              "Shift boost for up to five seconds of extra speed, refilling as you drive",
              "Primary cannon and a secondary missile slot, each with its own damage, range, and cooldown",
              "Shield layer absorbs damage before hull HP and recharges after a few seconds without being hit",
              "First-person camera mounted on the turret, a third-person chase camera on V, camera lean on strafe, and a dynamic crosshair that tracks the barrel's aim point",
              "The player respawns three seconds after dying — only losing your command base ends the mission",
            ],
          },
          {
            title: "Campaign & maps",
            items: [
              "Ten missions on ten maps: desert mesas, a forest of basalt columns, a night-time foundry, glacier ridges, an alien hive, an ember-lit labyrinth, an obsidian citadel, and more",
              "Every map is mirrored down the middle, so both commanders fight on the same ground",
              "Each mission adds one new unit or mechanic — and the enemy commander gets it too",
              "The final mission's Leviathan holds its base for ten minutes, then marches on yours; killing it is the win, and its weak points take double damage",
              "A briefing before each mission and an end screen showing what the win unlocked",
              "Quick save (F5) and quick restore (F7) mid-mission",
            ],
          },
          {
            title: "Map & economy",
            items: [
              "Three resource points, re-placed every match: one in each half of the map and one in the middle",
              "Capture by parking a tank in a point's zone until a progress timer fills — the opposing side can contest and reset it",
              "Captured points build a resource extractor that generates Power for its owner",
              "Each point carries a tall beacon in its owner's color, so who holds what is readable from anywhere on the map",
            ],
          },
          {
            title: "Base building & unit production",
            items: [
              "Each side has a command base guarded by its own turret — losing yours ends the mission",
              "Scout, Assault, and Heavy tanks from the start; the Factory, Mortar Facility, Workshop, and Drone Bay unlock more as the campaign goes on",
              "Support units including the Mobile Turret, Mortar, Rocket Battery, Repair Rig, Aegis shield tank, Railgun Tank, Drone Carrier, and Siege Walker",
              "Every building has its own production line, so several units can be under construction at once",
              "Build menu laid out as a dependency tree, showing what each building unlocks",
            ],
          },
          {
            title: "Command UI & HUD",
            items: [
              "Build menu (Tab/Q) listing each unit's Power cost and build time; click to queue",
              "Unit roster (E) with nine standing orders on keys 1–9: Follow Me, Defend My Position, Attack Nearest, Assault Base, take and hold any of the three objectives, Deploy/Pack Up, and Follow/Repair a Unit",
              "Units form up on an objective in the order they were sent, and step aside to get a clear line of fire",
              "Radar minimap drawn on the map's own terrain, with an objective readout showing who holds each point",
              "Full HUD: health, shield, Power counter, build queue, radar, and objectives",
            ],
          },
          {
            title: "Enemy commander AI",
            items: [
              "Runs on a repeating strategic tick — expands to uncaptured resource points, builds when Power allows, and attacks once it has the army for it",
              "Plays the same campaign you do: every unit or building a mission unlocks for you, it can build too",
              "AI tanks lead moving targets and hold fire until their gun is actually on target",
              "Easy / Normal / Hard tune how fast it thinks, when it attacks, how much of the map it takes, how big an army it fields, and how hard the Leviathan hits",
            ],
          },
          {
            title: "Sound, languages & accessibility",
            items: [
              "An original ten-piece orchestral soundtrack, one piece per mission, giving way to a combat track when the fighting is close",
              "An ambient soundscape for every map",
              "Six languages: English, French, German, Spanish, Portuguese, and Italian",
              "Five color vision deficiency modes, and a d/Deaf and hard-of-hearing mode that flashes units when they fire or are hit",
              "Rebindable keys, separate music, effects, and ambient volume, mouse sensitivity, and display settings",
            ],
          },
        ],
      },
    } as Record<string, GameText>,
  },
  guides: {
    title: "Game Guides",
    intro: "Walkthroughs and reference guides, organized by game.",
    links: {
      "/guides/elden-ring": {
        title: "All Elden Ring Endings",
        blurb: "A spoiler-safe, step-by-step guide to every Elden Ring ending.",
      },
      "/guides/elden-ring/full-walkthrough": {
        title: "Full Walkthrough",
        blurb: "A region-by-region route through the whole game, including Shadow of the Erdtree.",
      },
    } as Record<string, { title: string; blurb: string }>,
  },
  eldenRing: {
    // Shown above the checklists, whose step text is only available in English.
    englishOnly: "",
    stepsHelp: [
      "Steps reveal one at a time, so you only ever see what to do next. Check a step off once you've done it to reveal the next one; uncheck a step to rewind back to that point. Any step marked with ",
      " permanently alters your playthrough — expand it to read why before you commit. Your progress is saved in this browser.",
    ],
    endings: {
      title: "All Elden Ring Endings",
      intro:
        "A spoiler-safe, step-by-step guide to every Elden Ring ending — Elden Lord, Lord of Frenzied Flame, Age of the Stars, the Secret ending, and Shadow of the Erdtree — in the correct order, so nothing gets locked out by accident.",
      pick: "Pick an ending below.",
    },
    walkthrough: {
      title: "Elden Ring Full Walkthrough",
      intro:
        "A zone-by-zone route through the whole of Elden Ring, from the Chapel of Anticipation to the Elden Throne.",
      listed: "Every zone is listed below.",
      credit: [
        "Adapted from the ",
        "Fextralife Elden Ring wiki walkthrough",
        ". An unofficial, fan-made guide, not affiliated with or endorsed by FromSoftware or Bandai Namco.",
      ],
    },
    quest: {
      back: "Back",
      endingComplete: "You've completed every step for this ending.",
      resetEnding: "Reset progress for this ending",
      altersWarning: "Warning: permanently alters your playthrough",
      whyChanges: "Why this changes your playthrough",
      completed: "Completed",
      markDone: "Mark as done",
    },
    checklist: {
      allComplete: "You've completed every step of the walkthrough.",
      sectionCompleted: "Section completed",
      markSection: "Mark this section as done",
      reset: "Reset walkthrough progress",
    },
  },
  cookies: {
    title: "Cookie Notice",
    effective: (date: string) => `Effective ${date}`,
    intro: [
      "This site has no accounts or logins. To remember how far you are through a guide's checklist, and which language you picked, between visits, it can save them on your device, but only if you click ",
      "Accept",
      " on the cookie banner.",
    ],
    storeTitle: "What we store",
    storeIntro: "If you accept, the site stores:",
    storeCookie: [
      "One first-party cookie, ",
      ", which records that you accepted so the banner isn't shown again. It expires after one year.",
    ],
    storeLocal:
      "Your checklist progress and language choice, kept in your browser's local storage under these keys. Local storage stays on your device and is never sent to our server:",
    storeNoPersonal: "None of this includes personal information.",
    dontTitle: "What we don't do",
    dont: "The site doesn't use analytics, advertising, or tracking cookies, and it doesn't share any of this data with anyone.",
    declineTitle: "If you decline",
    decline:
      "Nothing is stored. The checklists and language picker still work, but your progress and language choice are lost when you close the page, and the banner will appear again on your next visit.",
    removeTitle: "Removing stored data",
    remove:
      "You can clear the cookie and site data for hawkspeed.com at any time in your browser's settings. This resets your checklist progress and language choice, and the banner will appear again.",
  },
  privacy: {
    title: "Privacy Policy",
    pageTitle: "Privacy Policy — Endings Guide for Elden Ring",
    effective: (date: string) => `Effective ${date}`,
    intro: [
      'This Privacy Policy explains how HawkSpeed ("we", "us") handles information in connection with the Android app ',
      ' (the "App").',
    ],
    sections: [
      {
        title: "No Data Collection",
        body: "The App does not collect, store, or transmit any personal data. It does not use analytics, crash reporting, or advertising services, and it does not include any third-party tracking SDKs. The App does not require you to create an account, and it has no in-app purchases.",
      },
      {
        title: "Permissions",
        body: "The App does not request any device permissions beyond what is required for basic operation on Android.",
      },
      {
        title: "Children's Privacy",
        body: "The App is not directed at children under the age of 13 and does not knowingly collect information from children.",
      },
      {
        title: "Third-Party Links",
        body: "Guide content within the App may link out to official or third-party sources (such as game wikis). We are not responsible for the privacy practices of any external sites you visit through those links.",
      },
      {
        title: "Changes to This Policy",
        body: "If our data practices change in a future update, this page will be updated to reflect those changes, along with a new effective date above.",
      },
    ],
    contactTitle: "Contact Us",
    contact: ["Questions about this policy can be sent to ", "."],
  },
};

export type GameText = {
  blurb: string;
  body: string[];
  features: { title: string; items: string[] }[];
};

export type Messages = typeof en;
export default en;
