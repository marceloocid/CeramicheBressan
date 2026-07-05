import type { Metadata } from "next";
import { CreazioniPageContent } from "@/components/pages/CreazioniPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "creazioni");

export default function CreazioniPage() {
  return <CreazioniPageContent locale="it" />;
}
