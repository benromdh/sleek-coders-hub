import { Card, CardContent } from '@/components/ui/card';
import { Building2, Calendar, MapPin } from 'lucide-react';

const ProfessionalExperience = () => {
  const experiences = [
    {
      title: 'Doctoral Researcher - AI & Biosensing',
      organization: 'RWTH Aachen University',
      location: 'Aachen, Germany',
      period: 'Aug 2023 - Present',
      achievements: [
        'Engineering end-to-end AI biosensing platform with cleanroom-fabricated micro/nanostructured sensor arrays',
        'Developing machine learning pipelines for miRNA biomarker identification from single-cell RNA sequencing data',
        'Implementing foundation models for automated real-time biosensor image analysis',
        'Impact: Achieving 10+ target multiplexed detection (vs 1-3 conventional), reducing analysis time from hours to seconds'
      ],
      isPrimary: true
    },
    {
      title: 'Master Thesis - Computational Biology and Cell Reprogramming',
      organization: 'Harvard School of Engineering',
      location: 'Boston, MA',
      period: 'Nov 2021 - May 2022',
      achievements: [
        'Investigated cardiac cell reprogramming mechanisms using animal models',
        'Analyzed hundreds of differentially expressed genes/proteins from integrated transcriptomic and proteomic datasets',
        'Identified potential key regulators and validated through in vitro experiment',
        'Skills demonstrated: Multi-omics analysis, wet-lab validation, animal models'
      ],
      isPrimary: false
    },
    {
      title: 'Biosensor Development Researcher',
      organization: 'EPFL, Integrated Systems Laboratory',
      location: 'Lausanne, Switzerland',
      period: 'Dec 2019 - Aug 2020',
      achievements: [
        'Built numerical simulation framework for point-of-care electrochemical biosensor design',
        'Developed predictive models optimizing sensor sensitivity and detection speed',
        'Impact: Reduced physical prototyping iterations by 60%, predicted 5x faster detection times'
      ],
      isPrimary: false
    },
    {
      title: 'R&D Scientist',
      organization: 'Nestlé Research',
      location: 'Lausanne, Switzerland',
      period: 'Mar 2021 - Aug 2021',
      achievements: [
        'Developed optimized LC-MS/MS methods for infant formula quality control',
        'Impact: 30% faster analysis time, 2x improved detection limits, informed strategy for $500M+ product line'
      ],
      isPrimary: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Research Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <div className={`p-3 rounded-lg ${exp.isPrimary ? 'bg-gradient-to-br from-primary to-accent' : 'bg-muted'}`}>
                      <Building2 className={`h-6 w-6 ${exp.isPrimary ? 'text-white' : 'text-muted-foreground'}`} />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-primary mb-2">
                        {exp.organization}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-muted-foreground">
                          <span className="text-accent mr-2 font-bold">•</span>
                          <span>{achievement}</span>
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

export default ProfessionalExperience;
