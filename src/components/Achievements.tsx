import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Medal, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Gold Medal - SensUs International Biosensor Competition',
      period: '2019-2020',
      color: 'from-yellow-500 to-amber-600',
      details: [
        'Led simulation and computational modeling for electrochemical biosensor for epilepsy drug monitoring',
        'Top-5 global ranking among 15 international university teams',
        'Accelerated development cycles by 40% through computational modeling',
        'Developed business case projecting $2M+ market potential'
      ]
    },
    {
      icon: Trophy,
      title: 'Gold Medal - iGEM Synthetic Biology Competition',
      period: '2018-2019',
      color: 'from-yellow-500 to-amber-600',
      details: [
        'Engineered novel biosensor for environmental monitoring',
        'Led computational modeling and data analysis of 200+ experimental data points',
        'Competed against 300+ international teams'
      ]
    },
    {
      icon: Award,
      title: '3rd Place - Machine Learning Competition',
      period: '2020',
      color: 'from-orange-600 to-amber-700',
      details: [
        'Built CNN for automated road segmentation in satellite imagery',
        'Achieved 94% F1-score, ranking 3rd among 80+ teams on AIcrowd platform'
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition in international competitions and research excellence
          </p>
        </div>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-4 rounded-lg bg-gradient-to-br ${achievement.color} shadow-lg`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        <span className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.title.split(' - ')[0]}
                        </span>
                        {achievement.title.includes(' - ') && (
                          <span className="text-foreground"> - {achievement.title.split(' - ')[1]}</span>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground">{achievement.period}</p>
                    </div>

                    <ul className="space-y-2">
                      {achievement.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-muted-foreground">
                          <span className="text-accent mr-2 font-bold">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
