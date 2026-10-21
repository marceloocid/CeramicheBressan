import localFont from "next/font/local";

export const lato = localFont({
  src: [
    { path: "./fonts/lato-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/lato-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/lato-900-normal.woff2", weight: "900", style: "normal" },
    { path: "./fonts/lato-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/lato-700-italic.woff2", weight: "700", style: "italic" }
  ],
  variable: "--font-lato",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: ["Arial", "sans-serif"]
});

export const playfairDisplay = localFont({
  src: [
    { path: "./fonts/playfair-display-400-900-normal.woff2", weight: "400 900", style: "normal" },
    { path: "./fonts/playfair-display-400-900-italic.woff2", weight: "400 900", style: "italic" }
  ],
  variable: "--font-playfair-display",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  fallback: ["Georgia", "serif"]
});
