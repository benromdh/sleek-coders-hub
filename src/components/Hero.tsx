import { Button } from '@/components/ui/button';
import { MapPin, University, Calendar, Github, Linkedin, Mail } from 'lucide-react';
import campusHeader from '@/assets/campus-header.jpg';

const Hero = () => {
  return (
    <section className="relative">
      {/* Header Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={campusHeader} 
          alt="University Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Profile Section */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg shadow-card p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-lg">
                  AB
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-foreground">
                      Ahmed Ben Romdhane
                    </h1>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <University className="h-5 w-5" />
                        <span className="font-semibold">PhD researcher</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-sm">RWTH AACHEN UNIVERSITY - Academic Research</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">AACHEN, Germany</span>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn  
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  </div>

                  <div className="text-right mt-4 md:mt-0">
                    <div className="text-sm text-muted-foreground">Alumni</div>
                    <div className="text-lg font-semibold text-foreground">2022</div>
                    <Button variant="link" className="text-primary p-0 h-auto">
                      Edit my CV
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;