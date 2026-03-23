import SideNav from '../components/SideNav';
import ContentArea from '../components/ContentArea';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <SideNav currentPage="about" />

      <ContentArea>
        <div className="space-y-12 md:space-y-14">
          <section className="section-wrap px-1 sm:px-2">
            <span className="eyebrow">Open to opportunities</span>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Product-minded engineer. Ambitious CS student.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I design and ship practical web experiences that prioritize clarity, speed, and measurable impact.
              Replace this paragraph with your final intro narrative when ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/projects" className="action-link bg-foreground text-background hover:bg-foreground/90">
                See projects
              </a>
              <a href="/garage" className="action-link">
                Explore garage lab
              </a>
              <a href="/contact" className="action-link">
                Start a conversation
              </a>
            </div>
          </section>

          <section className="section-rule">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="eyebrow">Selected experience</span>
                <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Recent roles</h2>
              </div>
              <a href="/projects" className="action-link">
                View build work
              </a>
            </div>

            <div className="mt-8 space-y-4">
              <article className="border border-border p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-medium">Software Development Intern</h3>
                  <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">May 2025 - Aug 2025</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Engineering Technology & Industrial Distribution at Texas A&M University
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Built Yotion.ai, a real-time yoga form-correction product from concept to commercial-ready delivery.
                </p>
              </article>

              <article className="border border-border p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-medium">Software Engineering Fellow</h3>
                  <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Jul 2024 - Sep 2024</p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Headstarter</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Built responsive web apps and APIs with measurable performance improvements.
                </p>
              </article>
            </div>
          </section>

          <section className="section-rule flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-2xl font-semibold">Got something for me?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your thoughts or opportunities. I&apos;ll follow up quickly.
              </p>
            </div>
            <a href="/contact" className="action-link bg-accent text-accent-foreground hover:bg-accent/90">
              Contact me
            </a>
          </section>
        </div>
      </ContentArea>
    </div>
  );
}
