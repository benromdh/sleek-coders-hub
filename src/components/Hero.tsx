import { Button } from '@/components/ui/button';
import { MapPin, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Profile Image Placeholder */}
        <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
          <span className="text-4xl font-bold text-white">AB</span>
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ahmed Ben Romdhane
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
            PhD Researcher in AI-Driven Biosensing & Diagnostics
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Building intelligent diagnostic platforms at the intersection of AI, bioinformatics, and biosensor technology
          </p>
        </div>

        {/* Institutions */}
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Aachen, Germany
          </span>
          <span>|</span>
          <span>RWTH Aachen University</span>
          <span>|</span>
          <span>EPFL</span>
          <span>|</span>
          <span>Harvard School of Engineering</span>
        </div>

        {/* Brief Bio */}
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          I'm a doctoral researcher developing next-generation diagnostic technologies by combining artificial intelligence, 
          bioinformatics, and cleanroom-based biosensor fabrication. My work spans the complete innovation pipeline—from 
          discovering disease biomarkers using machine learning on multi-omics data, to designing novel detection assays, 
          to building intelligent image processing systems that transform lab prototypes into clinical-grade devices.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://linkedin.com/in/ahmed-ben-romdhane-b70590185', '_blank')}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/benromdh', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
