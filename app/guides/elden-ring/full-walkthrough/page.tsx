import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { parseWalkthrough } from "./parseWalkthrough";
import WalkthroughChecklist from "./WalkthroughChecklist";
import GuideIntro, { WalkthroughCredit } from "../GuideIntro";

export const metadata: Metadata = {
  title: "Elden Ring Full Walkthrough — HawkSpeed",
};

export default async function EldenRingFullWalkthroughPage() {
  // Read at build time; the site is a static export.
  const source = await readFile(
    path.join(process.cwd(), "app/guides/elden-ring/full-walkthrough/full-walkthrough.md"),
    "utf8"
  );
  const zones = parseWalkthrough(source);

  return (
    <div>
      <GuideIntro guide="walkthrough" />
      <div className="mt-8">
        <WalkthroughChecklist zones={zones} />
      </div>
      <WalkthroughCredit />
    </div>
  );
}
