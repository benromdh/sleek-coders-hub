import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ChevronDown, FileText } from 'lucide-react';

const Hero = () => {
  const metrics = [
    { value: '10,000+', label: 'Data points per pipeline run' },
    { value: '10×', label: 'More targets detected simultaneously' },
    { value: '94%', label: 'F1-score on satellite imagery' },
    { value: '60%', label: 'Fewer prototype iterations needed' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <div className="space-y-6">
          <p className="font-mono text-sm tracking-widest uppercase text-primary">
            ML Engineer & Applied AI Researcher
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground">
            Ahmed Ben Romdhane
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            I build machine learning systems that turn complex scientific data into 
            <span className="text-foreground font-medium"> real-world diagnostic tools</span> — 
            from data pipelines to deployed models.
          </p>
        </div>

        {/* Key metrics bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {metrics.map((m, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">{m.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Location + affiliations */}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
          <span className="bg-card border border-border rounded-full px-4 py-1.5">📍 Aachen, Germany</span>
          <span className="bg-card border border-border rounded-full px-4 py-1.5">RWTH Aachen</span>
          <span className="bg-card border border-border rounded-full px-4 py-1.5">EPFL</span>
          <span className="bg-card border border-border rounded-full px-4 py-1.5">Harvard SEAS</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open('https://linkedin.com/in/ahmed-ben-romdhane-b70590185', '_blank')}>
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open('https://github.com/benromdh', '_blank')}>
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>

        {/* Scroll hint */}
        <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="animate-bounce text-muted-foreground hover:text-primary transition-colors mx-auto block">
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
