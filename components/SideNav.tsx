interface SideNavProps {
  currentPage: 'about' | 'work' | 'contact';
}

export default function SideNav({ currentPage }: SideNavProps) {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-6 flex flex-col">
      <div className="mb-12">
        <h1 className="text-2xl font-bold">Welcome.</h1>
      </div>
      
      <div className="flex flex-col space-y-6">
        <a 
          href="/" 
          className={`text-lg flex items-center transition-colors ${
            currentPage === 'about' 
              ? 'text-primary font-medium' 
              : 'hover:text-primary'
          }`}
        >
          <span 
            className={`w-2 h-2 rounded-full mr-3 ${
              currentPage === 'about' ? 'bg-primary' : 'bg-transparent'
            }`}
          ></span>
          About
        </a>
        
        <a 
          href="/work" 
          className={`text-lg flex items-center transition-colors ${
            currentPage === 'work' 
              ? 'text-primary font-medium' 
              : 'hover:text-primary'
          }`}
        >
          <span 
            className={`w-2 h-2 rounded-full mr-3 ${
              currentPage === 'work' ? 'bg-primary' : 'bg-transparent'
            }`}
          ></span>
          Work
        </a>
        
        <a 
          href="/contact" 
          className={`text-lg flex items-center transition-colors ${
            currentPage === 'contact' 
              ? 'text-primary font-medium' 
              : 'hover:text-primary'
          }`}
        >
          <span 
            className={`w-2 h-2 rounded-full mr-3 ${
              currentPage === 'contact' ? 'bg-primary' : 'bg-transparent'
            }`}
          ></span>
          Contact
        </a>
      </div>

      {/* Social Links in Sidebar */}
      <div className="mt-auto pt-8 border-t border-border">
        <h3 className="font-semibold mb-4 text-sm text-muted-foreground uppercase tracking-wider">
          Connect
        </h3>
        <div className="flex flex-col space-y-3">
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
    </nav>
  );
}
