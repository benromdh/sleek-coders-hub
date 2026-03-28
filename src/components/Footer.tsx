import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ahmed Ben Romdhane
          </p>
          <div className="flex gap-4">
            <a href="mailto:abenromdh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-4 w-4" /></a>
            <a href="https://linkedin.com/in/ahmed-ben-romdhane-b70590185" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="https://github.com/benromdh" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
