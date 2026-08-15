import type { Metadata } from "next";
import Link from "next/link";
import EldenRingWalkthrough from "./EldenRingWalkthrough";

export const metadata: Metadata = {
  title: "Elden Ring Endings Guide — HawkSpeed",
};

export default function EldenRingGuidePage() {
  return (
    <div>
      <Link href="/guides" className="text-sm text-foreground/60 hover:text-foreground">
        &larr; Game Guides
      </Link>
      <div className="mt-4 flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Elden Ring Endings Guide</h1>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-foreground/80">
        <p>
          A spoiler-safe, step-by-step guide to every Elden Ring ending — Elden Lord, Lord of
          Frenzied Flame, Age of the Stars, the Secret ending, and Shadow of the Erdtree — in the
          correct order, so nothing gets locked out by accident.
        </p>
        <p>
          Pick an ending below. Steps reveal one at a time, so you only ever see what to do next.
          Check a step off once you&apos;ve done it to reveal the next one; uncheck a step to
          rewind back to that point. Any step marked with{" "}
          <span className="text-foreground">!</span> permanently alters your playthrough — expand
          it to read why before you commit. Your progress is saved in this browser.
        </p>
      </div>
      <div className="mt-8">
        <EldenRingWalkthrough />
      </div>
    </div>
  );
}
