import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-foreground mb-1">Ahmed Ben Romdhane</h3>
            <p className="text-sm text-muted-foreground">ML Engineer & Applied AI Researcher</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <button key={l.id} onClick={() => scrollToSection(l.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.name}
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <a href="mailto:abenromdh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
            <a href="https://linkedin.com/in/ahmed-ben-romdhane-b70590185" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="https://github.com/benromdh" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ahmed Ben Romdhane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
