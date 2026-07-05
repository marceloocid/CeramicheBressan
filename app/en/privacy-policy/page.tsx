import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/LegalPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "privacy");

export default function EnglishPrivacyPolicyPage() {
  return <PrivacyPolicyContent locale="en" />;
}
