"use client";

import Link from "next/link";
import { useDocumentTitle, useT } from "@/components/LanguageProvider";

// Header and instructions for the two Elden Ring checklist pages. The steps
// themselves come from endings.json / full-walkthrough.md and are English-only.
export default function GuideIntro({ guide }: { guide: "endings" | "walkthrough" }) {
  const t = useT();
  const er = t.eldenRing;
  const page = guide === "endings" ? er.endings : er.walkthrough;
  const lead = guide === "endings" ? er.endings.pick : er.walkthrough.listed;
  useDocumentTitle(t.siteTitle(page.title));

  return (
    <>
      <Link href="/guides" className="text-sm text-foreground/60 hover:text-foreground">
        &larr; {t.guides.title}
      </Link>
      <div className="mt-4 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">{page.title}</h1>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-foreground/80">
        <p>{page.intro}</p>
        <p>
          {lead} {er.stepsHelp[0]}
          <span className="text-foreground">!</span>
          {er.stepsHelp[1]}
        </p>
        {er.englishOnly && (
          <p className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-foreground/70">
            {er.englishOnly}
          </p>
        )}
      </div>
    </>
  );
}

export function WalkthroughCredit() {
  const credit = useT().eldenRing.walkthrough.credit;
  return (
    <p className="mt-12 text-xs text-foreground/40">
      {credit[0]}
      <a
        href="https://eldenring.wiki.fextralife.com/Walkthrough"
        className="underline hover:text-foreground/70"
      >
        {credit[1]}
      </a>
      {credit[2]}
    </p>
  );
}
