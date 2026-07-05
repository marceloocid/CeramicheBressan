import type { Metadata } from "next";
import { AziendaPageContent } from "@/components/pages/AziendaPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "azienda");

export default function AziendaPage() {
  return <AziendaPageContent locale="it" />;
}
