'use client';

import { useState } from 'react';
import Image from 'next/image';
import { formatTikTokCount, type TikTokVideoMeta } from '../lib/tiktok';

function playerSrc(id: string) {
  const params = new URLSearchParams({
    autoplay: '1',
    muted: '1',
    loop: '1',
    controls: '0',
    music_info: '0',
    description: '0',
    progress_bar: '0',
    play_button: '0',
    volume_control: '0',
    fullscreen_button: '0',
    timestamp: '0',
    rel: '0',
    closed_caption: '0',
  });
  return `https://www.tiktok.com/player/v1/${id}?${params}`;
}

interface TikTokVideoCardProps {
  video: TikTokVideoMeta;
}

export default function TikTokVideoCard({ video }: TikTokVideoCardProps) {
  const [preview, setPreview] = useState(false);

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={video.title}
      className="group relative block aspect-[9/16] overflow-hidden border-2 border-foreground/15 bg-muted transition-colors hover:border-foreground/35"
      onMouseEnter={() => setPreview(true)}
      onMouseLeave={() => setPreview(false)}
      onFocus={() => setPreview(true)}
      onBlur={() => setPreview(false)}
    >
      <Image
        src={video.thumbnail}
        alt=""
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className={`object-cover transition-opacity duration-300 ${preview ? 'opacity-0' : 'opacity-100'}`}
      />

      {preview && (
        <iframe
          src={playerSrc(video.id)}
          title={video.title}
          className="pointer-events-none absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen"
        />
      )}

      {!preview && (
        <>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
              <svg className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pb-3 pt-10">
            <div className="flex items-center gap-3 text-[11px] font-medium text-white/95">
              <span className="inline-flex items-center gap-1">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {formatTikTokCount(video.playCount)}
              </span>
              <span className="inline-flex items-center gap-1">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {formatTikTokCount(video.diggCount)}
              </span>
            </div>
          </div>
        </>
      )}
    </a>
  );
}
