import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Endings Guide for Elden Ring",
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
