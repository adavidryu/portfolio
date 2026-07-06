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
    period: 'Mar 2026 – Present',
    summary:
      'Insurance paperwork piles up fast — and every page has to be read carefully, checked against rules, and handled the right way. At Toyota Financial Services I\'m helping build a GenAI platform that pulls meaning from documents at scale, surfaces what needs a closer look, and runs compliance checks against the deterministic rules the business has to follow. It\'s full-stack work on AWS, close partnership with the people who actually do this job today, and a bet that automation should make reviewers sharper — not replace their judgment.',
    isMostRecent: true,
  },
  {
    role: 'Tech Fellow',
    org: 'CodePath',
    period: 'Jan 2026 – Apr 2026',
    summary:
      'Interview season is stressful — I know because I was in the thick of it not long ago. At CodePath, I came back as a Tech Fellow to help 500+ students through TIP101, a 10-week crash course in the patterns that actually show up in technical interviews. Weekly labs, whiteboard walkthroughs, and a lot of "you\'re closer than you think" moments along the way.',
  },
  {
    role: 'Software Engineer Intern',
    org: 'Texas A&M University',
    period: 'May 2025 – Aug 2025',
    summary:
      'Not everyone can walk into a studio — cost, schedule, mobility, confidence, a dozen reasons. Our team built an AI yoga coach for people who still deserve careful, personal guidance at home: real-time form feedback tuned to the individual, not a one-size demo on a screen. I led a four-person team from idea to commercial-ready MVP, blending computer vision, a polished web experience, and coaching that actually feels like someone watching out for you.',
  },
  {
    role: 'Software Engineer Fellow',
    org: 'Headstarter',
    period: 'Jul 2024 – Sep 2024',
    summary:
      'Headstarter was a summer of building at hackathon speed — one project after another, each with a deadline, a demo, and a story to tell. I shipped multiple AI-powered apps on modern tooling, recorded walkthroughs explaining what I built and why, and got comfortable talking through tradeoffs out loud. Just as valuable as the code: feedback from peers and mentors, late-night collaboration, and the rhythm of ship → present → iterate that real product work runs on.',
  },
];

const leadershipExperiences: ExperienceItem[] = [
  {
    role: 'Workshops Officer',
    org: 'Aggie Coding Club (Texas A&M University)',
    period: 'Apr 2025 – Present',
    summary:
      'The best way to get better at building is to build alongside people who are just as excited about it. As Workshops Officer for Aggie Coding Club, I plan and run hands-on sessions that meet students where they are — whether it\'s their first line of code or their tenth side project.',
    isMostRecent: true,
  },
  {
    role: 'Engineering Peer Mentor',
    org: 'Texas A&M University',
    period: 'Aug 2023 – May 2024',
    summary:
      'Starting engineering school is a lot at once — new campus, harder classes, figuring out what you even want to do. I spent a year as a peer mentor for 30+ first-years, meeting weekly to talk through coursework, career paths, and the stuff nobody puts in the syllabus.',
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
                <h1 className="page-title mx-auto max-w-4xl md:mx-0">
                  Product-minded engineer.<br />Driven CS student.
                </h1>
                <p className="section-lead mx-auto mt-5 max-w-2xl md:mx-0">
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
                <div className="relative h-36 w-36 overflow-hidden border-2 border-accent bg-secondary">
                  <Image src="/dog.jpg" alt="My dog" fill sizes="96px" className="object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="section-rule">
            <div className="flex flex-wrap items-end justify-center gap-4 md:justify-between">
              <div>
                <h2 className="section-title mt-4">Experience timeline</h2>
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
                  <article className="experience-card">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl md:text-2xl">{item.role}</h3>
                        <p className="mt-2 text-base font-medium text-foreground/58 md:text-lg">{item.org}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        {item.isMostRecent && (
                          <span className="status-chip">
                            Most recent
                          </span>
                        )}
                        <p className="meta-label">{item.period}</p>
                      </div>
                    </div>
                    <p className="body-copy mt-5">{item.summary}</p>
                  </article>

                  {index < experiences.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="flex flex-col items-center">
                        <div className="h-3 w-px bg-foreground/20" />
                        <div className="h-2.5 w-2.5 border-2 border-accent bg-background" />
                        <div className="h-3 w-px bg-foreground/20" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="section-rule flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="section-title text-2xl md:text-3xl">Got something for me?</p>
              <p className="body-copy mt-3">
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
