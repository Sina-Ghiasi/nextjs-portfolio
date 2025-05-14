import localFont from "next/font/local";

const estedadFont = localFont({
  src: [
    {
      path: "../../public/fonts/estedad/Estedad[KSHD,wght].woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
  display: "block",
});

export default estedadFont;
