import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Multiplexed Biosensor Platform',
      what: 'End-to-end system combining ML biomarker discovery, cleanroom-fabricated sensors, and real-time computer vision analysis.',
      impact: '10+ simultaneous targets (vs 1–3 conventional), analysis in seconds instead of hours',
      tags: ['PyTorch', 'Transformers', 'Computer Vision', 'Single-cell RNA-seq'],
      status: 'Ongoing PhD Research',
    },
    {
      title: 'Cardiac Reprogramming Multi-Omics Analysis',
      what: 'Integrated transcriptomic and proteomic data to identify key regulators of heart cell reprogramming.',
      impact: 'Ranked target shortlist directly guided lab experiments, cutting validation cycles',
      tags: ['R', 'Python', 'RNA-seq', 'Proteomics', 'Statistical Modeling'],
      status: 'Published Research',
    },
    {
      title: 'Personalized Cancer Vaccine Platform (iGEM)',
      what: 'Software ranking vaccine targets from patient genomic data, plus a manufacturing pipeline.',
      impact: '83% improvement in manufacturing yield metric',
      tags: ['Python', 'Bioinformatics', 'Software Development'],
      status: 'Gold Medal + Finalist',
    },
    {
      title: 'Electrochemical Biosensor Simulation',
      what: 'Finite element models for rapid virtual prototyping of point-of-care diagnostic devices.',
      impact: '60% fewer physical prototyping iterations, predicted 5× faster detection',
      tags: ['Python', 'MATLAB', 'COMSOL', 'Simulation'],
      status: 'Gold Medal at SensUs',
    },
    {
      title: 'CNN for Satellite Road Segmentation',
      what: 'Deep learning model for automated infrastructure mapping from satellite imagery.',
      impact: '94% F1-score, top 3 among 80+ teams',
      tags: ['PyTorch', 'CNNs', 'Semantic Segmentation'],
      status: '3rd Place Competition',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Key Projects
        </h2>
        <p className="text-muted-foreground mb-12">Selected work with measurable outcomes</p>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <div key={i} className="border border-border rounded-xl p-6 bg-background hover:border-primary/30 transition-colors">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="font-bold text-foreground">{p.title}</h3>
                <span className="text-xs font-mono text-primary bg-primary/5 border border-primary/20 px-2 py-0.5 rounded-full">{p.status}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{p.what}</p>
              <div className="bg-accent/5 border border-accent/20 rounded-lg px-3 py-2 mb-4 text-sm">
                <span className="font-semibold text-accent">Impact:</span>{' '}
                <span className="text-foreground">{p.impact}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag, j) => (
                  <Badge key={j} variant="secondary" className="text-xs font-mono bg-secondary text-secondary-foreground">
                    {tag}
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

export default Projects;
