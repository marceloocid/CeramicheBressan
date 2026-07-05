import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/LegalPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "privacy");

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent locale="it" />;
}
