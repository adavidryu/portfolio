import SideNav from '../../components/SideNav';
import ContentArea from '../../components/ContentArea';

interface TikTokEmbed {
  id: string;
  url: string;
}

function getConfiguredTikToks(limit = 7): TikTokEmbed[] {
  const configured = process.env.TIKTOK_VIDEO_URLS || '';
  const urls = configured
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean)
    .slice(0, limit);

  return urls
    .map((url) => {
      const match = url.match(/\/video\/(\d+)/);
      if (!match) return null;
      return { id: match[1], url };
    })
    .filter((item): item is TikTokEmbed => Boolean(item));
}

export default async function Garage() {
  const recentVideos = getConfiguredTikToks(7);

  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <SideNav currentPage="garage" />

      <ContentArea>
        <section className="space-y-12">
          <div className="section-wrap text-center md:text-left">
            <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:mx-0 md:text-5xl">
              Maintenance, mods, and repairs.<br />My love for wrenching.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:mx-0">
              I find joy in doing hands-on projects for both my car and motorcycle, making instructional videos to inspire and educate DIYers at home.
            </p>
          </div>

          <div className="section-rule">
            <div className="flex flex-wrap items-end justify-center gap-3 md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold md:text-3xl">Latest from @q50ryu</h2>
              </div>
              <a
                href="https://www.tiktok.com/@q50ryu"
                target="_blank"
                rel="noopener noreferrer"
                className="action-link action-link--accent"
              >
                Open TikTok profile
              </a>
            </div>

            {recentVideos.length > 0 ? (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {recentVideos.map((video) => (
                  <article key={video.id} className="space-y-3 border-t border-border pt-4">
                    <div className="overflow-hidden border border-border bg-secondary">
                      <iframe
                        src={`https://www.tiktok.com/embed/v2/${video.id}`}
                        title={`TikTok ${video.id}`}
                        className="h-[640px] w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </div>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                    >
                      View on TikTok
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-8 border-l-2 border-border pl-4">
                <p className="text-sm text-muted-foreground">
                  TikTok embeds are configured from `TIKTOK_VIDEO_URLS` (comma-separated video links) in environment variables.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Add your latest 7 `https://www.tiktok.com/@q50ryu/video/...` links and redeploy.
                </p>
              </div>
            )}
          </div>
        </section>
      </ContentArea>
    </div>
  );
}
