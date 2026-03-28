import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden noise-bg">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let's Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Open to ML engineering roles, research collaborations, and consulting on AI-powered data systems.
            </p>
          </div>

          {/* Email CTA */}
          <div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 h-14 px-10 text-lg" asChild>
              <a href="mailto:abenromdh@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                abenromdh@gmail.com
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/30 hover:bg-primary/5 h-12 px-6 transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/ahmed-ben-romdhane-b70590185', '_blank')}>
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/30 hover:bg-primary/5 h-12 px-6 transition-all duration-300"
              onClick={() => window.open('https://github.com/benromdh', '_blank')}>
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-background border border-border/50 rounded-2xl px-6 py-4 shadow-lg"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
            </span>
            <div className="text-left">
              <p className="font-semibold text-foreground text-sm">Open to Opportunities</p>
              <p className="text-xs text-muted-foreground">ML Engineering · Research · Consulting</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
