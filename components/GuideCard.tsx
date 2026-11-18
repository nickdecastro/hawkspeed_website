"use client";

import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { useT } from "@/components/LanguageProvider";
import type { GuideLink } from "@/app/guides/data";

export default function GuideCard({ guide }: { guide: GuideLink }) {
  const t = useT();
  const text = t.guides.links[guide.href];
  return (
    <Link
      href={guide.href}
      className="flex flex-col gap-2 rounded-lg border border-white/10 p-5 transition-colors hover:bg-white/5"
    >
      {guide.status === "coming-soon" && <StatusBadge>{t.common.comingSoon}</StatusBadge>}
      <h3 className="font-medium">{text?.title}</h3>
      <p className="text-sm text-foreground/70">{text?.blurb}</p>
    </Link>
  );
}
