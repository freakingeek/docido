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
          high: "#666150",
          low: "#918d80",
        },
        orange: "#daa357",
        "black-haze": "#e4e1d1",
      },
    },
  },
  plugins: [],
} satisfies Config;
