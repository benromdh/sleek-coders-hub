import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const highlights = [
    '5+ years of experience',
    '50+ projects completed',
    'Full-stack expertise',
    'Open source contributor'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience building 
                web applications that solve real-world problems. I love working with modern 
                technologies and am always eager to learn and adapt to new tools and frameworks.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me contributing to open source projects, 
                writing technical blog posts, or exploring the latest developments in AI and 
                machine learning. I believe in writing clean, maintainable code and creating 
                exceptional user experiences.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="justify-center py-2 bg-gradient-card border border-border"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center">
            <Card className="bg-gradient-card border-border shadow-card max-w-md w-full">
              <CardContent className="p-8 text-center space-y-6">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  AJ
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Alex Johnson</h3>
                  <p className="text-accent">Full-Stack Developer</p>
                  <p className="text-sm text-muted-foreground">
                    San Francisco, CA
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-semibold">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Clients</span>
                    <span className="font-semibold">25+</span>
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