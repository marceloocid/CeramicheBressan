import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("en", "home");

export default function EnglishHomePage() {
  return <HomePageContent locale="en" />;
}
