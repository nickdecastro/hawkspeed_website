import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import type { GuideEntry } from "@/app/guides/data";

export default function GuideCard({ guide }: { guide: GuideEntry }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="flex flex-col gap-2 rounded-lg border border-white/10 p-5 transition-colors hover:bg-white/5"
    >
      {guide.status === "coming-soon" && <StatusBadge>Coming Soon</StatusBadge>}
      <h3 className="font-medium">{guide.title}</h3>
      <p className="text-sm text-foreground/70">{guide.blurb}</p>
    </Link>
  );
}
