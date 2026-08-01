import type { Metadata } from "next";
import { StoriaPageContent } from "@/components/pages/StoriaPage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "storia");

export default function EnglishHistoryPage() {
  return <StoriaPageContent locale="en" />;
}
