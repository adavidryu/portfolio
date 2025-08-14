export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Welcome.</h1>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-primary font-medium">
              About
            </a>
            <a href="/work" className="hover:text-primary transition-colors">
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
            Hi, I'm Adam.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            I'm a passionate developer focused on creating meaningful digital experiences. 
            This is where you can share your story, background, and what drives you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/work" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center">
              View My Work
            </a>
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
              Download Resume
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Adam Ryu. All rights reserved.
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
