import "@/styles/globals.css";
import estedadFont from "@/constants/estedadFont";
import shabnamFont from "@/constants/shabnamFont";
import { Metadata } from "next";
import Header from "@/components/Header";
import Providers from "@/providers/Providers";

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
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`min-h-screen ${shabnamFont.variable} ${estedadFont.variable}`}
      >
        <Providers>
          <Header />
          <div className="container xl:max-w-screen-xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
