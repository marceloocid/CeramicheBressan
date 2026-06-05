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
        avorio: "#FFF9F0",
        ceramica: "#006B43",
        terracotta: "#C31524",
        salvia: "#6F8B45",
        argilla: "#51391F",
        oro: "#D8A52B",
        inchiostro: "#1E2318"
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["Lato", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(41, 31, 18, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
