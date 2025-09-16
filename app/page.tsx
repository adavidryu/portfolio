import SideNav from '../components/SideNav';
import ContentArea from '../components/ContentArea';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <SideNav currentPage="about" />
      
      <ContentArea>
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
              Available for opportunities
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Hi, I'm Adam.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              I'm a passionate student and developer focused on creating meaningful digital experiences. 
              My goal is to change and improve lives, with tech.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="/projects" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View My Projects
            </a>
            
            <button className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors">
              Download Resume
            </button>
          </div>

          {/* Work Experience */}
          <div className="pt-8">
            <h3 className="text-xl font-semibold mb-8 text-foreground">Experience</h3>
            
            {/* Current/Most Recent Position - Spotlight */}
            <div className="mb-10 p-6 border border-border rounded-lg bg-muted/30">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    Software Development Intern
                  </h4>
                  <p className="text-primary font-medium mb-2">Engineering Technology & Industrial Distribution at Texas A&M University</p>
                  <p className="text-sm text-muted-foreground">
                    College Station, TX • Full-time
                  </p>
                </div>
                <div className="mt-2 lg:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    Most Recent Position
                  </span>
                  <p className="text-sm text-muted-foreground mt-1 lg:text-right">
                    May 2025 - August 2025
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                Built Yotion.ai, a yoga form-correction app that helps people improve their exercise accuracy in real time. 
                The platform combines computer vision, beautiful user experience, and AI feedback to deliver performance tracking and personalized insights. 
                I led a team through the full development cycle, bringing the app from concept to commercial readiness.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">React</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">TypeScript</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Supabase / PostgreSQL</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">MediaPipe</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Tailwind</span>
              </div>
            </div>

            {/* Previous Positions Timeline */}
            <div className="space-y-6">
              {/* Position 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <div className="w-px h-full bg-border mt-2"></div>
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">Software Engineering Fellow</h4>
                      <p className="text-sm text-primary">Headstarter</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 sm:mt-0">
                      Jul 2024 - Sep 2024
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Built responsive web applications and RESTful APIs. Improved application 
                    performance by 40% through code optimization and caching strategies.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Next.js</span>
                    <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded">Firebase</span>
                    <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded">Material UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentArea>
    </div>
  );
}
