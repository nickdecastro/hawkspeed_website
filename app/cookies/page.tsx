import type { Metadata } from "next";
import CookiesContent from "./CookiesContent";

export const metadata: Metadata = {
  title: "Cookie Notice — HawkSpeed",
};

export default function CookieNoticePage() {
  return <CookiesContent />;
}
