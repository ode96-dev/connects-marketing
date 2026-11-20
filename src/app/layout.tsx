import type { Metadata } from "next";
import { Oswald, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Connects — Marketing That Connects",
  description:
    "A unified marketing architecture connecting Brand, Content, Digital, Campaigns, and Offline into one compounding growth system.",
  openGraph: {
    title: "Connects — Marketing That Connects",
    description:
      "A unified marketing architecture connecting Brand, Content, Digital, Campaigns, and Offline into one compounding growth system.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connects — Marketing That Connects",
    description:
      "A unified marketing architecture connecting Brand, Content, Digital, Campaigns, and Offline into one compounding growth system.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${oswald.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#f4f1ea] text-[#0b1320] antialiased selection:bg-[#0b1320] selection:text-[#f4f1ea]"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
