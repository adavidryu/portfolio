import SideNav from '../../components/SideNav';
import ContentArea from '../../components/ContentArea';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Bytez',
      technologies: ['SwiftUI', 'MapKit', 'CoreLocation', 'Supabase', 'PostgreSQL'],
      timeframe: '2026',
      highlight: 'Solves menu decision paralysis with dish-first reviews so people know what to order, not just where to eat.',
      githubUrl: 'https://github.com/adavidryu/bytez',
      imageUrl: '/bytez.png'
    },
    {
      title: 'Capital One Together',
      technologies: ['Next.js', 'TypeScript', 'Express', 'Supabase', 'Google Gemini'],
      timeframe: '2025',
      highlight: 'Connects savers and borrowers in a P2P marketplace, benefiting both at better-than-market interest rates.',
      githubUrl: 'https://github.com/adavidryu/c1-together',
      imageUrl: '/c1-together.png'
    },
    {
      title: 'Programmy',
      technologies: ['Next.js', 'TypeScript', 'Auth0', 'AWS Bedrock', 'AWS S3'],
      timeframe: '2025',
      highlight: 'Gives CS students exam practice problems that mimic the format seen in class and course material.',
      githubUrl: 'https://github.com/adavidryu/programmy.ai',
      imageUrl: '/programmy.png'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <SideNav currentPage="projects" />

      <ContentArea>
        <section className="space-y-12">
          <div className="section-wrap text-center md:text-left">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Passion projects and hackathon builds.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:mx-0">
              A sneak peek into problems I&apos;ve attacked, the innovative solutions, and my technical skills.
            </p>
          </div>

          <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                technologies={project.technologies}
                timeframe={project.timeframe}
                highlight={project.highlight}
                githubUrl={project.githubUrl}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>

          <div className="section-rule flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <h3 className="text-2xl font-semibold">Need help building something?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                I&apos;d love to hear your ideas and contribute to something great.
              </p>
            </div>
            <a href="/contact" className="action-link action-link--accent">
              Start a project conversation
            </a>
          </div>
        </section>
      </ContentArea>
    </div>
  );
}
