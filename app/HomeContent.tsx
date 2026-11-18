"use client";

import Link from "next/link";
import { useDocumentTitle, useT } from "@/components/LanguageProvider";

export default function HomeContent() {
  const t = useT();
  useDocumentTitle("HawkSpeed");
  return (
    <div className="flex flex-col items-start gap-6">
      <h1 className="text-4xl font-semibold tracking-tight">HawkSpeed</h1>
      <p className="max-w-xl text-foreground/70">{t.home.intro}</p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/games"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          {t.home.browseGames}
        </Link>
        <Link
          href="/guides"
          className="rounded-md border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
        >
          {t.home.browseGuides}
        </Link>
      </div>
    </div>
  );
}
