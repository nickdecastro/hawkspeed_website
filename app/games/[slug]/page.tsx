import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBadge from "@/components/StatusBadge";
import { getGame, games } from "../data";

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  return { title: game ? `${game.title} — HawkSpeed` : "Game — HawkSpeed" };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);

  if (!game) {
    notFound();
  }

  return (
    <div>
      <Link href="/games" className="text-sm text-foreground/60 hover:text-foreground">
        &larr; Games
      </Link>
      <div className="mt-4 flex flex-col gap-2">
        {game.status === "coming-soon" && <StatusBadge>Coming Soon</StatusBadge>}
        <h1 className="text-3xl font-semibold tracking-tight">{game.title}</h1>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-foreground/80">
        {game.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
