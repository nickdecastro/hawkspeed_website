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
      {game.features && game.features.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">Features</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {game.features.map((group) => (
              <div
                key={group.title}
                className="rounded-lg border border-white/10 p-5"
              >
                <h3 className="font-medium">{group.title}</h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground/70">
                  {group.items.map((item, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-foreground/40">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
