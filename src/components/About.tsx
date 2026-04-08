import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import cleanroomImg from '@/assets/cleanroom.jpg';
import mlSoftwareImg from '@/assets/ml-software.jpg';
import bioScienceImg from '@/assets/bio-science.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const domains = [
    {
      title: 'Software & ML',
      image: mlSoftwareImg,
      items: ['Deep learning pipelines', 'Computer vision models', 'Data engineering', 'Bioinformatics tools'],
    },
    {
      title: 'Hardware & Fabrication',
      image: cleanroomImg,
      items: ['Cleanroom microfabrication', 'Biosensor design', 'Electrochemical systems', 'Point-of-care devices'],
    },
    {
      title: 'Bio & Data Science',
      image: bioScienceImg,
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
            I work at the interface of software, physical sciences, and data — designing ML pipelines, 
            developing biosensors in the cleanroom, and turning complex datasets into actionable insight. 
            It's rare to find someone fluent across all three. That's what sets me apart.
          </p>

          {/* Three domain cards with visuals */}
          <div className="grid md:grid-cols-3 gap-6">
            {domains.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={d.image} 
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-sm tracking-[0.2em] uppercase font-['JetBrains_Mono'] text-primary font-semibold">
                    {d.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="p-5 pt-3 bg-card">
                  <ul className="space-y-2.5">
                    {d.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
