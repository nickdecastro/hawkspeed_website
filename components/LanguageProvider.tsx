"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { DEFAULT_LOCALE, findLocale, guessLocale, type Locale } from "@/lib/i18n/locales";
import { messages, type Messages } from "@/lib/i18n/messages";
import { readProgress, subscribe, writeProgress } from "@/lib/progressStore";

const STORAGE_KEY = "hawkspeed-locale";

// The static export is rendered in English; the browser switches to the stored
// choice (or a guess from its preferred languages) right after hydration.
function readLocaleId(): string {
  const stored = findLocale(readProgress(STORAGE_KEY));
  if (stored) return stored.id;
  return guessLocale(navigator.languages ?? [navigator.language]).id;
}

function serverLocaleId() {
  return DEFAULT_LOCALE.id;
}

type LanguageContextValue = {
  locale: Locale;
  t: Messages;
  setLocale: (id: string) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: DEFAULT_LOCALE,
  t: messages.en,
  setLocale: () => {},
});

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const id = useSyncExternalStore(subscribe, readLocaleId, serverLocaleId);
  const locale = findLocale(id) ?? DEFAULT_LOCALE;

  useEffect(() => {
    document.documentElement.lang = locale.id;
  }, [locale.id]);

  const setLocale = useCallback((next: string) => {
    if (findLocale(next)) writeProgress(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({ locale, t: messages[locale.language], setLocale }),
    [locale, setLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  return useContext(LanguageContext).t;
}

// Keeps the browser tab's title in the current language.
export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale.id, { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`)
  );
}
