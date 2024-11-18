import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: "#f0eee2",
        content: {
          "high-emphasis": "#666150",
          "low-emphasis": "#918d80",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
