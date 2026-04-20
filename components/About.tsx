import { Card, CardContent, CardHeader } from './ui/Card';
import { Badge } from './ui/Badge';

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background via-surface/20 to-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Building intelligent AI systems and NLP solutions for real-world challenges
          </p>
        </div>

        {/* About Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="animate-slide-left">
            <CardHeader>
              <h3 className="text-2xl font-bold">Background</h3>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary leading-relaxed">
                Artificial Intelligence Engineer with strong expertise in developing predictive models, NLP solutions, and scalable AI systems. Currently studying B.S. in AI at Air University. Passionate about building intelligent, data-driven solutions that improve performance, enhance decision-making, and reduce manual effort through innovative AI-driven projects.
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-right">
            <CardHeader>
              <h3 className="text-2xl font-bold">Expertise</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-text-secondary mb-2">
                    ✓ NLP & Large Language Models (LLMs)
                  </p>
                  <p className="text-text-secondary mb-2">
                    ✓ Retrieval Augmented Generation (RAG)
                  </p>
                  <p className="text-text-secondary mb-2">
                    ✓ Machine Learning & Deep Learning
                  </p>
                  <p className="text-text-secondary">
                    ✓ Model Deployment & MLOps
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Overview */}
        <Card className="animate-fade-in" gradient>
          <CardHeader>
            <h3 className="text-2xl font-bold">Core Competencies</h3>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary">Python</Badge>
              <Badge variant="primary">NLP</Badge>
              <Badge variant="primary">LLMs</Badge>
              <Badge variant="accent">PyTorch</Badge>
              <Badge variant="accent">LangChain</Badge>
              <Badge variant="accent">RAG</Badge>
              <Badge variant="success">FastAPI</Badge>
              <Badge variant="success">Docker</Badge>
              <Badge variant="success">MLOps</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
