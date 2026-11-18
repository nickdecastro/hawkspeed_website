import type { Metadata } from "next";
import EldenRingWalkthrough from "./EldenRingWalkthrough";
import GuideIntro from "./GuideIntro";

export const metadata: Metadata = {
  title: "All Elden Ring Endings — HawkSpeed",
};

export default function EldenRingGuidePage() {
  return (
    <div>
      <GuideIntro guide="endings" />
      <div className="mt-8">
        <EldenRingWalkthrough />
      </div>
    </div>
  );
}
