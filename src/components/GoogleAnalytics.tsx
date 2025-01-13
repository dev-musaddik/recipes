// src/components/GoogleAnalytics.tsx

"use client";  // Add this to enable client-side only behavior

import { useEffect } from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Google Analytics setup
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-BQS8Z6725Y');
  }, []);

  return (
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-BQS8Z6725Y"
    />
  );
}
