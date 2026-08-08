import type { Metadata } from "next";
import GuideCard from "@/components/GuideCard";
import { guides } from "./data";

export const metadata: Metadata = {
  title: "Game Guides — HawkSpeed",
};

export default function GuidesPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Game Guides</h1>
      <p className="mt-2 text-foreground/70">
        Walkthroughs and reference guides, organized by game.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </div>
  );
}
