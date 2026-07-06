'use client';

import { useEffect } from 'react';

export default function TikTokCreatorEmbed() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (existing) {
      // Re-trigger processing of new embeds if script already loaded
      if (typeof (window as Window & { TikTok?: { reload?: () => void } }).TikTok?.reload === 'function') {
        (window as Window & { TikTok?: { reload?: () => void } }).TikTok?.reload?.();
      }
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // leave the script in place — removing it would break other embeds
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite="https://www.tiktok.com/@q50ryu"
      data-unique-id="q50ryu"
      data-embed-from="embed_page"
      data-embed-type="creator"
      style={{ maxWidth: '100%', minWidth: 288 }}
    >
      <section>
        <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@q50ryu?refer=creator_embed">
          @q50ryu
        </a>
      </section>
    </blockquote>
  );
}
