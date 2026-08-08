import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBadge from "@/components/StatusBadge";
import { getGuide, guides } from "../data";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  return { title: guide ? `${guide.title} — HawkSpeed` : "Guide — HawkSpeed" };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div>
      <Link href="/guides" className="text-sm text-foreground/60 hover:text-foreground">
        &larr; Game Guides
      </Link>
      <div className="mt-4 flex flex-col gap-2">
        {guide.status === "coming-soon" && <StatusBadge>Coming Soon</StatusBadge>}
        <h1 className="text-3xl font-semibold tracking-tight">{guide.title}</h1>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-foreground/80">
        {guide.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
