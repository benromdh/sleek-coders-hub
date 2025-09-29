import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card border-border shadow-card">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-foreground">EPFL Diploma</h2>

            <div className="space-y-6">
              {/* Master's Degree */}
              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Master - Sciences et technologies du vivant - Ingénierie des sciences du vivant (SV) - SV
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">2022</p>
                  </div>
                </div>
              </div>

              {/* Bachelor's Degree */}
              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Bachelor - Ingénierie des sciences du vivant - Ingénierie des sciences du vivant (SV) - SV
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">2020</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Sections */}
        <div className="mt-8 space-y-8">
          {/* Additional Training */}
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">Additional training</h2>
                <Button variant="link" className="text-primary p-0 h-auto">
                  + Add a training
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">Languages</h2>
                <Button variant="link" className="text-primary p-0 h-auto">
                  + Add
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Other Experiences */}
          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-foreground">Other experiences and distinctions</h2>
                <Button variant="link" className="text-primary p-0 h-auto">
                  + Add an experience or distinction
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                No experience or distinction listed at this time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
