import { Card, CardContent, CardHeader } from './ui/Card';
import { Badge } from './ui/Badge';
import { resume } from '@/lib/resume';

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Technical skills across machine learning, software development, and cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resume.skills.map((group, index) => (
            <Card
              key={group.category}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <h3 className="text-xl font-bold text-gradient">
                  {group.category}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill} variant="accent" size="sm">
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
}
