import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Open to ML engineering roles, research collaborations, and consulting on AI-powered data systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
            <a href="mailto:abenromdh@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              abenromdh@gmail.com
            </a>
          </Button>
        </div>

        <div className="flex justify-center gap-3">
          <Button variant="outline" size="lg" onClick={() => window.open('https://linkedin.com/in/ahmed-ben-romdhane-b70590185', '_blank')}>
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open('https://github.com/benromdh', '_blank')}>
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground bg-background border border-border rounded-full px-4 py-2">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Open to opportunities
        </div>
      </div>
    </section>
  );
};

export default Contact;
