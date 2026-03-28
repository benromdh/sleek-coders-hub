import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, TrendingUp } from 'lucide-react';

const ProfessionalExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const experiences = [
    {
      role: 'ML Research Engineer',
      focus: 'Data Pipelines & Computer Vision Deployment',
      org: 'RWTH Aachen University',
      location: 'Aachen, Germany',
      period: 'Aug 2023 – Present',
      highlights: [
        'Built end-to-end ML pipelines on single-cell sequencing data (10,000+ cells/run) — automated QC, normalization, feature selection, and statistical analysis',
        'Deployed transformer-based CV models onto biosensor hardware, pushing detection from 1–3 to 10+ simultaneous targets',
        'Cut analysis time from hours to seconds with real-time AI-powered image processing',
      ],
      tags: ['PyTorch', 'Transformers', 'Computer Vision', 'Python', 'Docker'],
      metric: '10× more targets detected',
      metricIcon: '🎯',
      current: true,
      gradient: 'from-primary to-blue-600',
    },
    {
      role: 'Data Scientist',
      focus: 'Multi-Omics Integration & Predictive Modeling',
      org: 'Harvard School of Engineering',
      location: 'Boston, MA',
      period: 'Nov 2021 – May 2022',
      highlights: [
        'Integrated transcriptomics and proteomics datasets (hundreds of features) to identify regulatory drivers of cell reprogramming',
        'Produced a ranked target shortlist that directly determined which experiments the biology team ran next',
      ],
      tags: ['R', 'Python', 'Statistical Modeling', 'Multi-Omics'],
      metric: 'Directly guided lab decisions',
      metricIcon: '🧬',
      current: false,
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      role: 'R&D Data Scientist',
      focus: 'Analytical Method Development',
      org: 'Nestlé Research Center',
      location: 'Lausanne, Switzerland',
      period: 'Mar 2021 – Aug 2021',
      highlights: [
        'Designed and validated precision measurement methods (LC-MS/MS) with full statistical QC from scratch',
        'Results fed directly into reformulation decisions for a $500M+ product line',
      ],
      tags: ['LC-MS/MS', 'Statistical QC', 'Method Validation'],
      metric: '$500M+ product impact',
      metricIcon: '💰',
      current: false,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      role: 'ML Engineer',
      focus: 'Simulation & Predictive Modeling',
      org: 'EPFL, Integrated Systems Laboratory',
      location: 'Lausanne, Switzerland',
      period: 'Dec 2019 – Aug 2020',
      highlights: [
        'Built Python/MATLAB simulation models predicting sensor behavior before fabrication',
        'Cut prototype iterations by 60% and directly informed component selection',
      ],
      tags: ['Python', 'MATLAB', 'Simulation', 'Predictive Modeling'],
      metric: '60% fewer prototypes',
      metricIcon: '⚡',
      current: false,
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden noise-bg">
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-3">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">Where I've applied ML to solve real problems</p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group bg-card border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Icon */}
                <div className={`shrink-0 p-4 rounded-2xl bg-gradient-to-br ${exp.gradient} shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <Building2 className="h-7 w-7 text-white" />
                </div>

                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground font-['Space_Grotesk']">{exp.role}</h3>
                      {exp.current && (
                        <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-semibold">{exp.focus}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.org} · {exp.location} · {exp.period}</p>
                  </div>

                  {/* Impact callout */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/15 rounded-xl px-4 py-2.5">
                    <span className="text-lg">{exp.metricIcon}</span>
                    <span className="font-bold text-foreground">{exp.metric}</span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <TrendingUp className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-secondary font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
