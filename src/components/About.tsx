import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Cpu, Target } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pillars = [
    {
      icon: Layers,
      title: 'Data Pipelines',
      desc: 'Automated processing of 10,000+ data points per run — from raw measurements to actionable insights.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cpu,
      title: 'Model Deployment',
      desc: 'Computer vision models running on custom hardware, turning hours of manual analysis into seconds.',
      gradient: 'from-primary to-blue-600',
    },
    {
      icon: Target,
      title: 'Research Impact',
      desc: 'ML outputs that directly shaped which experiments teams ran next, cutting validation cycles.',
      gradient: 'from-accent to-emerald-600',
    },
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden noise-bg">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">What I Do</span>
          </h2>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-semibold">machine learning engineer</span> who 
                takes messy, high-dimensional scientific data and builds end-to-end systems that deliver 
                <span className="text-foreground font-semibold"> real results</span>.
              </p>
              <p>
                I've worked across <span className="text-primary font-semibold">RWTH Aachen</span>, 
                <span className="text-primary font-semibold"> Harvard</span>, 
                <span className="text-primary font-semibold"> EPFL</span>, and 
                <span className="text-primary font-semibold"> Nestlé R&D</span> — 
                each time shipping ML solutions that directly shaped what teams built next.
              </p>
            </div>

            <div className="lg:col-span-3 grid gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="group flex gap-4 p-5 bg-background border border-border/50 rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg`}>
                    <p.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
