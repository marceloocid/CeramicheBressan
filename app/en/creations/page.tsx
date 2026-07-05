import type { Metadata } from "next";
import { CreazioniPageContent } from "@/components/pages/CreazioniPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "creazioni");

export default function EnglishCreationsPage() {
  return <CreazioniPageContent locale="en" />;
}
