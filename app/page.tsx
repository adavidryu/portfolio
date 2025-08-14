import SideNav from '../components/SideNav';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <SideNav currentPage="about" />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-12">
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
    </div>
  );
}
