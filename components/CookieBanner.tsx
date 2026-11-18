"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { getConsent, setConsent, subscribe } from "@/lib/progressStore";
import { useT } from "@/components/LanguageProvider";

// The server can't see the visitor's choice, so it reports "pending" and the
// banner only appears after hydration for visitors who haven't chosen yet.
function getServerConsent() {
  return "pending" as const;
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getConsent, getServerConsent);
  const t = useT();

  if (consent !== null) return null;

  return (
    <div
      role="region"
      aria-label={t.cookieBanner.region}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-foreground/80">
          {t.cookieBanner.text}{" "}
          <Link href="/cookies" className="underline hover:text-foreground">
            {t.cookieBanner.learnMore}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            {t.cookieBanner.decline}
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t.cookieBanner.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
