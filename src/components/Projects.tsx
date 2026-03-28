import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const projects = [
    {
      title: 'AI-Powered Multiplexed Biosensor',
      subtitle: 'PhD Research · RWTH Aachen',
      description: 'Full-stack system combining ML-driven biomarker discovery, cleanroom-fabricated sensors, and real-time computer vision — detecting 10+ targets simultaneously where conventional methods handle 1–3.',
      tags: ['PyTorch', 'Transformers', 'CV', 'Microfabrication', 'scRNA-seq'],
      featured: true,
    },
    {
      title: 'Cardiac Reprogramming Multi-Omics',
      subtitle: 'Harvard SEAS',
      description: 'Integrated transcriptomics and proteomics data to surface key regulators of heart cell reprogramming, producing a ranked target list that directly determined the next round of lab experiments.',
      tags: ['R', 'Python', 'RNA-seq', 'Proteomics'],
    },
    {
      title: 'Personalized Cancer Vaccine Platform',
      subtitle: 'iGEM · Gold Medal + Finalist',
      description: 'Software ranking vaccine targets from patient genomic data, paired with a manufacturing pipeline that improved a key yield metric by 83%. Nominated Best Therapeutics & Software among 300+ teams.',
      tags: ['Python', 'Bioinformatics', 'Synthetic Biology'],
    },
    {
      title: 'Biosensor Simulation Framework',
      subtitle: 'EPFL · SensUs Gold Medal',
      description: 'Finite element models for rapid virtual prototyping of point-of-care devices, reducing physical prototyping iterations by 60% and predicting 5× faster detection times.',
      tags: ['Python', 'MATLAB', 'COMSOL', 'Electrochemistry'],
    },
    {
      title: 'Satellite Road Segmentation',
      subtitle: '3rd / 80+ Teams · AIcrowd',
      description: 'Deep learning model for automated road segmentation from satellite imagery, achieving 94% F1-score in a competitive challenge.',
      tags: ['PyTorch', 'CNNs', 'Semantic Segmentation'],
    },
  ];

  return (
    <section id="projects" className="py-28 bg-card relative overflow-hidden noise-bg">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="rule-accent mb-6" />
          <h2 className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight mb-3">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground">Projects where software meets science meets hardware</p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group bg-background border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ${p.featured ? 'border-l-2 border-l-primary' : ''}`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-['Space_Grotesk']">
                    {p.title}
                  </h3>
                  <p className="text-sm text-primary/70 font-medium font-['JetBrains_Mono'] mt-0.5">{p.subtitle}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 opacity-0 group-hover:opacity-100" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-3xl">{p.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag, j) => (
                  <Badge key={j} variant="outline" className="border-border text-muted-foreground hover:border-primary/40 hover:text-foreground text-xs font-['JetBrains_Mono']">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
