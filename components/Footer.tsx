import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} HawkSpeed</span>
        <Link
          href="/privacy/endings-guide-for-elden-ring"
          className="hover:text-foreground"
        >
          Privacy Policy (Endings Guide for Elden Ring)
        </Link>
      </div>
    </footer>
  );
}
