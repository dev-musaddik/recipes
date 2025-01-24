import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateNonce } from "@/lib/generateNonce";
import GoogleAd from "@/components/GoogleAd";
import GoogleCMP from "@/components/GoogleCMP";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const nonce = generateNonce();

export const metadata: Metadata = {
  title: "The Recipe Scroll | Explore Delicious Recipes",
  description:
    "Discover a wide range of recipes for all occasions on The Recipe Scroll. Your go-to guide for delicious meals!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Discover a wide range of recipes for all occasions on The Recipe Scroll. Your go-to guide for delicious meals!"
        />

        {/* Open Graph (OG) Tags */}
        <meta
          property="og:title"
          content="The Recipe Scroll | Explore Delicious Recipes"
        />
        <meta
          property="og:description"
          content="Discover a wide range of recipes for all occasions on The Recipe Scroll. Your go-to guide for delicious meals!"
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://therecipescroll.vercel.app/" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://therecipescroll.vercel.app/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={inter.className}>
        <GoogleAd />
        {/* <GoogleCMP /> */}
        <Navbar />
        {children}
        <Footer />

        {/* Add Google Analytics script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-L8P2EX90VP"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
              console.log('Google Analytics event:', arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-L8P2EX90VP', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
