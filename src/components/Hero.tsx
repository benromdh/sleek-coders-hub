import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block text-gradient">Alex Johnson</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Full-Stack Developer crafting digital experiences with clean code and modern design
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-smooth text-primary-foreground"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary transition-smooth"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent hover:shadow-accent transition-smooth"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent hover:shadow-accent transition-smooth"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-accent hover:shadow-accent transition-smooth"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="animate-bounce"
            onClick={() => scrollToSection('#about')}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;