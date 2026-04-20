import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { resume } from '@/lib/resume';

type ProjectItem = typeof resume.projects[number] & {
  image: string;
  metrics: string[];
  longDescription: string;
};

const projects: ProjectItem[] = resume.projects.map((project) => ({
  ...project,
  image: '🚀', // Default image, can be customized per project
  metrics: [], // Add metrics if available, otherwise empty
  longDescription: project.description, // For potential modal
}));

// Add metrics to specific projects
projects[0].metrics = ['Semantic Similarity', 'Enhanced Discovery', 'NLP-Powered'];
projects[1].metrics = ['RAG Technology', 'Instant Summaries', 'Learning Efficiency'];
projects[2].metrics = ['Real-time Analysis', 'Hybrid ML Approach', 'Contextual Understanding'];
projects[3].metrics = ['Structured Data Insights', 'CRM Automation', 'FastAPI + Supabase'];
projects[4].metrics = ['Multi-class Detection', 'Real-time Inference', 'MobileNetV2 + BiLSTM'];
projects[5].metrics = ['96% Accuracy', 'Real-time Predictions', 'Flask Web App'];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Showcase of AI/ML projects demonstrating technical expertise and innovation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              interactive
              className="animate-slide-up flex flex-col cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center text-6xl overflow-hidden group">
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>

              <CardHeader>
                <h3 className="text-xl font-bold text-gradient">{project.title}</h3>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-text-secondary mb-4">{project.description}</p>

                {/* Metrics */}
                {project.metrics.length > 0 && (
                  <div className="mb-4 p-3 bg-surface rounded-lg">
                    <p className="text-xs text-text-tertiary uppercase tracking-wider font-semibold mb-2">
                      Key Features
                    </p>
                    <div className="space-y-1">
                      {project.metrics.map((metric) => (
                        <p key={metric} className="text-sm text-primary font-semibold">
                          ✓ {metric}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="accent" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <a
                  href={project.github || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!project.github) e.preventDefault();
                  }}
                  className="w-full"
                  aria-disabled={!project.github}
                  tabIndex={project.github ? 0 : -1}
                >
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    disabled={!project.github}
                  >
                    View Code
                  </Button>
                </a>
                <a
                  href={project.demo || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!project.demo) e.preventDefault();
                  }}
                  className="w-full"
                  aria-disabled={!project.demo}
                  tabIndex={project.demo ? 0 : -1}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    disabled={!project.demo}
                  >
                    Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gradient">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-text-secondary hover:text-text-primary"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-text-secondary mb-6">{selectedProject.longDescription}</p>
                {selectedProject.metrics.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {selectedProject.metrics.map((metric) => (
                        <li key={metric} className="text-primary">✓ {metric}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="accent" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!selectedProject.github) e.preventDefault();
                    }}
                    aria-disabled={!selectedProject.github}
                    tabIndex={selectedProject.github ? 0 : -1}
                  >
                    <Button variant="primary" disabled={!selectedProject.github}>
                      View Code
                    </Button>
                  </a>
                  <a
                    href={selectedProject.demo || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!selectedProject.demo) e.preventDefault();
                    }}
                    aria-disabled={!selectedProject.demo}
                    tabIndex={selectedProject.demo ? 0 : -1}
                  >
                    <Button variant="outline" disabled={!selectedProject.demo}>
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
