import { Card, CardContent, CardHeader } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { resume } from '@/lib/resume';

const certificationBadges = ['🎓', '🧠', '📚', '⚡', '🚀'];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-background via-surface/20 to-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Professional credentials and completed specializations
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resume.certifications.map((cert, index) => (
            <Card
              key={cert.id}
              className="animate-slide-up text-center flex flex-col items-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{certificationBadges[index % certificationBadges.length]}</div>
              <CardHeader className="text-center">
                <h3 className="text-xl font-bold text-gradient">{cert.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-semibold mb-1">{cert.issuer}</p>
                <p className="text-text-tertiary text-sm mb-4">{cert.date}</p>
                {cert.credential && (
                  <Badge variant="success" size="sm">
                    Verified
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all certificates */}
        <div className="mt-10 flex justify-center animate-fade-in">
          {resume.certificatesUrl ? (
            <a
              href={resume.certificatesUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                View all certificates
              </Button>
            </a>
          ) : (
            <Button variant="outline" size="lg" disabled>
              View all certificates
            </Button>
          )}
        </div>

        {/* Additional Info */}
        <Card className="mt-12 animate-fade-in" gradient>
          <CardHeader>
            <h3 className="text-2xl font-bold">Continuous Learning</h3>
          </CardHeader>
          <CardContent>
            <p className="text-text-secondary mb-4">
              Committed to staying current with the latest developments in AI and machine learning. Actively participating in online courses, workshops, and conferences.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="accent">Active Learner</Badge>
              <Badge variant="accent">Research Focused</Badge>
              <Badge variant="success">Community Contributor</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
