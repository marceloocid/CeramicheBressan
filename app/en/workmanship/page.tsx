import type { Metadata } from "next";
import { LavorazionePageContent } from "@/components/pages/LavorazionePage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "lavorazione");

export default function EnglishWorkmanshipPage() {
  return <LavorazionePageContent locale="en" />;
}
