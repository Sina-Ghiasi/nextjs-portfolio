import localFont from "next/font/local";

const shabnamFont = localFont({
  src: [
    {
      path: "../../public/fonts/shabnam/Shabnam-Thin-FD.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Light-FD.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Medium-FD.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-FD.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/fonts/shabnam/Shabnam-Bold-FD.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-shabnam",
  style: "normal",
  display: "block",
});

export default shabnamFont;
