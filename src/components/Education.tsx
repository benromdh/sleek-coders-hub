import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const education = [
    {
      degree: 'PhD — Machine Learning for Medical Diagnostics & Biomarker Discovery',
      school: 'RWTH Aachen University',
      location: 'Aachen, Germany',
      period: 'Aug 2023 – Present',
      current: true,
      gradient: 'from-primary to-blue-600',
    },
    {
      degree: 'M.Sc. — Biomedical Engineering & Bioinformatics',
      subtitle: 'Minor in Data Science & AI',
      school: 'EPFL & Harvard School of Engineering',
      location: 'Lausanne, CH & Boston, MA',
      period: 'Sep 2019 – Oct 2022',
      current: false,
      gradient: 'from-rose-500 to-orange-500',
    },
  ];

  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden noise-bg">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-3">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">Academic background</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-card border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${ed.gradient} shadow-lg mb-5 group-hover:scale-105 transition-transform duration-300`}>
                <GraduationCap className="h-7 w-7 text-white" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground font-['Space_Grotesk']">{ed.degree}</h3>
                {ed.current && (
                  <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full shrink-0">
                    CURRENT
                  </span>
                )}
              </div>
              {ed.subtitle && <p className="text-primary font-semibold mb-2">{ed.subtitle}</p>}
              <p className="text-muted-foreground">{ed.school}</p>
              <p className="text-sm text-muted-foreground">{ed.location} · {ed.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
