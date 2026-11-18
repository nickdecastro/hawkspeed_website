"use client";

import { formatDate, useDocumentTitle, useLanguage } from "@/components/LanguageProvider";

const EFFECTIVE_DATE = "2026-08-08";
const APP_NAME = "Endings Guide for Elden Ring";

export default function PrivacyContent() {
  const { t, locale } = useLanguage();
  const p = t.privacy;
  useDocumentTitle(p.pageTitle);

  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">{p.title}</h1>
      <p className="mt-2 text-sm text-foreground/60">
        {APP_NAME} &middot; {p.effective(formatDate(EFFECTIVE_DATE, locale))}
      </p>

      <div className="mt-8 flex flex-col gap-6 text-foreground/80">
        <p>
          {p.intro[0]}
          <strong>{APP_NAME}</strong>
          {p.intro[1]}
        </p>

        {p.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-medium text-foreground">{section.title}</h2>
            <p className="mt-2">{section.body}</p>
          </section>
        ))}

        <section>
          <h2 className="text-lg font-medium text-foreground">{p.contactTitle}</h2>
          <p className="mt-2">
            {p.contact[0]}
            <a href="mailto:info@hawkspeed.com" className="underline underline-offset-4">
              info@hawkspeed.com
            </a>
            {p.contact[1]}
          </p>
        </section>
      </div>
    </div>
  );
}
