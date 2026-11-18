"use client";

import Link from "next/link";
import { useT } from "@/components/LanguageProvider";

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} HawkSpeed</span>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <Link href="/cookies" className="hover:text-foreground">
            {t.footer.cookies}
          </Link>
          <Link
            href="/privacy/endings-guide-for-elden-ring"
            className="hover:text-foreground"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
