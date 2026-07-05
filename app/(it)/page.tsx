import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/HomePage";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("it", "home");

export default function Home() {
  return <HomePageContent locale="it" />;
}
