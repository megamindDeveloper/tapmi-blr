import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import LenisProvider from "../components/providers/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intersection 2026: Navigating the New Global Order",
  description: "Join us for Intersection 2026, a two-day PhD and Early Career Research colloquium organised by TAPMI Bengaluru, MAHE, in collaboration with Deakin University, Australia",
  openGraph: {
    title: "Intersection 2026: Navigating the New Global Order",
    description: "Join us for Intersection 2026, a two-day PhD and Early Career Research colloquium organised by TAPMI Bengaluru, MAHE, in collaboration with Deakin University, Australia",
    images: [
      {
        url: "/metaImg.png",    // place image inside /public
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/metaImg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          <Header />
          <main className="flex-1"> {children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
