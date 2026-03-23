import SideNav from '../../components/SideNav';
import ContentArea from '../../components/ContentArea';

interface TikTokVideo {
  id: string;
  description: string;
}

async function getRecentTikToks(username: string, limit = 7): Promise<TikTokVideo[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1800);

  try {
    const response = await fetch(`https://www.tiktok.com/@${username}`, {
      next: { revalidate: 900 },
      signal: controller.signal,
      headers: {
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) return [];

    const html = await response.text();
    const marker = '<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application/json">';
    const start = html.indexOf(marker);
    if (start === -1) return [];

    const scriptStart = start + marker.length;
    const scriptEnd = html.indexOf('</script>', scriptStart);
    if (scriptEnd === -1) return [];

    const jsonText = html.slice(scriptStart, scriptEnd).trim();
    if (!jsonText) return [];

    const parsed = JSON.parse(jsonText) as {
      __DEFAULT_SCOPE__?: {
        'webapp.user-detail'?: {
          itemInfo?: {
            itemStruct?: Array<{ id?: string; desc?: string; createTime?: string | number }>;
          };
        };
      };
    };

    const itemStruct = parsed.__DEFAULT_SCOPE__?.['webapp.user-detail']?.itemInfo?.itemStruct ?? [];
    const sorted = itemStruct
      .filter((item) => item.id)
      .sort((a, b) => Number(b.createTime ?? 0) - Number(a.createTime ?? 0))
      .slice(0, limit)
      .map((item) => ({
        id: String(item.id),
        description: item.desc?.trim() || 'Recent instructional clip',
      }));

    return sorted;
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

export default async function Garage() {
  const recentVideos = await getRecentTikToks('q50ryu', 7);

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
                    <p className="line-clamp-3 text-sm text-muted-foreground">{video.description}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="mt-8 border-l-2 border-border pl-4">
                <p className="text-sm text-muted-foreground">
                  Could not auto-load recent videos right now. Use the link above to view the latest posts on TikTok.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  If you are on a school or work network, TikTok embeds may be blocked by firewall policy.
                </p>
              </div>
            )}
          </div>
        </section>
      </ContentArea>
    </div>
  );
}
