import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-28 bg-card relative overflow-hidden noise-bg">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div>
            <div className="rule-accent mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to ML engineering roles, research collaborations, and consulting on AI-powered diagnostic systems.
            </p>
          </div>

          <div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 h-14 px-10 text-lg" asChild>
              <a href="mailto:abenromdh@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                abenromdh@gmail.com
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="border-border hover:border-primary/40 hover:bg-primary/5 h-12 px-6 transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/ahmed-ben-romdhane-b70590185', '_blank')}>
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:border-primary/40 hover:bg-primary/5 h-12 px-6 transition-all duration-300"
              onClick={() => window.open('https://github.com/benromdh', '_blank')}>
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 border border-border rounded-full px-5 py-3"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
