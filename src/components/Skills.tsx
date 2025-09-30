import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Microscope, Cpu, FlaskConical, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Data Science',
      icon: Code2,
      skills: ['Python', 'R', 'MATLAB', 'SQL', 'Git', 'Linux', 'Docker'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI/ML & Deep Learning',
      icon: Brain,
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'LLMs', 'Foundation Models (SAM2)', 'Computer Vision', 'CNNs'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Bioinformatics',
      icon: Database,
      skills: ['Single-cell RNA-seq', 'Multi-omics Integration', 'NGS Analysis', 'Biomarker Discovery', 'Pathway Enrichment', 'Statistical Modeling'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Biosensing & Instrumentation',
      icon: Cpu,
      skills: ['Cleanroom Microfabrication', 'Micro/Nanostructure Design', 'Multiplexed Detection', 'SPR Imaging', 'LC-MS/MS', 'Image Processing'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Experimental Biology',
      icon: FlaskConical,
      skills: ['Cell Culture', 'Animal Models', 'Protein Expression', 'Molecular Biology', 'Bioassay Development'],
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Laboratory Techniques',
      icon: Microscope,
      skills: ['In Vitro Models', 'In Vivo Validation', 'Microscopy', 'Western Blot', 'PCR', 'ELISA'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning computational biology, AI/ML, and experimental techniques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
