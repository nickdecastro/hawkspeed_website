import Link from "next/link";

// Tank Commander was renamed to IVATG. The site is a static export, so
// server redirects aren't available — forward old links client-side.
export const metadata = {
  title: "IVATG — HawkSpeed",
  robots: { index: false },
};

export default function TankCommanderRedirect() {
  return (
    <div>
      <meta httpEquiv="refresh" content="0; url=/games/ivatg" />
      <link rel="canonical" href="https://hawkspeed.com/games/ivatg" />
      <p>
        Tank Commander is now <Link href="/games/ivatg">IVATG</Link>.
      </p>
    </div>
  );
}
