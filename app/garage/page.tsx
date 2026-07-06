import SideNav from '../../components/SideNav';
import ContentArea from '../../components/ContentArea';
import TikTokCreatorEmbed from '../../components/TikTokCreatorEmbed';

interface TikTokVideo {
  id: string;
  url: string;
}

function getConfiguredVideos(limit = 9): TikTokVideo[] {
  const raw = process.env.TIKTOK_VIDEO_URLS || '';
  return raw
    .split(',')
    .map((u) => u.trim())
    .filter(Boolean)
    .slice(0, limit)
    .reduce<TikTokVideo[]>((acc, url) => {
      const match = url.match(/\/video\/(\d+)/);
      if (match) acc.push({ id: match[1], url });
      return acc;
    }, []);
}

const stats = [
  { label: 'Followers', value: '6.4K' },
  { label: 'Total likes', value: '195K+' },
  { label: 'Views (7-video streak)', value: '1.7M+' },
];

const topics = [
  { label: 'Oil changes', icon: '🔧' },
  { label: 'Spark plugs', icon: '⚡' },
  { label: 'Coilovers', icon: '🏎' },
  { label: 'Vinyl wraps', icon: '🎨' },
  { label: 'Brake work', icon: '🛑' },
  { label: 'Moto mods', icon: '🏍' },
];

export default function Garage() {
  const videos = getConfiguredVideos(9);

  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <SideNav currentPage="garage" />

      <ContentArea>
        <div className="space-y-10 md:space-y-12">

          {/* ── Hero ─────────────────────────────────────────── */}
          <section className="section-wrap text-center md:text-left">
            <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:mx-0 md:text-5xl">
              Wrenching on my Q50&nbsp;&amp;&nbsp;ZX&#8209;6R.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:mx-0">
              I handle my own maintenance, mods, and repairs — then turn it all into instructional short-form content
              to help other DIYers at home. Houston-based. Always learning.
            </p>

            {/* Stats row */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              {stats.map((s) => (
                <div key={s.label} className="border border-border bg-secondary/50 px-4 py-2.5 text-center">
                  <p className="text-lg font-semibold">{s.value}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Topics ───────────────────────────────────────── */}
          <section className="section-rule">
            <p className="eyebrow">What I cover</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {topics.map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-1.5 border border-border bg-secondary/60 px-3 py-1.5 text-sm text-foreground"
                >
                  <span aria-hidden="true">{t.icon}</span>
                  {t.label}
                </span>
              ))}
            </div>
          </section>

          {/* ── Video section ────────────────────────────────── */}
          <section className="section-rule">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">@q50ryu on TikTok</p>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl">Latest videos</h2>
              </div>
              <a
                href="https://www.tiktok.com/@q50ryu"
                target="_blank"
                rel="noopener noreferrer"
                className="action-link action-link--accent"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.77 1.52V7.07a4.85 4.85 0 0 1-1-.38Z" />
                </svg>
                Open profile
              </a>
            </div>

            <div className="mt-8">
              {videos.length > 0 ? (
                /* Individual video iframes (set via TIKTOK_VIDEO_URLS env var) */
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {videos.map((video) => (
                    <a
                      key={video.id}
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block border border-border bg-secondary/30 transition-colors hover:border-foreground/30"
                    >
                      <div className="overflow-hidden bg-muted">
                        <iframe
                          src={`https://www.tiktok.com/embed/v2/${video.id}`}
                          title={`TikTok video ${video.id}`}
                          className="h-[560px] w-full pointer-events-none"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          sandbox="allow-scripts allow-same-origin allow-popups"
                        />
                      </div>
                      <p className="px-3 py-2 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                        Watch on TikTok ↗
                      </p>
                    </a>
                  ))}
                </div>
              ) : (
                /* Creator profile embed — renders the full video grid from TikTok */
                <div className="overflow-hidden border border-border bg-secondary/20">
                  <TikTokCreatorEmbed />
                </div>
              )}
            </div>
          </section>

        </div>
      </ContentArea>
    </div>
  );
}
