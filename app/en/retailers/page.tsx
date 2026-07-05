import type { Metadata } from "next";
import { PerRivenditoriPageContent } from "@/components/pages/PerRivenditoriPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "perRivenditori");

export default function EnglishRetailersPage() {
  return <PerRivenditoriPageContent locale="en" />;
}
