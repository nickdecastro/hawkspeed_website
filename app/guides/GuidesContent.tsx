"use client";

import { useDocumentTitle, useT } from "@/components/LanguageProvider";
import GuideTabs from "./GuideTabs";
import { guides } from "./data";

export default function GuidesContent() {
  const t = useT();
  useDocumentTitle(t.siteTitle(t.guides.title));
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">{t.guides.title}</h1>
      <p className="mt-2 text-foreground/70">{t.guides.intro}</p>
      <div className="mt-8">
        <GuideTabs guides={guides} />
      </div>
    </div>
  );
}
