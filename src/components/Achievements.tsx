import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const achievements = [
    {
      title: 'Gold Medal — SensUs International',
      context: '10+ university teams · Biosensor Competition',
      description: 'Led a multidisciplinary team of 12 across hardware, software, and biology to build a real-time drug monitoring device.',
    },
    {
      title: '3rd Place — AIcrowd CV Challenge',
      context: '94% F1-score · 80+ teams',
      description: 'Built a CNN for automated road segmentation from satellite imagery, ranking among the top competitors.',
    },
    {
      title: 'Gold Medal + Finalist — iGEM',
      context: '300+ teams · Best Therapeutics & Software Nominee',
      description: 'Built a personalized cancer vaccine target ranking tool and improved manufacturing yield by 83%.',
    },
  ];

  return (
    <section id="achievements" className="py-28 bg-card relative overflow-hidden noise-bg">
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="rule-accent mb-6" />
          <h2 className="text-4xl sm:text-5xl font-black font-['Space_Grotesk'] tracking-tight mb-3">
            Awards & Leadership
          </h2>
          <p className="text-lg text-muted-foreground">Competition wins leading cross-functional teams</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group border-t-2 border-primary/30 pt-6 hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-foreground font-['Space_Grotesk'] mb-1 group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="text-xs text-primary/70 font-['JetBrains_Mono'] mb-3">{a.context}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
