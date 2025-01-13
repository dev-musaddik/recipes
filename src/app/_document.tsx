import { generateNonce } from "@/lib/generateNonce";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const nonce = generateNonce(); // Generate nonce for each page request

    return (
      <Html>
        <Head>
          {/* Inject Content Security Policy (CSP) Header */}
          <meta
            httpEquiv="Content-Security-Policy"
            content={`
              default-src 'self';
              script-src 'self' 'nonce-${nonce}';
              style-src 'self' 'unsafe-inline';
              object-src 'none';
              connect-src 'self';
              img-src 'self' data:;
              font-src 'self';
              frame-src 'none';
            `}
          />
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} /> {/* Pass nonce to NextScript */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
