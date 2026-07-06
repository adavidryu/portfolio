import SideNav from '../../components/SideNav';
import ContentArea from '../../components/ContentArea';
import TikTokVideoGrid from '../../components/TikTokVideoGrid';
import { getTikTokVideos } from '../../lib/tiktok';

const stats = [
  { label: 'Followers', value: '6.4K' },
  { label: 'Total likes', value: '195K+' },
  { label: 'Views (7-video streak)', value: '1.7M+' },
];

export default function Garage() {
  const videos = getTikTokVideos(8);

  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <SideNav currentPage="garage" />

      <ContentArea>
        <div className="space-y-10 md:space-y-12">

          {/* ── Hero ─────────────────────────────────────────── */}
          <section className="section-wrap text-center md:text-left">
            <h1 className="page-title mx-auto max-w-4xl md:mx-0">
              Wrenching on my Q50&nbsp;&amp;&nbsp;ZX&#8209;6R.
            </h1>
            <p className="section-lead mx-auto mt-5 max-w-3xl md:mx-0">
              I handle my own maintenance, mods, and repairs — then turn it all into instructional short-form content
              to help other DIYers at home. Always learning.
            </p>

            {/* Stats row */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
              {stats.map((s) => (
                <div key={s.label} className="stat-block">
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="meta-label mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Video section ────────────────────────────────── */}
          <section className="section-rule">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">@q50ryu on TikTok</p>
                <h2 className="section-title mt-3">Latest videos</h2>
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
              <TikTokVideoGrid videos={videos} />
            </div>
          </section>

        </div>
      </ContentArea>
    </div>
  );
}
