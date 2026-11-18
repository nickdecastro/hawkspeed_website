import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGame, games } from "../data";
import GameContent from "./GameContent";

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
  if (!game) return { title: "Game — HawkSpeed" };
  const name = game.subtitle ? `${game.title} (${game.subtitle})` : game.title;
  return { title: `${name} — HawkSpeed` };
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

  return <GameContent game={game} />;
}
