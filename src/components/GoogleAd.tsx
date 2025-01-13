import React from 'react';

export default function GoogleAd() {
  return (
    <div>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5663485350418829"
        crossOrigin="anonymous"
      ></script>
      {/* Ad slot */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5663485350418829"
        data-ad-slot="1234567890"
        data-ad-format="auto"
      ></ins>
      <script>
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </script>
    </div>
  );
}
