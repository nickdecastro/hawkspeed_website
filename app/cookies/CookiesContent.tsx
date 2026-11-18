"use client";

import { formatDate, useDocumentTitle, useLanguage } from "@/components/LanguageProvider";
import { PROGRESS_KEYS } from "@/lib/progressStore";

const EFFECTIVE_DATE = "2026-10-12";

export default function CookiesContent() {
  const { t, locale } = useLanguage();
  const c = t.cookies;
  useDocumentTitle(t.siteTitle(c.title));

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">{c.title}</h1>
      <p className="mt-2 text-sm text-foreground/60">
        hawkspeed.com &middot; {c.effective(formatDate(EFFECTIVE_DATE, locale))}
      </p>

      <div className="mt-8 flex flex-col gap-6 text-foreground/80">
        <p>
          {c.intro[0]}
          <strong>{c.intro[1]}</strong>
          {c.intro[2]}
        </p>

        <section>
          <h2 className="text-lg font-medium text-foreground">{c.storeTitle}</h2>
          <p className="mt-2">{c.storeIntro}</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              {c.storeCookie[0]}
              <code className="text-foreground">hawkspeed-cookie-consent</code>
              {c.storeCookie[1]}
            </li>
            <li>
              {c.storeLocal}{" "}
              {PROGRESS_KEYS.map((key, index) => (
                <span key={key}>
                  {index > 0 && ", "}
                  <code className="text-foreground">{key}</code>
                </span>
              ))}
              .
            </li>
          </ul>
          <p className="mt-2">{c.storeNoPersonal}</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">{c.dontTitle}</h2>
          <p className="mt-2">{c.dont}</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">{c.declineTitle}</h2>
          <p className="mt-2">{c.decline}</p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-foreground">{c.removeTitle}</h2>
          <p className="mt-2">{c.remove}</p>
        </section>
      </div>
    </div>
  );
}
