import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Calendar, MapPin, Edit } from 'lucide-react';

const ProfessionalExperience = () => {
  return (
    <section id="professional-experiences" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Professional experiences</h2>
              <Button variant="link" className="text-primary p-0 h-auto">
                + Add an experience
              </Button>
            </div>

            <div className="space-y-6">
              {/* Primary Activity */}
              <div className="border-b border-border pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Building2 className="h-12 w-12 text-muted-foreground bg-muted p-2 rounded-lg" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                            Primary activity
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          PhD researcher 
                          <Button variant="link" className="text-primary p-0 h-auto ml-2">
                            <Edit className="h-4 w-4" />
                            Edit
                          </Button>
                        </h3>
                        <p className="text-primary font-medium mb-2">RWTH AACHEN UNIVERSITY</p>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>August 2022 Today (2 years and 2 months)</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>Aachen</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProfessionalExperience;