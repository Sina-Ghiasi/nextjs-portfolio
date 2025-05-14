import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  darkMode: ["selector", "[data-theme*='dark']"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        estedad: ["var(--font-estedad)", "Arial", "sans-serif"],
        vazirmatn: ["var(--font-vazirmatn)", "Tahoma", "sans-serif"],
      },
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          primary: "#690DAC",
          secondary: "#013C51",
          accent: "#A2C519",
          neutral: "#B7C0C1",
          "base-100": "#E6E7E7",
          "base-200": "#D1D5D6",
          "base-300": "#B0B7B8",
          info: "#53B6DD",
          success: "#76b900",
          warning: "#F1C40F",
          error: "#FE6347",
        },
        dark: {
          primary: "#9540FF",
          secondary: "#006D5A",
          accent: "#C9F420",
          neutral: "#2A303F",
          "base-100": "#0D0F16",
          "base-200": "#1A1E29",
          "base-300": "#2F3648",
          info: "#53B6DD",
          success: "#76b900",
          warning: "#F1C40F",
          error: "#FE6347",
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config;
