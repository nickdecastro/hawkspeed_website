"use client";

import { useEffect, useMemo, useState } from "react";
import endingsData from "./endings.json";
import type { EndingsData } from "./types";
import EndingList from "./EndingList";
import QuestScreen from "./QuestScreen";

const STORAGE_KEY = "eldenring-endings-progress";

type Progress = Record<string, number>;

function loadProgress(): Progress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Progress) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: Progress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage may be unavailable (private browsing, quota); progress just won't persist.
  }
}

export default function EldenRingWalkthrough() {
  const endings = useMemo(
    () => [...(endingsData as EndingsData).endings].sort((a, b) => a.order - b.order),
    []
  );
  const [selectedEndingId, setSelectedEndingId] = useState<string | null>(null);
  const [progress, setProgress] = useState<Progress>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveProgress(progress);
  }, [progress, hydrated]);

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
