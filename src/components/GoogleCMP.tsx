"use client";

export default function GoogleCMP() {
  return (
    <>
      <script
        async
        src="https://fundingchoicesmessages.google.com/i/pub-5663485350418829?erf=3"
        nonce="your-nonce-code"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.__tcfapi = window.__tcfapi || function() {
              (window.__tcfapi.queue = window.__tcfapi.queue || []).push(arguments);
            };
            (function() {
              var fcScript = document.createElement('script');
              fcScript.src = "https://fundingchoicesmessages.google.com/i/pub-5663485350418829?erf=3";
              fcScript.async = true;
              fcScript.setAttribute('nonce', 'your-nonce-code');
              document.head.appendChild(fcScript);
            })();
          `,
        }}
      />
    </>
  );
}
