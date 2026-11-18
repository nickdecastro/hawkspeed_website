"use client";

import GameCard from "@/components/GameCard";
import { useDocumentTitle, useT } from "@/components/LanguageProvider";
import { games } from "./data";

export default function GamesContent() {
  const t = useT();
  useDocumentTitle(t.siteTitle(t.games.title));
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">{t.games.title}</h1>
      <p className="mt-2 text-foreground/70">{t.games.intro}</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </div>
  );
}
