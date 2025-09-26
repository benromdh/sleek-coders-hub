import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Angular'],
      color: 'text-blue-400'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Python', 'Express', 'Django', 'FastAPI', 'PostgreSQL'],
      color: 'text-green-400'
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Ionic'],
      color: 'text-purple-400'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase', 'MySQL'],
      color: 'text-orange-400'
    },
    {
      title: 'DevOps',
      icon: Cloud,
      skills: ['Docker', 'AWS', 'Kubernetes', 'CI/CD', 'Nginx', 'Linux'],
      color: 'text-cyan-400'
    },
    {
      title: 'Tools',
      icon: GitBranch,
      skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest', 'Cypress'],
      color: 'text-pink-400'
    },
    {
      title: 'Languages',
      icon: Code2,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust', 'Java'],
      color: 'text-yellow-400'
    },
    {
      title: 'Design',
      icon: Palette,
      skills: ['UI/UX', 'Figma', 'Adobe XD', 'Photoshop', 'Wireframing', 'Prototyping'],
      color: 'text-red-400'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-smooth group"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;