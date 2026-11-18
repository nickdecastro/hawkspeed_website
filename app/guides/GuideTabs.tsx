"use client";

import { useState } from "react";
import GuideCard from "@/components/GuideCard";
import type { GuideEntry } from "./data";

export default function GuideTabs({ guides }: { guides: GuideEntry[] }) {
  const [activeSlug, setActiveSlug] = useState(guides[0]?.slug);
  const active = guides.find((guide) => guide.slug === activeSlug) ?? guides[0];

  return (
    <div>
      <div role="tablist" className="flex gap-1 border-b border-white/10">
        {guides.map((guide) => {
          const selected = guide.slug === active?.slug;
          return (
            <button
              key={guide.slug}
              id={`tab-${guide.slug}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${guide.slug}`}
              onClick={() => setActiveSlug(guide.slug)}
              className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "border-foreground text-foreground"
                  : "border-transparent text-foreground/60 hover:text-foreground"
              }`}
            >
              {guide.title}
            </button>
          );
        })}
      </div>
      {active && (
        <div
          id={`panel-${active.slug}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.slug}`}
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          {active.links.map((link) => (
            <GuideCard key={link.href} guide={link} />
          ))}
        </div>
      )}
    </div>
  );
}
