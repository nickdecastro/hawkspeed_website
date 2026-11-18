import type { Metadata } from "next";
import GuidesContent from "./GuidesContent";

export const metadata: Metadata = {
  title: "Game Guides — HawkSpeed",
};

export default function GuidesPage() {
  return <GuidesContent />;
}
