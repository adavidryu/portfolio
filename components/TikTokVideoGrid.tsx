import TikTokVideoCard from './TikTokVideoCard';
import { fetchAllVideoMetadata, type TikTokVideo } from '../lib/tiktok';

interface TikTokVideoGridProps {
  videos: TikTokVideo[];
}

export default async function TikTokVideoGrid({ videos }: TikTokVideoGridProps) {
  const enriched = await fetchAllVideoMetadata(videos);

  if (enriched.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        Videos couldn&apos;t load right now.{' '}
        <a
          href="https://www.tiktok.com/@q50ryu"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          View on TikTok
        </a>
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {enriched.map((video) => (
        <TikTokVideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
