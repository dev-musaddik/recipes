import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head"; // Import Head component for better SEO control
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAd from "@/components/GoogleAd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloggers App | Your blogging guideline",
  description: "This is the Bloggers app boundary, providing useful tips and resources for successful blogging.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="This is the Bloggers app boundary, providing useful tips and resources for successful blogging."
        />
        <meta property="og:title" content="Bloggers App | Your blogging guideline" />
        <meta property="og:description" content="This is the Bloggers app boundary, providing useful tips and resources for successful blogging." />
        <meta property="og:image" content="/path/to/your/image.jpg" /> {/* Replace with actual image path */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://therecipescroll.vercel.app/" /> {/* Replace with your website URL */}
        <link rel="canonical" href="https://therecipescroll.vercel.app/" /> {/* Replace with your website URL */}
      </Head>

      <body className={inter.className}>
        <GoogleAnalytics/>
        <GoogleAd/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
