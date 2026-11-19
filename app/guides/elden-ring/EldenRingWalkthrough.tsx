"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import endingsData from "./endings.json";
import fr from "./translations/endings.fr.json";
import de from "./translations/endings.de.json";
import es from "./translations/endings.es.json";
import pt from "./translations/endings.pt.json";
import it from "./translations/endings.it.json";
import type { Ending, EndingsData, EndingsTranslation } from "./types";
import EndingList from "./EndingList";
import QuestScreen from "./QuestScreen";
import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/lib/i18n/locales";
import { readProgress, subscribe, writeProgress } from "@/lib/progressStore";

const TRANSLATIONS: Record<Exclude<Language, "en">, EndingsTranslation> = { fr, de, es, pt, it };

// endings.json is the English source; a translation only replaces text, keyed
// by ending and step id, so order, ids, and warning flags always come from it.
// Anything a translation is missing falls back to English.
function localize(endings: Ending[], language: Language): Ending[] {
  if (language === "en") return endings;
  const tr = TRANSLATIONS[language];
  return endings.map((ending) => ({
    ...ending,
    title: tr.endings[ending.id] ?? ending.title,
    steps: ending.steps.map((step) => {
      const s = tr.steps[step.id];
      return s
        ? {
            ...step,
            title: s.title ?? step.title,
            description: s.description ?? step.description,
            consequence: step.consequence === null ? null : (s.consequence ?? step.consequence),
          }
        : step;
    }),
  }));
}

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
  const language = useLanguage().locale.language;
  const endings = useMemo(
    () =>
      localize(
        [...(endingsData as EndingsData).endings].sort((a, b) => a.order - b.order),
        language
      ),
    [language]
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
