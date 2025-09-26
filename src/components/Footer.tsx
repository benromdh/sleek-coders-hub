import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Portfolio</h3>
            <p className="text-muted-foreground">
              Building digital experiences with passion and precision. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-muted-foreground hover:text-accent transition-smooth text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:alex@example.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-smooth"
              >
                <Mail className="h-4 w-4" />
                <span>alex@example.com</span>
              </a>
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-accent transition-smooth"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-accent transition-smooth"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-accent transition-smooth"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>© {currentYear} Alex Johnson. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;