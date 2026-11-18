// Checklist progress is only saved in localStorage once the visitor accepts
// the cookie banner; the acceptance itself is the site's one cookie. Until then
// (or if they decline) progress lives in memory and is lost when the page is
// closed. Declining is never stored, so the banner returns on the next visit.

export type Consent = "accepted" | "declined";

const CONSENT_COOKIE = "hawkspeed-cookie-consent";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

// Every localStorage key the site writes. The language choice rides on the
// same consent rules as checklist progress.
export const PROGRESS_KEYS = [
  "eldenring-endings-progress",
  "eldenring-walkthrough-progress",
  "hawkspeed-locale",
] as const;

export type ProgressKey = (typeof PROGRESS_KEYS)[number];

const memory = new Map<ProgressKey, string>();
let declinedThisVisit = false;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

function readCookie(name: string): string | null {
  const prefix = `${name}=`;
  for (const part of document.cookie.split("; ")) {
    if (part.startsWith(prefix)) {
      try {
        return decodeURIComponent(part.slice(prefix.length));
      } catch {
        return null;
      }
    }
  }
  return null;
}

function readStorage(key: ProgressKey): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: ProgressKey, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage may be unavailable (private browsing, quota); keep it for this visit instead.
    memory.set(key, value);
  }
}

function removeStorage(key: ProgressKey) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Nothing to remove if storage is unavailable.
  }
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function getConsent(): Consent | null {
  if (readCookie(CONSENT_COOKIE) === "accepted") return "accepted";
  return declinedThisVisit ? "declined" : null;
}

export function setConsent(consent: Consent) {
  if (consent === "accepted") {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CONSENT_COOKIE}=accepted; Max-Age=${MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
    for (const key of PROGRESS_KEYS) {
      const value = memory.get(key);
      memory.delete(key);
      if (value !== undefined) writeStorage(key, value);
    }
  } else {
    declinedThisVisit = true;
    // Earlier versions of the site saved progress without asking; keep it for
    // this visit only.
    for (const key of PROGRESS_KEYS) {
      const stored = readStorage(key);
      removeStorage(key);
      if (stored !== null && !memory.has(key)) memory.set(key, stored);
    }
  }
  notify();
}

export function readProgress(key: ProgressKey): string | null {
  if (memory.has(key)) return memory.get(key)!;
  // Before a choice is made, still show progress saved by earlier versions.
  return getConsent() === "declined" ? null : readStorage(key);
}

export function writeProgress(key: ProgressKey, value: string) {
  if (getConsent() === "accepted") {
    writeStorage(key, value);
  } else {
    memory.set(key, value);
  }
  notify();
}
