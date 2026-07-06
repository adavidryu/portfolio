'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SideNavProps {
  currentPage: 'about' | 'projects' | 'garage' | 'contact';
}

export default function SideNav({ currentPage }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About', href: '/' },
    { id: 'projects', label: 'Projects', href: '/projects' },
    { id: 'garage', label: 'Garage', href: '/garage' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm lg:hidden">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="text-base font-bold uppercase tracking-[0.12em]">
            Adam Ryu
          </Link>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 border-2 border-accent bg-accent px-4 py-2.5 text-sm font-bold uppercase tracking-[0.1em] text-accent-foreground"
          >
            Menu
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/45 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed inset-x-0 top-16 z-50 border-b border-border bg-background lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="mx-auto grid w-full max-w-6xl gap-1 px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`border-2 px-4 py-3 text-base font-semibold transition-colors ${
                currentPage === item.id
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-border hover:border-foreground/40 hover:bg-secondary'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 border-r border-border bg-sidebar lg:flex lg:flex-col">
        <div className="border-b border-sidebar-border px-6 py-8">
          <Link href="/" className="block">
            <p className="text-base font-bold uppercase tracking-[0.28em] text-sidebar-foreground">Adam Ryu</p>
            <p className="mt-3 text-sm font-medium leading-snug text-foreground/72">
              <span className="block whitespace-nowrap">SWE @ Toyota Financial Services</span>
              <span className="mt-1 block">CS @ Texas A&amp;M University</span>
            </p>
          </Link>
        </div>

        <div className="flex-1 px-4 py-8">
          <nav className="space-y-1.5">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`block w-full border-2 px-5 py-2 text-sm font-bold uppercase tracking-[0.08em] transition-colors ${
                  currentPage === item.id
                    ? 'border-accent bg-accent text-accent-foreground'
                    : 'border-sidebar-border text-foreground/60 hover:border-foreground/30 hover:bg-sidebar-accent hover:text-sidebar-foreground'
                }`}
              >
                {item.label.toLowerCase()}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-sidebar-border px-6 py-6">
          <p className="mb-4 meta-label">Connect</p>
          <div className="mb-4 flex gap-3">
            <a
              href="https://github.com/adavidryu"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-sidebar-border p-2.5 text-foreground/60 transition-colors hover:border-foreground/30 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/adamryu/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-sidebar-border p-2.5 text-foreground/60 transition-colors hover:border-foreground/30 hover:bg-sidebar-accent hover:text-sidebar-foreground"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
