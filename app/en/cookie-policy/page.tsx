import type { Metadata } from "next";
import { CookiePolicyContent } from "@/components/LegalPages";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "cookie");

export default function EnglishCookiePolicyPage() {
  return <CookiePolicyContent locale="en" />;
}
