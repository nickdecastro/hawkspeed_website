"use client";

import { useState } from "react";
import type { Ending } from "./types";
import QuestStepCard from "./QuestStepCard";

export default function QuestScreen({
  ending,
  completedCount,
  onCompletedCountChange,
  onBack,
  onResetProgress,
}: {
  ending: Ending;
  completedCount: number;
  onCompletedCountChange: (count: number) => void;
  onBack: () => void;
  onResetProgress: () => void;
}) {
  const [expanded, setExpanded] = useState<Set<number>>(
    () => new Set([Math.min(completedCount, ending.steps.length - 1)])
  );

  const visibleCount = Math.min(completedCount + 1, ending.steps.length);
  const allComplete = completedCount >= ending.steps.length;

  function toggleExpand(index: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  function handleCheckedChange(index: number, checked: boolean) {
    if (checked) {
      if (index !== completedCount) return;
      const nextCount = completedCount + 1;
      onCompletedCountChange(nextCount);
      setExpanded((prev) => {
        const next = new Set(prev);
        next.delete(index);
        if (nextCount < ending.steps.length) {
          next.add(nextCount);
        }
        return next;
      });
    } else {
      onCompletedCountChange(index);
      setExpanded((prev) => {
        const next = new Set<number>();
        prev.forEach((i) => {
          if (i <= index) next.add(i);
        });
        next.add(index);
        return next;
      });
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="text-sm text-foreground/60 transition-colors hover:text-foreground"
      >
        &#8617; Back
      </button>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight">{ending.title}</h2>

      {allComplete && (
        <p className="mt-2 text-sm text-foreground/70">
          You&apos;ve completed every step for this ending.
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3">
        {ending.steps.slice(0, visibleCount).map((step, index) => (
          <QuestStepCard
            key={step.id}
            step={step}
            checked={index < completedCount}
            expanded={expanded.has(index)}
            onToggleExpand={() => toggleExpand(index)}
            onCheckedChange={(checked) => handleCheckedChange(index, checked)}
          />
        ))}
      </div>

      {completedCount > 0 && (
        <button
          type="button"
          onClick={onResetProgress}
          className="mt-8 text-xs text-foreground/40 transition-colors hover:text-foreground/70"
        >
          Reset progress for this ending
        </button>
      )}
    </div>
  );
}
