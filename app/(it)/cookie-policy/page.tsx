import type { Metadata } from "next";
import { CookiePolicyContent } from "@/components/LegalPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "cookie");

export default function CookiePolicyPage() {
  return <CookiePolicyContent locale="it" />;
}
