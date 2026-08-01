import type { Metadata } from "next";
import { StoriaPageContent } from "@/components/pages/StoriaPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "storia");

export default function StoriaPage() {
  return <StoriaPageContent locale="it" />;
}
