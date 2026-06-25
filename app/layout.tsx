import type { Metadata, Viewport } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  variable: "--font-montserrat-nf",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-nf",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lancorltd.com"),
  title: {
    template: "%s | LANCOR LTD",
    default: "LANCOR LTD — Dynamic Technology Solutions",
  },
  description:
    "Professional consulting, research, and development services — offering strategic process reengineering solutions to clients around the world.",
  applicationName: "LANCOR LTD",
  authors: [{ name: "Lagos Analysis Corporation" }],
  creator: "LANCOR LTD",
  keywords: [
    "LANCOR",
    "technology consulting",
    "IT solutions",
    "process reengineering",
    "software development",
    "cloud computing",
    "Newton Massachusetts",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "LANCOR LTD",
    locale: "en_US",
    title: "LANCOR LTD — Dynamic Technology Solutions",
    description:
      "Professional consulting, research, and development services — offering strategic process reengineering solutions to clients around the world.",
    url: "https://www.lancorltd.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "LANCOR LTD — Dynamic Technology Solutions",
    description:
      "Professional consulting, research, and development services — offering strategic process reengineering solutions to clients around the world.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0d0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
