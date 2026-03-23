import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  technologies?: string[];
  timeframe?: string;
  highlight?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  technologies,
  timeframe,
  highlight,
  githubUrl,
  imageUrl
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col border-t border-border pt-5">
      <div className="relative mb-4 aspect-video overflow-hidden border border-border bg-muted">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        )}
      </div>

      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {timeframe && (
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            {timeframe}
          </span>
        )}
      </div>

      {highlight && (
        <p className="mb-4 border-l-2 border-accent pl-3 text-sm font-medium text-foreground">
          {highlight}
        </p>
      )}

      {technologies && technologies.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="border border-border/80 bg-secondary/60 px-2 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-link"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            Repo
          </a>
        )}
      </div>
    </article>
  );
}
