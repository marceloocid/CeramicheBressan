import type { Metadata } from "next";
import { CatalogoPageContent } from "@/components/pages/CatalogoPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "catalogo");

export default function EnglishCatalogPage() {
  return <CatalogoPageContent locale="en" />;
}
