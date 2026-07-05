import type { Metadata } from "next";
import { ContattiPageContent } from "@/components/pages/ContattiPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "contatti");

export default function EnglishContactPage() {
  return <ContattiPageContent locale="en" />;
}
