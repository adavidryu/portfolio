interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  imageUrl
}: ProjectCardProps) {
  return (
    <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      {/* Project Image/Thumbnail */}
      <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Project Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      {/* Project Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Project Links */}
      <div className="flex gap-3">
        {liveUrl && (
          <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-medium"
          >
            Live Demo
          </a>
        )}
        {githubUrl && (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-medium"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
