import type { Metadata } from "next";
import { PerRivenditoriPageContent } from "@/components/pages/PerRivenditoriPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "perRivenditori");

export default function PerRivenditoriPage() {
  return <PerRivenditoriPageContent locale="it" />;
}
