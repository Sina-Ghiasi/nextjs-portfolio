import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  darkMode: ["selector", "[data-theme*='dark']"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        estedad: ["var(--font-estedad)", "Arial", "sans-serif"],
        shabnam: ["var(--font-shabnam)", "Tahoma", "sans-serif"],
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: "#690DAC",
          secondary: "#013C51",
          accent: "#B4DB1C",
          neutral: "#D5DBDB",
          "base-100": "#F8F8FF",
          info: "#53B6DD",
          success: "#2DCC70",
          warning: "#F1C40F",
          error: "#FE6347",
        },
        dark: {
          primary: "#9540FF",
          secondary: "#006D5A",
          accent: "#C9F420",
          neutral: "#1A1A32",
          "base-100": "#0D0F16",
          info: "#53B6DD",
          success: "#2DCC70",
          warning: "#F1C40F",
          error: "#FE6347",
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config;
