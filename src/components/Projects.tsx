import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, FlaskConical, LineChart, Globe, Microscope } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const projects = [
    {
      title: 'AI-Powered Multiplexed Biosensor Platform',
      what: 'End-to-end system combining ML biomarker discovery, cleanroom-fabricated sensors, and real-time computer vision analysis.',
      impact: '10+ simultaneous targets (vs 1–3 conventional), analysis in seconds instead of hours',
      icon: Cpu,
      tags: ['PyTorch', 'Transformers', 'Computer Vision', 'Single-cell RNA-seq'],
      status: 'Ongoing PhD Research',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cardiac Reprogramming Multi-Omics',
      what: 'Integrated transcriptomic and proteomic data to identify key regulators of heart cell reprogramming.',
      impact: 'Ranked target shortlist directly guided lab experiments, cutting validation cycles',
      icon: FlaskConical,
      tags: ['R', 'Python', 'RNA-seq', 'Proteomics'],
      status: 'Published Research',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Personalized Cancer Vaccine Platform',
      what: 'Software ranking vaccine targets from patient genomic data, plus a manufacturing pipeline.',
      impact: '83% improvement in manufacturing yield metric',
      icon: Microscope,
      tags: ['Python', 'Bioinformatics', 'Software Development'],
      status: 'Gold Medal + Finalist (iGEM)',
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'Biosensor Simulation Framework',
      what: 'Finite element models for rapid virtual prototyping of point-of-care devices.',
      impact: '60% fewer physical prototyping iterations, predicted 5× faster detection',
      icon: LineChart,
      tags: ['Python', 'MATLAB', 'COMSOL'],
      status: 'Gold Medal at SensUs',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'CNN for Satellite Road Segmentation',
      what: 'Deep learning model for automated infrastructure mapping from satellite imagery.',
      impact: '94% F1-score, top 3 among 80+ teams',
      icon: Globe,
      tags: ['PyTorch', 'CNNs', 'Semantic Segmentation'],
      status: '3rd Place Competition',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden noise-bg">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-3">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Key Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">Selected work with measurable outcomes</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group bg-background border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`shrink-0 p-3 rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <p.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors font-['Space_Grotesk']">{p.title}</h3>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/5 border border-primary/20 px-2 py-0.5 rounded-full">{p.status}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{p.what}</p>

              <div className="bg-accent/5 border border-accent/20 rounded-xl px-4 py-3 mb-4">
                <span className="font-bold text-accent text-sm">Impact: </span>
                <span className="text-foreground text-sm">{p.impact}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag, j) => (
                  <Badge key={j} variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-secondary text-xs">
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
