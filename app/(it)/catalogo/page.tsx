import type { Metadata } from "next";
import { CatalogoPageContent } from "@/components/pages/CatalogoPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "catalogo");

export default function CatalogoPage() {
  return <CatalogoPageContent locale="it" />;
}
