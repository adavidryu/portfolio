 'use client';

import { useState } from 'react';
import Image from 'next/image';
import SideNav from '../components/SideNav';
import ContentArea from '../components/ContentArea';

type ExperienceTab = 'professional' | 'leadership';

interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  summary: string;
  isMostRecent?: boolean;
}

const professionalExperiences: ExperienceItem[] = [
  {
    role: 'Software Engineer Intern',
    org: 'Toyota Financial Services',
    period: 'Current',
    summary: 'Incoming..',
    isMostRecent: true,
  },
  {
    role: 'Tech Fellow',
    org: 'CodePath',
    period: 'Jan 2026 - Present',
    summary:
      'Supporting 500+ students in technical interview prep across data structures, algorithms, and programming.',
  },
  {
    role: 'Software Engineer Intern',
    org: 'Texas A&M University',
    period: 'May 2025 - Aug 2025',
    summary:
      'Led a 4-person team to build a full-stack, market-ready fitness form-correction app using MediaPipe, an LLM, and modern frameworks.',
  },
  {
    role: 'Software Engineer Fellow',
    org: 'Headstarter',
    period: 'Jul 2024 - Sep 2024',
    summary:
      'Built 4 AI projects with modern tools through project-based learning, competitions, networking, and career development.',
  },
];

const leadershipExperiences: ExperienceItem[] = [
  {
    role: 'Workshops Officer',
    org: 'Aggie Coding Club (Texas A&M University)',
    period: 'Apr 2025 - Present',
    summary:
      'Coordinate outreach and hands-on coding workshops that bring new and experienced builders together through shared technical passion.',
    isMostRecent: true,
  },
  {
    role: 'Engineering Peer Mentor',
    org: 'Texas A&M University',
    period: 'Add dates',
    summary:
      'Mentored 30+ first-year engineering students through weekly sessions on academics, career planning, and campus support resources.',
  },
];

export default function Home() {
  const [experienceTab, setExperienceTab] = useState<ExperienceTab>('professional');
  const experiences = experienceTab === 'professional' ? professionalExperiences : leadershipExperiences;

  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <SideNav currentPage="about" />

      <ContentArea>
        <div className="space-y-8 md:space-y-10">
          <section className="section-wrap text-center md:text-left">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto] md:gap-8">
              <div>
                <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:mx-0 md:text-6xl">
                  Product-minded engineer.<br />Ambitious CS student.
                </h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg">
                  I design, build, and ship products that help people and produce results.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                  <a href="/projects" className="action-link">
                    View projects
                  </a>
                  <a href="/garage" className="action-link">
                    Explore my garage
                  </a>
                  <a href="/contact" className="action-link">
                    Start a conversation
                  </a>
                </div>
              </div>

              <div className="relative hidden md:flex md:items-center md:justify-end">
                <span className="absolute -left-24 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">my dog! -&gt;</span>
                <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-accent/60 bg-secondary shadow-sm">
                  <Image src="/dog.jpg" alt="My dog" fill sizes="96px" className="object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="section-rule">
            <div className="flex flex-wrap items-end justify-center gap-4 md:justify-between">
              <div>
                <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Experience timeline</h2>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              <button
                type="button"
                onClick={() => setExperienceTab('professional')}
                className={`action-link ${
                  experienceTab === 'professional' ? 'action-link--accent' : ''
                }`}
              >
                Professional
              </button>
              <button
                type="button"
                onClick={() => setExperienceTab('leadership')}
                className={`action-link ${
                  experienceTab === 'leadership' ? 'action-link--accent' : ''
                }`}
              >
                Leadership
              </button>
            </div>

            <div className="mt-5 space-y-1.5">
              {experiences.map((item, index) => (
                <div key={`${item.role}-${item.period}`}>
                  <article className="border border-border p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-medium">{item.role}</h3>
                      <div className="flex flex-wrap items-center gap-2">
                        {item.isMostRecent && (
                          <span className="status-chip">
                            Most recent
                          </span>
                        )}
                        <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{item.period}</p>
                      </div>
                    </div>
                    <p className="mt-2 inline-flex items-center border-l-2 border-accent/60 pl-2 text-sm font-semibold text-foreground">
                      {item.org}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                  </article>

                  {index < experiences.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <div className="flex flex-col items-center">
                        <div className="h-2.5 w-px bg-border" />
                        <div className="h-2.5 w-2.5 rounded-full border border-accent/60 bg-background" />
                        <div className="h-2.5 w-px bg-border" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="section-rule flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-2xl font-semibold">Got something for me?</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Share your thoughts or opportunities. I&apos;ll follow up quickly.
              </p>
            </div>
            <a href="/contact" className="action-link action-link--accent">
              Contact me
            </a>
          </section>
        </div>
      </ContentArea>
    </div>
  );
}
