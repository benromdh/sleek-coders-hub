import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const achievements = [
    {
      icon: Trophy,
      title: 'Gold Medal',
      event: 'SensUs International Biosensor Competition',
      subtitle: '10+ university teams worldwide',
      period: '2019–2020',
      description: 'Led a team of 12 across hardware, software, and biology to build a real-time drug monitoring device. Owned the technical roadmap and delivery.',
      gradient: 'from-yellow-500 to-amber-600',
    },
    {
      icon: Award,
      title: '3rd Place / 80+ Teams',
      event: 'AIcrowd Computer Vision Competition',
      subtitle: '94% F1-score',
      period: '2019–2020',
      description: 'Built a CNN for automated road segmentation from satellite imagery, ranking in the top 3 among 80+ competing teams.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Trophy,
      title: 'Gold Medal + Finalist',
      event: 'iGEM Synthetic Biology Competition',
      subtitle: '300+ university teams · Best Therapeutics & Software Nominee',
      period: '2018–2019',
      description: 'Built a tool ranking personalized cancer vaccine targets from patient genomic data. Improved a key manufacturing yield by 83%.',
      gradient: 'from-yellow-500 to-amber-600',
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-card relative overflow-hidden noise-bg">
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mb-3">
            <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">Leadership & Awards</span>
          </h2>
          <p className="text-xl text-muted-foreground">Competition wins and team leadership</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-background border border-border/50 rounded-2xl p-6 hover:border-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${a.gradient} shadow-lg mb-4 self-start group-hover:scale-110 transition-transform duration-300`}>
                <a.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground font-['Space_Grotesk'] mb-1">
                <span className={`bg-gradient-to-r ${a.gradient} bg-clip-text text-transparent`}>{a.title}</span>
              </h3>
              <p className="font-semibold text-foreground text-sm mb-1">{a.event}</p>
              <p className="text-xs text-muted-foreground mb-3">{a.subtitle} · {a.period}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
