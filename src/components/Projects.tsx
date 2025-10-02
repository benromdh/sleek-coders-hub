import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, FlaskConical, LineChart, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Multiplexed Biosensor Platform',
      description: 'Integrating platform combining biomarker discovery, cleanroom fabrication, and intelligent detection that would enable 10+ target multiplexed detection with real-time AI-powered analysis.',
      icon: Cpu,
      tags: ['Python', 'PyTorch', 'Single-cell RNA-seq', 'Microfluidics', 'SPR Imaging'],
      status: 'Ongoing PhD Research',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'iGEM: Personalized Cancer Vaccine Platform',
      description: 'Developed cost-effective cancer vaccine and point-of-care relapse surveillance system. Built manufacturing platform increasing vaccine production efficacy by 83%. Created software for identifying optimal protein candidates.',
      icon: FlaskConical,
      tags: ['Synthetic Biology', 'Python', 'Software Development', 'Vaccine Manufacturing', 'Bioinformatics'],
      status: 'Gold + Best Therapeutics & Software Finalist',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      title: 'Cardiac Reprogramming Multi-Omics Analysis',
      description: 'Machine learning pipeline for identifying regulatory factors in cell fate conversion. Analyzed hundreds of genes/proteins to identify potential key regulators.',
      icon: FlaskConical,
      tags: ['R', 'Python', 'RNA-seq', 'Proteomics', 'Statistical Modeling'],
      status: 'Published Research',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Electrochemical Biosensor Simulation Framework',
      description: 'Finite element modeling for rapid virtual prototyping of point-of-care devices that significantly reduced physical prototyping iterations.',
      icon: LineChart,
      tags: ['Python', 'MATLAB', 'COMSOL', 'Electrochemistry'],
      status: 'Gold Medal at SensUs',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'CNN for Geospatial Road Segmentation',
      description: 'Deep learning model for automated infrastructure mapping from satellite imagery. Achieved 94% F1-score, ranking top 3 among 80+ teams.',
      icon: Globe,
      tags: ['PyTorch', 'Computer Vision', 'CNNs', 'Semantic Segmentation'],
      status: 'Competition Award',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Key Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative research projects bridging AI, biosensing, and computational biology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="mb-3 bg-secondary/50">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="border-border text-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground">
                <span className="font-semibold text-foreground">Publications:</span> Multiple research publications in preparation
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
