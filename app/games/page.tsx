import type { Metadata } from "next";
import GamesContent from "./GamesContent";

export const metadata: Metadata = {
  title: "Games — HawkSpeed",
};

export default function GamesPage() {
  return <GamesContent />;
}
