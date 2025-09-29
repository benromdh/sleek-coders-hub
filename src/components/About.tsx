import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="presentation" className="py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Presentation */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Presentation</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am a dedicated PhD researcher at RWTH Aachen University, specializing in the intersection 
                  of life sciences and engineering. My academic journey began at EPFL, where I completed both 
                  my Bachelor's and Master's degrees in Life Sciences Engineering.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I focus on advanced research in academic settings, contributing to innovative 
                  solutions in biotechnology and life sciences. My work spans across multiple disciplines, 
                  combining theoretical knowledge with practical applications to address complex challenges 
                  in the field.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Professional Situation & Information */}
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Professional situation</h3>
                  <Button variant="link" className="text-primary p-0 h-auto text-sm">
                    Change
                  </Button>
                </div>
                {/* Content would be editable form fields in real implementation */}
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Name</span>
                    <span className="text-sm text-foreground">ahmed.benromdhane</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Honorary title and distinctions</span>
                    <span className="text-sm text-muted-foreground">Not specified</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Nationality(ies)</span>
                    <span className="text-sm text-foreground">Tunisia</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Laboratory</span>
                    <span className="text-sm text-muted-foreground">Not specified</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Association</span>
                    <span className="text-sm text-muted-foreground">Not specified</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;