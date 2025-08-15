import SideNav from '../components/SideNav';
import ContentArea from '../components/ContentArea';
import WaveBackground from '../components/WaveBackground';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex relative">
      <WaveBackground />
      <SideNav currentPage="about" />
      
      <ContentArea>
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-6">
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

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">∞</div>
              <div className="text-sm text-muted-foreground">Ideas & Counting</div>
            </div>
          </div>
        </div>
      </ContentArea>
    </div>
  );
}
