"use client";

import Image from "next/image";
import Link from "next/link";
import LanguagePicker from "@/components/LanguagePicker";
import { useT } from "@/components/LanguageProvider";

export default function Header() {
  const t = useT();
  const navLinks = [
    { href: "/games", label: t.nav.games },
    { href: "/guides", label: t.nav.guides },
  ];

  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-lg font-semibold tracking-tight"
        >
          <Image
            src="/logo/hawkspeed-amber.svg"
            alt=""
            width={2282}
            height={1408}
            className="h-8 w-auto"
          />
          <span className="hidden sm:inline">HawkSpeed</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex gap-4 text-sm sm:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <LanguagePicker />
        </div>
      </div>
    </header>
  );
}
