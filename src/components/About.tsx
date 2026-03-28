import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const domains = [
    {
      title: 'Software & ML',
      items: ['Deep learning pipelines', 'Computer vision models', 'Data engineering', 'Bioinformatics tools'],
    },
    {
      title: 'Hardware & Fabrication',
      items: ['Cleanroom microfabrication', 'Biosensor design', 'Electrochemical systems', 'Point-of-care devices'],
    },
    {
      title: 'Science & Data',
      items: ['Multi-omics integration', 'Single-cell sequencing', 'Biomarker discovery', 'Statistical modeling'],
    },
  ];

  return (
    <section id="about" className="py-28 bg-card relative overflow-hidden noise-bg">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="rule-accent mb-6" />
          <h2 className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] mb-4 tracking-tight">
            Bridging the Gap
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-16">
            Most people specialize in software <em>or</em> hardware <em>or</em> science. 
            I work across all three — building ML systems that run on custom-fabricated hardware, 
            trained on data I helped generate in the lab. That's what makes the work I do different.
          </p>

          {/* Three domain columns */}
          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="group"
              >
                <h3 className="text-sm tracking-[0.2em] uppercase font-['JetBrains_Mono'] text-primary font-semibold mb-5">
                  {d.title}
                </h3>
                <ul className="space-y-3">
                  {d.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
