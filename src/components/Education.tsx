import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="space-y-8">
          {/* PhD */}
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    PhD in Biomedical Engineering
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-2">RWTH Aachen University</p>
                  <p className="text-muted-foreground mb-2">Oct 2022 - Present</p>
                  <p className="text-muted-foreground">Focus: AI-Driven Biosensing & Diagnostics</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dual Master's */}
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      Dual Master of Science
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-2">EPFL & Harvard SEAS</p>
                    <p className="text-muted-foreground mb-2">Sep 2019 - Sep 2022</p>
                    <p className="text-muted-foreground">GPA: 5.2/6.0</p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span><span className="font-semibold text-foreground">EPFL:</span> Life Sciences Engineering with Minor in Bioinformatics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span><span className="font-semibold text-foreground">Harvard:</span> Master's Thesis in Bioengineering (Stem Cell Reprogramming)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bachelor's */}
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-muted">
                  <GraduationCap className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    Bachelor's Degree
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-2">EPFL</p>
                  <p className="text-muted-foreground">2015 - 2019</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-foreground mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Generative AI with Large Language Models</p>
                    <p className="text-sm text-muted-foreground">DeepLearning.AI & AWS - Nov 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Deep Learning: Getting Started</p>
                    <p className="text-sm text-muted-foreground">LinkedIn Learning - Jan 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">BLS-AED Certification</p>
                    <p className="text-sm text-muted-foreground">Emergency Medical Services</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">IAS Level 1 First Aid</p>
                    <p className="text-sm text-muted-foreground">International Aid Services</p>
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

export default Education;
