import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and Stripe integration. Features include real-time inventory, user authentication, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      tags: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      tags: ['Vue.js', 'Express', 'Weather API', 'Charts.js'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Social Media Analytics',
      description: 'An analytics platform for social media managers to track engagement, growth, and performance across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      tags: ['Next.js', 'Python', 'FastAPI', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Real Estate Portal',
      description: 'A comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center',
      tags: ['React', 'Django', 'PostgreSQL', 'Maps API'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course creation, video streaming, progress tracking, and interactive quizzes.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Video.js'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Project */}
          {projects
            .filter(project => project.featured)
            .map((project, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-smooth overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-smooth hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-secondary/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex items-center gap-2 bg-gradient-primary"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects
              .filter(project => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-smooth overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs bg-secondary/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-secondary/50"
                        >
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
