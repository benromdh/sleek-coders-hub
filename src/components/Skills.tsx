import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Server,
  Palette
} from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card border-border shadow-card">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Skills</h2>
            
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
                <Code2 className="h-12 w-12 text-muted-foreground" />
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-muted-foreground">This section looks empty...</p>
                <p className="text-sm text-muted-foreground">Why not boost your visibility?</p>
              </div>
              
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Add a skill
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;