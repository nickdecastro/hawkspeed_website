import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import type { GameEntry } from "@/app/games/data";

export default function GameCard({ game }: { game: GameEntry }) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="flex flex-col gap-2 rounded-lg border border-white/10 p-5 transition-colors hover:bg-white/5"
    >
      {game.status === "coming-soon" && <StatusBadge>Coming Soon</StatusBadge>}
      <h3 className="font-medium">{game.title}</h3>
      <p className="text-sm text-foreground/70">{game.blurb}</p>
    </Link>
  );
}
