export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="/work" className="text-primary font-medium">
              Work
            </a>
            <a href="/contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
            Here's a collection of projects I've worked on. Each one represents 
            a unique challenge and learning experience.
          </p>
          
          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Card Template */}
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Project Title</h3>
              <p className="text-muted-foreground mb-4">
                Brief description of the project and technologies used.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded">
                  React
                </span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded">
                  TypeScript
                </span>
              </div>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline"
                >
                  Live Demo
                </a>
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Duplicate cards for demo */}
            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Another Project</h3>
              <p className="text-muted-foreground mb-4">
                Description of another project showcasing different skills.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline"
                >
                  Live Demo
                </a>
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Third Project</h3>
              <p className="text-muted-foreground mb-4">
                Yet another project demonstrating various capabilities.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded">
                  Vue.js
                </span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-sm rounded">
                  Node.js
                </span>
              </div>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline"
                >
                  Live Demo
                </a>
                <a 
                  href="#" 
                  className="text-sm text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
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
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              ©  Your Name. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://github.com/adavidryu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/adamryu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
