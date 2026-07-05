import type { Metadata } from "next";
import { ContattiPageContent } from "@/components/pages/ContattiPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "contatti");

export default function ContattiPage() {
  return <ContattiPageContent locale="it" />;
}
