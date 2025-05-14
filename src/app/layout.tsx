import "@/styles/globals.css";
import estedadFont from "@/constants/estedadFont";
import vazirmatnFont from "@/constants/vazirmatnFont";
import { Metadata } from "next";
import Providers from "@/providers/Providers";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "سایت شخصی سینا قیاسی",
    template: "%s",
  },
  description: "سایت شخصی و نمونه کارهای سینا قیاسی",
  metadataBase: new URL("https://sinaghiasi.ir"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`min-h-screen ${vazirmatnFont.variable} ${estedadFont.variable}`}
      >
        <Providers>
          <Header />
          <main className="container xl:max-w-screen-xl mx-auto">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
