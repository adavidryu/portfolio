'use client';

import { useState } from 'react';
import SideNav from '../../components/SideNav';
import ContentArea from '../../components/ContentArea';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setSubmitError('Message could not be sent. Please retry or email me directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Network issue detected. Please retry or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <SideNav currentPage="contact" />

      <ContentArea>
        <section className="space-y-12">
          <div className="section-wrap text-center md:text-left">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Let&apos;s get in touch.</h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:mx-0">
              Share project ideas, job opportunities, or anything else! I&apos;ll reply ASAP.
            </p>
          </div>

          <div className="section-rule grid gap-8 lg:grid-cols-[0.9fr_1.7fr]">
            <aside>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Overview</p>
              <div className="mt-5 space-y-4 text-sm">
                <div className="border-l-2 border-border pl-3">
                  <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Email</p>
                  <a href="mailto:adamryu.work@gmail.com" className="mt-1 inline-block font-medium hover:underline">
                    adamryu.work@gmail.com
                  </a>
                </div>
                <div className="border-l-2 border-border pl-3">
                  <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Location</p>
                  <p className="mt-1 font-medium">College Station, TX</p>
                </div>
                <div className="border-l-2 border-border pl-3">
                  <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">Response time</p>
                  <p className="mt-1 font-medium">Within 24 hours</p>
                </div>
              </div>
            </aside>

            <div className="pl-0 sm:pl-6 lg:border-l lg:border-border lg:pl-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border border-input bg-background px-3 py-3 text-sm outline-none ring-0 transition-colors focus:border-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-input bg-background px-3 py-3 text-sm outline-none ring-0 transition-colors focus:border-foreground"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="_subject_custom"
                    required
                    className="w-full border border-input bg-background px-3 py-3 text-sm outline-none ring-0 transition-colors focus:border-foreground"
                    placeholder="What are you working on?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full resize-none border border-input bg-background px-3 py-3 text-sm outline-none ring-0 transition-colors focus:border-foreground"
                    placeholder="Briefly describe goals, constraints, and timeline."
                  />
                </div>

                {submitError && (
                  <p className="border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center border border-accent/45 bg-accent/15 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/25 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z" />
                      </svg>
                      Sending
                    </span>
                  ) : (
                    'Send message'
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="section-rule flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Prefer social channels?</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://github.com/adavidryu" target="_blank" rel="noopener noreferrer" className="action-link">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/adamryu/" target="_blank" rel="noopener noreferrer" className="action-link">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </ContentArea>

      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4">
          <div className="w-full max-w-md border border-border bg-background p-8">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-border bg-secondary">
                <svg className="h-7 w-7 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Message sent</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Thanks for reaching out. I will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="action-link action-link--accent"
              >
                Back to form
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
