"use client";

import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { useDocumentTitle, useT } from "@/components/LanguageProvider";
import type { GameEntry } from "../data";

export default function GameContent({ game }: { game: GameEntry }) {
  const t = useT();
  const text = t.games.entries[game.slug];
  useDocumentTitle(t.siteTitle(game.subtitle ? `${game.title} (${game.subtitle})` : game.title));

  return (
    <div>
      <Link href="/games" className="text-sm text-foreground/60 hover:text-foreground">
        &larr; {t.games.title}
      </Link>
      <div className="mt-4 flex flex-col gap-2">
        {game.status === "coming-soon" && <StatusBadge>{t.common.comingSoon}</StatusBadge>}
        <h1 className="text-3xl font-semibold tracking-tight">{game.title}</h1>
        {game.subtitle && <p className="text-lg text-foreground/60">{game.subtitle}</p>}
      </div>
      {game.itch && (
        <div className="mt-6">
          <iframe
            src={`https://itch.io/embed/${game.itch.embedId}?bg_color=212121&fg_color=f9b500&link_color=f9b500&border_color=ebb803`}
            width={552}
            height={167}
            className="max-w-full border-0"
            title={t.games.download(game.title)}
            loading="lazy"
          />
          {/* No fallback link inside the iframe: browsers parse iframe children
              as text, which breaks hydration. */}
        </div>
      )}
      {text && (
        <div className="mt-6 flex flex-col gap-4 text-foreground/80">
          {text.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
      {text && text.features.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">{t.games.features}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {text.features.map((group, groupIndex) => (
              <div key={groupIndex} className="rounded-lg border border-white/10 p-5">
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
