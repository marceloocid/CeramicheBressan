import type { Metadata } from "next";
import { AziendaPageContent } from "@/components/pages/AziendaPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "azienda");

export default function EnglishCompanyPage() {
  return <AziendaPageContent locale="en" />;
}
