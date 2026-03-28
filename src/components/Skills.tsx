import { Badge } from '@/components/ui/badge';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Brain, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const categories = [
    {
      title: 'AI / Machine Learning',
      icon: Brain,
      skills: ['PyTorch', 'TensorFlow', 'Transformers', 'Foundation Models', 'Computer Vision', 'Scikit-learn', 'CNNs'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Programming & Tools',
      icon: Code2,
      skills: ['Python', 'R', 'MATLAB', 'SQL', 'Git', 'Linux', 'Docker'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Bioconductor', 'Seurat', 'DESeq2', 'Statistical Modeling'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Domain Expertise',
      icon: Cpu,
      skills: ['Biomarker Discovery', 'Multi-Omics Integration', 'Single-cell RNA-seq', 'Biosensor Systems', 'LC-MS/MS', 'Image-based Assays'],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden noise-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-3">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">Tools and technologies I work with daily</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.gradient} shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <cat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-['Space_Grotesk']">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <Badge key={j} variant="outline" className="border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 font-medium">
                    {skill}
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

export default Skills;
