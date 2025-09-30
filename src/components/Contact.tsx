import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration? Let's connect!
          </p>
        </div>

        <Card className="bg-card border-border shadow-lg">
          <CardContent className="p-8">
            <div className="space-y-8">
              {/* Email */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-full">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Email Me</h3>
                  <a
                    href="mailto:abenromdh@gmail.com"
                    className="text-xl text-primary hover:text-accent transition-colors"
                  >
                    abenromdh@gmail.com
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">Or connect with me on</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-auto py-4 flex-col space-y-2 hover:bg-accent/10 hover:border-accent transition-all"
                  onClick={() => window.open('https://linkedin.com/in/ahmed-ben-romdhane-b70590185', '_blank')}
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                  <span className="font-semibold">LinkedIn</span>
                  <span className="text-xs text-muted-foreground">Professional Network</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-auto py-4 flex-col space-y-2 hover:bg-accent/10 hover:border-accent transition-all"
                  onClick={() => window.open('https://github.com/ahmed-ben-romdhane', '_blank')}
                >
                  <Github className="h-6 w-6 text-primary" />
                  <span className="font-semibold">GitHub</span>
                  <span className="text-xs text-muted-foreground">Code Repository</span>
                </Button>
              </div>

              {/* Availability Status */}
              <Card className="bg-muted/30 border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-center">
                      <p className="font-semibold text-foreground">Open to Research Collaborations</p>
                      <p className="text-sm text-muted-foreground">
                        Available for discussions on AI-driven diagnostics and biosensing projects
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
