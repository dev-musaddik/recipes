"use client";
import { generateNonce } from "@/lib/generateNonce";

 // Ensure client-side behavior only

// interface GoogleCMPProps {
//   nonce: string;
// }

const nonce: string =generateNonce();

export default function GoogleCMP() {
  return (
    <>
      <script
        async
        src="https://fundingchoicesmessages.google.com/i/pub-5663485350418829?erf=3"
        nonce={nonce} // Attach nonce to the script
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
              fcScript.setAttribute('nonce', '${nonce}'); // Use nonce
              document.head.appendChild(fcScript);
            })();
          `,
        }}
      />
    </>
  );
}
