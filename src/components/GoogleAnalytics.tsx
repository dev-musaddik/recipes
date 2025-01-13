"use client"; // Client-side only component

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Google Analytics setup
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-BQS8Z6725Y"); // Replace with your Google Analytics ID
  }, []);

  return (
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-BQS8Z6725Y" // Replace with your Google Analytics ID
    />
  );
}
