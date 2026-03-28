import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const categories = [
    {
      title: 'AI / Machine Learning',
      skills: ['PyTorch', 'TensorFlow', 'Transformers', 'Foundation Models', 'Computer Vision', 'Scikit-learn', 'CNNs'],
    },
    {
      title: 'Programming & Tools',
      skills: ['Python', 'R', 'MATLAB', 'SQL', 'Git', 'Linux', 'Docker'],
    },
    {
      title: 'Data & Analytics',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Bioconductor', 'Seurat', 'DESeq2', 'Statistical Modeling'],
    },
    {
      title: 'Domain Expertise',
      skills: ['Biomarker Discovery', 'Multi-Omics Integration', 'Single-cell RNA-seq', 'Biosensor Systems', 'LC-MS/MS', 'Image-based Assays'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Technical Skills
        </h2>
        <p className="text-muted-foreground mb-12">Tools and technologies I use daily</p>

        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i}>
              <h3 className="font-mono text-sm font-semibold text-primary uppercase tracking-wider mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <Badge key={j} variant="outline" className="border-border text-foreground font-normal hover:border-primary/50 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
