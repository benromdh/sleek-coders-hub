import { Badge } from '@/components/ui/badge';

const ProfessionalExperience = () => {
  const experiences = [
    {
      role: 'ML Research Engineer',
      focus: 'Data Pipelines & Computer Vision Deployment',
      org: 'RWTH Aachen University',
      location: 'Aachen, Germany',
      period: 'Aug 2023 – Present',
      highlights: [
        'Built end-to-end ML pipelines on single-cell sequencing data (10,000+ cells/run) — automated QC, normalization, feature selection, and statistical analysis',
        'Deployed transformer-based computer vision models onto biosensor hardware, pushing detection from 1–3 to 10+ simultaneous targets',
        'Cut analysis time from hours to seconds with real-time AI-powered image processing',
      ],
      tags: ['PyTorch', 'Transformers', 'Computer Vision', 'Python', 'Docker'],
      metric: '10× more targets detected',
      current: true,
    },
    {
      role: 'Data Scientist',
      focus: 'Multi-Omics Integration & Predictive Modeling',
      org: 'Harvard School of Engineering',
      location: 'Boston, MA',
      period: 'Nov 2021 – May 2022',
      highlights: [
        'Integrated transcriptomics and proteomics datasets (hundreds of features, multiple conditions) to identify regulatory drivers',
        'Produced a ranked target shortlist that directly determined which experiments the biology team ran next, cutting the validation cycle',
      ],
      tags: ['R', 'Python', 'Statistical Modeling', 'Multi-Omics'],
      metric: 'Directly guided lab experiments',
      current: false,
    },
    {
      role: 'R&D Data Scientist',
      focus: 'Analytical Method Development',
      org: 'Nestlé Research Center',
      location: 'Lausanne, Switzerland',
      period: 'Mar 2021 – Aug 2021',
      highlights: [
        'Designed and validated precision measurement methods (LC-MS/MS) with full statistical QC from scratch',
        'Results fed directly into reformulation decisions for a $500M+ product line',
      ],
      tags: ['LC-MS/MS', 'Statistical QC', 'Method Validation'],
      metric: '$500M+ product line impact',
      current: false,
    },
    {
      role: 'ML Engineer',
      focus: 'Simulation & Predictive Modeling',
      org: 'EPFL, Integrated Systems Laboratory',
      location: 'Lausanne, Switzerland',
      period: 'Dec 2019 – Aug 2020',
      highlights: [
        'Built Python/MATLAB simulation models predicting sensor hardware behavior before fabrication',
        'Accuracy cut prototype iterations by 60% and directly informed component selection',
      ],
      tags: ['Python', 'MATLAB', 'Simulation', 'Predictive Modeling'],
      metric: '60% fewer prototypes needed',
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Experience
        </h2>
        <p className="text-muted-foreground mb-12">Where I've applied ML to solve real problems</p>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border last:border-transparent">
              {/* Timeline dot */}
              <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${
                exp.current 
                  ? 'bg-primary border-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]' 
                  : 'bg-background border-muted-foreground/30'
              }`} />

              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  {exp.current && (
                    <span className="text-xs font-mono font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">CURRENT</span>
                  )}
                </div>
                <p className="text-sm text-primary font-medium">{exp.focus}</p>
                <p className="text-sm text-muted-foreground">
                  {exp.org} · {exp.location} · {exp.period}
                </p>

                {/* Impact metric callout */}
                <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-lg px-3 py-1.5 text-sm font-medium text-primary">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {exp.metric}
                </div>

                <ul className="space-y-2 text-muted-foreground">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1 shrink-0">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs font-mono bg-secondary text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
