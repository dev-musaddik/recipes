"use client";

import React, { useEffect, useRef } from "react";

const GoogleAd = () => {
  const adRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (adRef.current && !(adRef.current.dataset.adInitialized === "true")) {
      const script = document.createElement("script");
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5663485350418829";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);

      script.onload = () => {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adRef.current!.dataset.adInitialized = "true"; // Mark this ad slot as initialized
        } catch (error) {
          console.error("AdSense Error: ", error);
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div
      ref={adRef}
      style={{ display: "block" }}
      className="adsbygoogle"
      data-ad-client="ca-pub-5663485350418829"
      data-ad-slot="1234567890"
      data-ad-format="auto"
    ></div>
  );
};

export default GoogleAd;
