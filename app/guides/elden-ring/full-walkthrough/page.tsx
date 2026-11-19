import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { LANGUAGES, type Language } from "@/lib/i18n/locales";
import { assertSameShape, parseWalkthrough } from "./parseWalkthrough";
import WalkthroughChecklist from "./WalkthroughChecklist";
import GuideIntro, { WalkthroughCredit } from "../GuideIntro";
import type { WalkthroughZone } from "../types";

export const metadata: Metadata = {
  title: "Elden Ring Full Walkthrough — HawkSpeed",
};

const DIR = path.join(process.cwd(), "app/guides/elden-ring/full-walkthrough");

// English is full-walkthrough.md; each translation is full-walkthrough.<lang>.md.
async function loadZones(language: Language) {
  const file = language === "en" ? "full-walkthrough.md" : `full-walkthrough.${language}.md`;
  return parseWalkthrough(await readFile(path.join(DIR, file), "utf8"));
}

export default async function EldenRingFullWalkthroughPage() {
  // Read at build time; the site is a static export.
  const entries = await Promise.all(
    LANGUAGES.map(async (language) => [language, await loadZones(language)] as const)
  );
  const zonesByLanguage = Object.fromEntries(entries) as Record<Language, WalkthroughZone[]>;
  // Saved progress is a step count, so every translation must line up with English.
  for (const language of LANGUAGES) {
    assertSameShape(zonesByLanguage.en, zonesByLanguage[language], language);
  }

  return (
    <div>
      <GuideIntro guide="walkthrough" />
      <div className="mt-8">
        <WalkthroughChecklist zonesByLanguage={zonesByLanguage} />
      </div>
      <WalkthroughCredit />
    </div>
  );
}
