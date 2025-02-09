import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBarContainer from "@/components/nav-bar/nav-bar-container";
import Footer from "@/components/footer/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UMET PORTAL",
  description: "UMET PORTAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <NavBarContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
