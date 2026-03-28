import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import heroVisual from '@/assets/hero-visual.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <img 
          src={heroVisual} 
          alt="Convergence of hardware, biology, and data science" 
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      <div className="relative z-10 min-h-screen flex items-end pb-20 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full space-y-8">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rule-accent mb-6" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-['JetBrains_Mono']">
              Software · Hardware · Machine Learning
            </p>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black font-['Space_Grotesk'] tracking-tighter leading-[0.9]">
              <span className="text-foreground">Ahmed</span>
              <br />
              <span className="text-primary">Ben Romdhane</span>
            </h1>
          </motion.div>

          {/* Positioning statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I build intelligent systems at the intersection of{' '}
            <span className="text-foreground font-semibold">machine learning</span>,{' '}
            <span className="text-foreground font-semibold">microfabrication</span>, and{' '}
            <span className="text-foreground font-semibold">biomedical science</span> — 
            turning complex data into deployed, real-world diagnostic tools.
          </motion.p>

          {/* Affiliations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-sm text-muted-foreground font-['JetBrains_Mono']"
          >
            {['RWTH Aachen', 'Harvard SEAS', 'EPFL', 'Nestlé R&D'].map((item, i) => (
              <span key={i} className="hover:text-foreground transition-colors cursor-default">
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 h-12 px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:border-primary/40 hover:bg-primary/5 h-12 px-8 transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/ahmed-ben-romdhane-b70590185', '_blank')}>
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:border-primary/40 hover:bg-primary/5 h-12 px-8 transition-all duration-300"
              onClick={() => window.open('https://github.com/benromdh', '_blank')}>
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </motion.div>

          {/* Scroll */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-muted-foreground hover:text-primary transition-colors block mt-4"
          >
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
