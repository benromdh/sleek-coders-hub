import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const education = [
    {
      degree: 'PhD — ML for Medical Diagnostics',
      school: 'RWTH Aachen University',
      location: 'Germany',
      period: '2023 – Present',
      current: true,
    },
    {
      degree: 'M.Sc. — Biomedical Engineering',
      detail: 'Minor in Data Science & AI',
      school: 'EPFL & Harvard SEAS',
      location: 'Switzerland & USA',
      period: '2019 – 2022',
    },
  ];

  return (
    <section id="education" className="py-28 bg-background relative overflow-hidden noise-bg">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/4 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="rule-accent mb-6" />
          <h2 className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight mb-3">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-xl font-bold text-foreground font-['Space_Grotesk']">{ed.degree}</h3>
                {ed.current && (
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-primary border border-primary/30 px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
              </div>
              {ed.detail && <p className="text-sm text-primary/80 font-medium mb-1">{ed.detail}</p>}
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
