import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <Card className="bg-card border-border shadow-lg">
          <CardContent className="p-8 space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I work at the intersection of three domains: <span className="font-semibold text-primary">bioinformatics</span>, 
              <span className="font-semibold text-primary"> hardware development</span>, and 
              <span className="font-semibold text-primary"> software engineering</span>. My research at RWTH Aachen focuses 
              on creating an integrated platform for miRNA biomarker discovery and multiplexed biosensing for cardiovascular 
              and disease diagnostics.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">What makes my work unique:</h3>
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span><span className="font-semibold text-foreground">Full-stack innovation:</span> I develop the entire 
                  pipeline from computational biomarker discovery algorithms to micro/nanofabricated sensor hardware to 
                  real-time AI-powered analysis systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span><span className="font-semibold text-foreground">Bridging disciplines:</span> Combining wet-lab 
                  molecular biology, cleanroom microfabrication, machine learning, and clinical translation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 font-bold">•</span>
                  <span><span className="font-semibold text-foreground">Impact-driven:</span> Building technologies that 
                  advance from research prototypes to clinical-grade diagnostic devices</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed pt-4">
              My training includes research experiences at three world-leading institutions: 
              <span className="font-semibold text-foreground"> RWTH Aachen University</span> (current PhD), 
              <span className="font-semibold text-foreground"> Harvard School of Engineering</span> (master's thesis on stem cell reprogramming), 
              and <span className="font-semibold text-foreground"> EPFL</span> (master's degree with bioinformatics and machine learning specialization).
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
