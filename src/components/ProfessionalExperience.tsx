import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProfessionalExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const tracks = [
    {
      track: 'Machine Learning & AI',
      roles: [
        {
          role: 'ML Research Engineer',
          org: 'RWTH Aachen University',
          period: '2023 – Present',
          what: 'Building end-to-end ML pipelines on single-cell data and deploying transformer-based computer vision models onto custom biosensor hardware.',
          tags: ['PyTorch', 'Transformers', 'CV', 'Docker'],
        },
        {
          role: 'ML Engineer',
          org: 'EPFL — Integrated Systems Lab',
          period: '2019 – 2020',
          what: 'Built simulation models predicting sensor behavior before fabrication, cutting prototype iterations by 60%.',
          tags: ['Python', 'MATLAB', 'Simulation'],
        },
      ],
    },
    {
      track: 'Data Science & Research',
      roles: [
        {
          role: 'Data Scientist',
          org: 'Harvard School of Engineering',
          period: '2021 – 2022',
          what: 'Integrated multi-omics datasets to identify key regulators of cardiac cell reprogramming. Results directly guided which experiments the biology team ran next.',
          tags: ['R', 'Python', 'Multi-Omics', 'RNA-seq'],
        },
        {
          role: 'R&D Data Scientist',
          org: 'Nestlé Research Center',
          period: '2021',
          what: 'Designed and validated precision measurement methods (LC-MS/MS) with full statistical QC for a $500M+ product line.',
          tags: ['LC-MS/MS', 'Statistical QC', 'Method Validation'],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-28 bg-background relative overflow-hidden noise-bg">
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="rule-accent mb-6" />
          <h2 className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight mb-3">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground">Grouped by expertise, not chronology</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {tracks.map((track, ti) => (
            <motion.div
              key={ti}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ti * 0.15 }}
            >
              <h3 className="text-sm tracking-[0.2em] uppercase font-['JetBrains_Mono'] text-primary font-semibold mb-6">
                {track.track}
              </h3>

              <div className="space-y-6">
                {track.roles.map((r, ri) => (
                  <div
                    key={ri}
                    className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="text-lg font-bold text-foreground font-['Space_Grotesk'] group-hover:text-primary transition-colors">{r.role}</h4>
                      <span className="text-xs text-muted-foreground font-['JetBrains_Mono'] shrink-0 ml-3">{r.period}</span>
                    </div>
                    <p className="text-sm text-primary/80 font-medium mb-3">{r.org}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.what}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {r.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="border-border text-muted-foreground hover:border-primary/40 hover:text-foreground text-xs font-['JetBrains_Mono']">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
