import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-6">
      <h1 className="text-4xl font-semibold tracking-tight">HawkSpeed</h1>
      <p className="max-w-xl text-foreground/70">
        HawkSpeed makes games and the guides that go with them. Browse what
        we&apos;ve built, or jump straight into a walkthrough.
      </p>
      <div className="flex gap-4">
        <Link
          href="/games"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Browse Games
        </Link>
        <Link
          href="/guides"
          className="rounded-md border border-white/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
        >
          Browse Game Guides
        </Link>
      </div>
    </div>
  );
}
