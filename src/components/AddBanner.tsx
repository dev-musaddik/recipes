"use client";

import React, { useEffect, useRef } from "react";

type AdBannerTypes = {
  dataAdSlot: string;
  dataAdFormat: string;
  dataFullWidthResponsive: boolean;
};

const AdBanner = ({
  dataAdSlot,
  dataAdFormat,
  dataFullWidthResponsive,
}: AdBannerTypes) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load AdSense script once
    const loadAdScript = () => {
      if (!document.querySelector("script[src*='adsbygoogle.js']")) {
        const script = document.createElement("script");
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.setAttribute("data-ad-client", "ca-pub-5663485350418829");
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);
      }
    };

    loadAdScript();

    // Initialize the ad only if it hasn't been initialized yet
    if (adRef.current) {
      try {
        (window as any).adsbygoogle = (window as any).adsbygoogle || [];
        (window as any).adsbygoogle.push({});
      } catch (error: any) {
        console.error("AdSense Error:", error.message);
      }
    }
  }, []);

  return (
    <div ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5663485350418829"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      ></ins>
    </div>
  );
};

export default AdBanner;
