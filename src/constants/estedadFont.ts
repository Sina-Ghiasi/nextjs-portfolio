import localFont from "next/font/local";

const estedadFont = localFont({
  src: [
    {
      path: "../../public/fonts/estedad/Estedad-FD-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/estedad/Estedad-FD-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/estedad/Estedad-FD-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/estedad/Estedad-FD-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/estedad/Estedad-FD-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/estedad/Estedad-FD-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/estedad/Estedad-FD-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
  style: "normal",
  display: "block",
});

export default estedadFont;
