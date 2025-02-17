import "@/styles/globals.css";
import estedadFont from "@/constants/estedadFont";
import shabnamFont from "@/constants/shabnamFont";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سایت شخصی سینا قیاسی | خانه",
  description: "سایت شخصی و نمونه کارهای سینا قیاسی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${shabnamFont.variable} ${estedadFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
