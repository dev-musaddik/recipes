"use client"; // Ensure client-side behavior only

interface GoogleAnalyticsProps {
  nonce: string;
}

export default function GoogleAnalytics({ nonce }: GoogleAnalyticsProps) {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BQS8Z6725Y"
        nonce={nonce} // Attach nonce to the script
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(...args) {
              window.dataLayer.push(args);
            }
            gtag("js", new Date());
            gtag("config", "G-BQS8Z6725Y");
          `,
        }}
        nonce={nonce} // Use nonce
      />
    </>
  );
}
