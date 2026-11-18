"use client";

import { useState, useSyncExternalStore } from "react";
import type { WalkthroughZone } from "../types";
import QuestStepCard from "../QuestStepCard";
import { useT } from "@/components/LanguageProvider";
import { readProgress, subscribe, writeProgress as storeProgress } from "@/lib/progressStore";

const STORAGE_KEY = "eldenring-walkthrough-progress";

// Progress is read through useSyncExternalStore so there's no hydration
// mismatch (the server snapshot is always 0).
function readCount(): number {
  const value = Number(readProgress(STORAGE_KEY));
  return Number.isInteger(value) && value > 0 ? value : 0;
}

function writeProgress(count: number) {
  storeProgress(STORAGE_KEY, String(count));
}

export default function WalkthroughChecklist({ zones }: { zones: WalkthroughZone[] }) {
  const c = useT().eldenRing.checklist;
  const totalSteps = zones.reduce((sum, zone) => sum + zone.steps.length, 0);
  const storedCount = useSyncExternalStore(subscribe, readCount, () => 0);
  const completedCount = Math.min(storedCount, totalSteps);
  const visibleCount = Math.min(completedCount + 1, totalSteps);
  const allComplete = completedCount >= totalSteps;

  // The current step is open by default; `toggled` holds steps the reader has
  // flipped away from their default open/closed state.
  const [toggled, setToggled] = useState<Set<number>>(() => new Set());
  // Zones are open until completed; `zoneToggled` holds zones the reader has
  // flipped away from that default.
  const [zoneToggled, setZoneToggled] = useState<Set<number>>(() => new Set());

  // Index of each zone's first step in the overall step order.
  const zoneStarts = zones.map((_, z) =>
    zones.slice(0, z).reduce((sum, zone) => sum + zone.steps.length, 0)
  );

  function toggleZone(zone: number) {
    setZoneToggled((prev) => {
      const next = new Set(prev);
      if (next.has(zone)) {
        next.delete(zone);
      } else {
        next.add(zone);
      }
      return next;
    });
  }

  function isExpanded(index: number) {
    return (index === completedCount) !== toggled.has(index);
  }

  function toggleExpand(index: number) {
    setToggled((prev) => {
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
    const z = zoneStarts.findLastIndex((start) => start <= index);
    if (checked) {
      if (index !== completedCount) return;
      writeProgress(completedCount + 1);
      // Finishing a zone collapses it, even if it had been toggled.
      if (index === zoneStarts[z] + zones[z].steps.length - 1) {
        setZoneToggled((prev) => {
          const next = new Set(prev);
          next.delete(z);
          return next;
        });
      }
      setToggled((prev) => {
        const next = new Set(prev);
        next.delete(index);
        next.delete(index + 1);
        return next;
      });
    } else {
      writeProgress(index);
      // Unchecking reopens this step's zone (it was likely re-expanded after
      // being completed) and resets every later zone back to its default.
      setZoneToggled((prev) => {
        const next = new Set<number>();
        prev.forEach((i) => {
          if (i < z) next.add(i);
        });
        return next;
      });
      setToggled((prev) => {
        const next = new Set<number>();
        prev.forEach((i) => {
          if (i < index) next.add(i);
        });
        return next;
      });
    }
  }

  // Checking a section completes all of its steps and collapses it;
  // unchecking it rewinds progress to the section's first step.
  function handleZoneCheckedChange(zone: number, checked: boolean) {
    const start = zoneStarts[zone];
    if (checked) {
      writeProgress(Math.max(completedCount, start + zones[zone].steps.length));
      setZoneToggled((prev) => {
        const next = new Set(prev);
        next.delete(zone);
        return next;
      });
    } else {
      writeProgress(start);
      setZoneToggled((prev) => {
        const next = new Set<number>();
        prev.forEach((z) => {
          if (z < zone) next.add(z);
        });
        return next;
      });
    }
    setToggled((prev) => {
      const next = new Set<number>();
      prev.forEach((i) => {
        if (i < start) next.add(i);
      });
      return next;
    });
  }

  return (
    <div>
      {allComplete && (
        <p className="mb-6 text-sm text-foreground/70">
          {c.allComplete}
        </p>
      )}

      <div className="flex flex-col gap-8">
        {zones.map((zone, z) => {
          const start = zoneStarts[z];
          const done = Math.max(0, Math.min(completedCount - start, zone.steps.length));
          const shown = Math.max(0, Math.min(visibleCount - start, zone.steps.length));
          const zoneComplete = done === zone.steps.length;
          const zoneOpen = !zoneComplete !== zoneToggled.has(z);
          const locked = shown === 0;

          return (
            <section key={zone.id} aria-labelledby={`${zone.id}-title`}>
              <h2 id={`${zone.id}-title`}>
                <button
                  type="button"
                  onClick={() => toggleZone(z)}
                  disabled={locked}
                  aria-expanded={!locked && zoneOpen}
                  aria-controls={`${zone.id}-steps`}
                  className="flex w-full items-center justify-between gap-3 rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-left transition-colors enabled:hover:bg-white/10 disabled:cursor-default"
                >
                  <span
                    className={`text-lg font-semibold tracking-tight ${
                      locked || zoneComplete ? "text-foreground/50" : "text-foreground"
                    }`}
                  >
                    {zone.title}
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-foreground/50">
                    <span>
                      {done}/{zone.steps.length}
                    </span>
                    {!locked && (
                      <span className="w-3 text-center text-base leading-none" aria-hidden>
                        {zoneOpen ? "⌄" : "›"}
                      </span>
                    )}
                  </span>
                </button>
              </h2>
              {shown > 0 && zoneOpen && (
                <div id={`${zone.id}-steps`} className="mt-3 flex flex-col gap-3">
                  <label className="flex items-center justify-end gap-2 text-sm text-foreground/80">
                    <span>{zoneComplete ? c.sectionCompleted : c.markSection}</span>
                    <input
                      type="checkbox"
                      checked={zoneComplete}
                      onChange={(event) => handleZoneCheckedChange(z, event.target.checked)}
                      className="h-5 w-5 accent-foreground"
                    />
                  </label>
                  {zone.steps.slice(0, shown).map((step, i) => {
                    const index = start + i;
                    return (
                      <QuestStepCard
                        key={step.id}
                        step={step}
                        checked={index < completedCount}
                        expanded={isExpanded(index)}
                        onToggleExpand={() => toggleExpand(index)}
                        onCheckedChange={(checked) => handleCheckedChange(index, checked)}
                      />
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>

      {completedCount > 0 && (
        <button
          type="button"
          onClick={() => {
            writeProgress(0);
            setToggled(new Set());
            setZoneToggled(new Set());
          }}
          className="mt-8 text-xs text-foreground/40 transition-colors hover:text-foreground/70"
        >
          {c.reset}
        </button>
      )}
    </div>
  );
}
