import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Gold Medal — SensUs International Biosensor Competition',
      subtitle: '10+ university teams worldwide',
      period: '2019–2020',
      description: 'Led a team of 12 across hardware, software, and biology to build a real-time drug monitoring device. Owned the technical roadmap, integration, and delivery.',
    },
    {
      title: '3rd Place / 80+ Teams — AIcrowd CV Competition',
      subtitle: '94% F1-score',
      period: '2019–2020',
      description: 'Built a CNN for automated road segmentation from satellite imagery, ranking in the top 3 among 80+ competing teams.',
    },
    {
      title: 'Gold Medal + Best Therapeutics & Software Finalist — iGEM',
      subtitle: '300+ university teams worldwide',
      period: '2018–2019',
      description: 'Built a tool ranking personalized cancer vaccine targets from patient genomic data. Improved a key manufacturing yield metric by 83%.',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Leadership & Awards
        </h2>
        <p className="text-muted-foreground mb-12">Competition wins and team leadership</p>

        <div className="space-y-6">
          {achievements.map((a, i) => (
            <div key={i} className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
              <div className="shrink-0 mt-1">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{a.title}</h3>
                <p className="text-sm text-primary font-mono">{a.subtitle} · {a.period}</p>
                <p className="text-sm text-muted-foreground mt-2">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
