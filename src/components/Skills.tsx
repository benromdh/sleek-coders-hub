import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const categories = [
    {
      title: 'ML & AI',
      skills: ['PyTorch', 'TensorFlow', 'Transformers', 'Computer Vision', 'CNNs', 'Scikit-learn', 'Foundation Models'],
    },
    {
      title: 'Programming',
      skills: ['Python', 'R', 'MATLAB', 'SQL', 'Git', 'Linux', 'Docker'],
    },
    {
      title: 'Data & Analytics',
      skills: ['Pandas', 'NumPy', 'Bioconductor', 'Seurat', 'DESeq2', 'Statistical Modeling', 'Matplotlib'],
    },
    {
      title: 'Lab & Hardware',
      skills: ['Cleanroom Fabrication', 'Biosensor Design', 'LC-MS/MS', 'Single-cell RNA-seq', 'Bioassays', 'Electrochemistry', 'COMSOL'],
    },
  ];

  return (
    <section id="skills" className="py-28 bg-background relative overflow-hidden noise-bg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="rule-accent mb-6" />
          <h2 className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight mb-3">
            Technical Toolkit
          </h2>
          <p className="text-lg text-muted-foreground">From deep learning frameworks to cleanroom equipment</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-sm tracking-[0.2em] uppercase font-['JetBrains_Mono'] text-primary font-semibold mb-5">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
