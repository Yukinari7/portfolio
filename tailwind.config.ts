import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        ciento: ["var(--font-geom)"],
        clashdisplay: ["var(--font-clash)"],
        antar: ["var(--font-antar)"]
      },
    },
  },

  plugins: [],
  darkMode: 'class',
};

export default config;