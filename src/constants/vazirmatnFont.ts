import localFont from "next/font/local";

const vazirmatnFont = localFont({
  src: [
    {
      path: "../../public/fonts/vazirmatn/Vazirmatn[wght].woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "block",
});

export default vazirmatnFont;
