import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        avorio: "#F6F0E6",
        ceramica: "#1F4E79",
        terracotta: "#B7653B",
        salvia: "#8A9A7B",
        argilla: "#6B4A35",
        oro: "#B89B5E",
        inchiostro: "#2F241D"
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Lato", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(47, 36, 29, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
