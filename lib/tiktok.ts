export interface TikTokVideo {
  id: string;
  url: string;
}

export interface TikTokVideoMeta extends TikTokVideo {
  title: string;
  thumbnail: string;
  playCount: number;
  diggCount: number;
  commentCount: number;
}

/** Latest @q50ryu videos — used when TIKTOK_VIDEO_URLS is not set. */
export const DEFAULT_TIKTOK_VIDEOS: TikTokVideo[] = [
  { id: '7658128894096117005', url: 'https://www.tiktok.com/@q50ryu/video/7658128894096117005' },
  { id: '7649159712776244493', url: 'https://www.tiktok.com/@q50ryu/video/7649159712776244493' },
  { id: '7627594963483675917', url: 'https://www.tiktok.com/@q50ryu/video/7627594963483675917' },
  { id: '7612406260968819981', url: 'https://www.tiktok.com/@q50ryu/video/7612406260968819981' },
  { id: '7611960290208451854', url: 'https://www.tiktok.com/@q50ryu/video/7611960290208451854' },
  { id: '7609079311718485261', url: 'https://www.tiktok.com/@q50ryu/video/7609079311718485261' },
  { id: '7604592648925711629', url: 'https://www.tiktok.com/@q50ryu/video/7604592648925711629' },
  { id: '7594884420142681358', url: 'https://www.tiktok.com/@q50ryu/video/7594884420142681358' },
];

export function getTikTokVideos(limit = 8): TikTokVideo[] {
  const raw = process.env.TIKTOK_VIDEO_URLS || '';
  const configured = raw
    .split(',')
    .map((u) => u.trim())
    .filter(Boolean)
    .slice(0, limit)
    .reduce<TikTokVideo[]>((acc, url) => {
      const match = url.match(/\/video\/(\d+)/);
      if (match) acc.push({ id: match[1], url });
      return acc;
    }, []);

  return configured.length > 0 ? configured : DEFAULT_TIKTOK_VIDEOS.slice(0, limit);
}

export function formatTikTokCount(value: number): string {
  if (value >= 1_000_000) {
    const n = value / 1_000_000;
    return `${n >= 10 ? Math.round(n) : n.toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (value >= 10_000) {
    const n = value / 1_000;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1).replace(/\.0$/, '')}K`;
  }
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return String(value);
}

function parseEmbedStats(html: string) {
  const readMax = (key: string) => {
    const matches = [...html.matchAll(new RegExp(`"${key}":(\\d+)`, 'g'))];
    if (!matches.length) return 0;
    return Math.max(...matches.map((m) => Number(m[1])));
  };

  return {
    playCount: readMax('playCount'),
    diggCount: readMax('diggCount'),
    commentCount: readMax('commentCount'),
  };
}

export async function fetchVideoMetadata(video: TikTokVideo): Promise<TikTokVideoMeta | null> {
  try {
    const [oembedRes, embedRes] = await Promise.all([
      fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(video.url)}`, {
        next: { revalidate: 86_400 },
      }),
      fetch(`https://www.tiktok.com/embed/v2/${video.id}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        next: { revalidate: 86_400 },
      }),
    ]);

    if (!oembedRes.ok || !embedRes.ok) return null;

    const oembed = (await oembedRes.json()) as { title?: string; thumbnail_url?: string };
    const embedHtml = await embedRes.text();
    const stats = parseEmbedStats(embedHtml);

    if (!oembed.thumbnail_url) return null;

    return {
      ...video,
      title: oembed.title ?? 'TikTok video',
      thumbnail: oembed.thumbnail_url,
      ...stats,
    };
  } catch {
    return null;
  }
}

export async function fetchAllVideoMetadata(videos: TikTokVideo[]): Promise<TikTokVideoMeta[]> {
  const results = await Promise.all(videos.map((video) => fetchVideoMetadata(video)));
  return results.filter((v): v is TikTokVideoMeta => v !== null);
}
