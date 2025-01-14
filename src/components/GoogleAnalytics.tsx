"use client"; // Client-side only component

import { useEffect } from "react";
import Script from "next/script";

// Extend the global `window` object to include the `gtag` method
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize the `dataLayer` if not already defined
    window.dataLayer = window.dataLayer || [];

    // Define the `gtag` function and attach it to the global `window` object
    function gtag(...args: any[]) {
      console.log("gtag called with:", args); // Debug: Log every call to gtag
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    // Debug: Confirm the dataLayer initialization
    console.log("dataLayer initialized:", window.dataLayer);

    // Configure Google Analytics with the Measurement ID
    gtag("js", new Date());
    console.log("Google Analytics initialized with ID: G-BQS8Z6725Y"); // Debug: Log initialization

    gtag("config", "G-BQS8Z6725Y"); // Replace with your Google Analytics Measurement ID
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive" // Load the script after the page is interactive
        src="https://www.googletagmanager.com/gtag/js?id=G-BQS8Z6725Y" // Replace with your Google Analytics Measurement ID
        onLoad={() => console.log("Google Analytics script loaded successfully.")} // Debug: Log when script loads
        onError={() => console.error("Failed to load Google Analytics script.")} // Debug: Log script loading errors
      />
    </>
  );
}
