import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/games", label: "Games" },
  { href: "/guides", label: "Game Guides" },
];

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-semibold tracking-tight"
        >
          <Image
            src="/logo/hawkspeed-amber.svg"
            alt=""
            width={429}
            height={335}
            className="h-8 w-auto"
          />
          HawkSpeed
        </Link>
        <nav className="flex gap-6 text-sm">
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
      </div>
    </header>
  );
}
