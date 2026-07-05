import type { Metadata } from "next";
import "../globals.css";
import { SiteRootLayout } from "@/components/SiteRootLayout";
import { rootMetadata } from "@/lib/rootMetadata";

export const metadata: Metadata = rootMetadata;

export default function ItalianRootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteRootLayout locale="it">{children}</SiteRootLayout>;
}
