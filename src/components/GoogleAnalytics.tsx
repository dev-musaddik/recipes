"use client"; 

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const GoogleAnalytics = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering until the component is mounted
  }

  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics when component is mounted
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-L8P2EX90VP";
    script.onload = () => {
      gtag("js", new Date());
      gtag("config", "G-L8P2EX90VP");
    };
    document.head.appendChild(script);

    const handleRouteChange = (url: string) => {
      gtag("config", "G-L8P2EX90VP", { page_path: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      document.head.removeChild(script);
    };
  }, [router]);

  return null; // This component doesn't render anything visible
};

export default GoogleAnalytics;
