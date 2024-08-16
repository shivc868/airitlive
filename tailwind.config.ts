import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        "helvetica-bold": ["helvetica-bold", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "main-bg": "#F5E7FF",
        thunder: "#2D293E",
        purple: "#802BB1",
        lightPurple: "#D3A2F0",
        plum: "#502C6D",
        "light-gray": "rgba(229,230,236,0.50)",
        honey: "#62217E",
        aswadBlack: "#141619",
        lavender: "#D6CDF7",
        lavenderIndigo: "rgba(59,28,148,0.25)",
        chineseBlack: "#0C1100",
      },
    },
  },
  plugins: [],
};
export default config;
