import type { Metadata } from "next";
import { LavorazionePageContent } from "@/components/pages/LavorazionePage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "lavorazione");

export default function LavorazionePage() {
  return <LavorazionePageContent locale="it" />;
}
