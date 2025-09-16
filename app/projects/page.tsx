import SideNav from '../../components/SideNav';
import ContentArea from '../../components/ContentArea';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  // Sample project data - you can move this to a separate file later
  const projects = [
    {
      title: "Programmy",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features a clean design, smooth animations, and optimized performance.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Amazon Bedrock", "AWS S3", "Auth0"],
      liveUrl: "https://your-portfolio.com",
      githubUrl: "https://github.com/adavidryu/portfolio"
    },
    {
      title: "Mr. Calendar",
      description: "Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern web technologies.",
      technologies: ["JavaScript", "Google Calendar API", "Discord API"],
      liveUrl: "https://your-ecommerce.com",
      githubUrl: "https://github.com/adavidryu/ecommerce"
    },
    {
      title: "H.AI.R",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      liveUrl: "https://your-taskapp.com",
      githubUrl: "https://github.com/adavidryu/taskapp"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <SideNav currentPage="projects" />
      
      <ContentArea>
        <section className="max-w-4xl">
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
              Constantly building
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              My Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
              Here's a collection of projects I've worked on. Each one represents 
              a unique challenge and learning experience.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <a 
              href="/" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </ContentArea>
    </div>
  );
}
