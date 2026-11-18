"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import endingsData from "./endings.json";
import type { EndingsData } from "./types";
import EndingList from "./EndingList";
import QuestScreen from "./QuestScreen";
import { readProgress, subscribe, writeProgress } from "@/lib/progressStore";

const STORAGE_KEY = "eldenring-endings-progress";

type Progress = Record<string, number>;

function readRaw() {
  return readProgress(STORAGE_KEY);
}

function parseProgress(raw: string | null): Progress {
  try {
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

export default function EldenRingWalkthrough() {
  const endings = useMemo(
    () => [...(endingsData as EndingsData).endings].sort((a, b) => a.order - b.order),
    []
  );
  const [selectedEndingId, setSelectedEndingId] = useState<string | null>(null);
  const rawProgress = useSyncExternalStore(subscribe, readRaw, () => null);
  const progress = useMemo(() => parseProgress(rawProgress), [rawProgress]);

  function setProgress(update: (prev: Progress) => Progress) {
    writeProgress(STORAGE_KEY, JSON.stringify(update(parseProgress(readRaw()))));
  }

  const selectedEnding = endings.find((ending) => ending.id === selectedEndingId) ?? null;

  if (selectedEnding) {
    return (
      <QuestScreen
        key={selectedEnding.id}
        ending={selectedEnding}
        completedCount={progress[selectedEnding.id] ?? 0}
        onCompletedCountChange={(count) =>
          setProgress((prev) => ({ ...prev, [selectedEnding.id]: count }))
        }
        onBack={() => setSelectedEndingId(null)}
        onResetProgress={() =>
          setProgress((prev) => ({ ...prev, [selectedEnding.id]: 0 }))
        }
      />
    );
  }

  return <EndingList endings={endings} onSelect={setSelectedEndingId} />;
}
