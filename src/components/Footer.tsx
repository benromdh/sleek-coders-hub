import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ahmed Ben Romdhane
            </h3>
            <p className="text-muted-foreground">
              PhD Researcher in AI-Driven Biosensing & Diagnostics
            </p>
            <p className="text-sm text-muted-foreground">
              Building intelligent diagnostic platforms at the intersection of AI and biotechnology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Experience', id: 'experience' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:abenromdh@gmail.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>abenromdh@gmail.com</span>
              </a>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors"
                  onClick={() => window.open('https://github.com/ahmed-ben-romdhane', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors"
                  onClick={() => window.open('https://linkedin.com/in/ahmed-ben-romdhane-b70590185', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Ahmed Ben Romdhane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
