import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const metrics = [
    { value: '10,000+', label: 'Data points processed per run', icon: '📊' },
    { value: '10×', label: 'More targets detected at once', icon: '🎯' },
    { value: '94%', label: 'F1-score in CV competition', icon: '🏆' },
    { value: '60%', label: 'Fewer prototypes needed', icon: '⚡' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden noise-bg">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            ML Engineer & Applied AI Researcher
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black font-['Space_Grotesk'] tracking-tight">
            <span className="text-foreground">Ahmed</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-gradient">
              Ben Romdhane
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I build machine learning systems that turn complex scientific data into
            <span className="text-foreground font-semibold"> real-world diagnostic tools</span> — 
            from data pipelines to deployed models.
          </p>
        </motion.div>

        {/* Affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {['📍 Aachen, Germany', 'RWTH Aachen', 'Harvard SEAS', 'EPFL'].map((item, i) => (
            <span key={i} className="bg-card/80 backdrop-blur border border-border/50 rounded-full px-4 py-2 text-sm text-muted-foreground hover:border-primary/30 transition-colors">
              {item}
            </span>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {metrics.map((m, i) => (
            <div key={i} className="group bg-card/80 backdrop-blur border border-border/50 rounded-2xl p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl mb-2">{m.icon}</div>
              <div className="text-3xl sm:text-4xl font-black font-['Space_Grotesk'] bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1 leading-tight">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 h-12 px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/30 hover:bg-primary/5 h-12 px-8 transition-all duration-300"
            onClick={() => window.open('https://linkedin.com/in/ahmed-ben-romdhane-b70590185', '_blank')}>
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/30 hover:bg-primary/5 h-12 px-8 transition-all duration-300"
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
          className="text-muted-foreground hover:text-primary transition-colors mx-auto block mt-8"
        >
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
