import type { Metadata } from "next";
import GameCard from "@/components/GameCard";
import { games } from "./data";

export const metadata: Metadata = {
  title: "Games — HawkSpeed",
};

export default function GamesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Games</h1>
      <p className="mt-2 text-foreground/70">Games made by HawkSpeed.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </div>
  );
}
