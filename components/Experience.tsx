import { Card, CardContent, CardHeader } from './ui/Card';
import { Badge } from './ui/Badge';

const experiences = [
  {
    title: 'Bachelor of Science in Artificial Intelligence',
    company: 'Air University',
    duration: '09/2023 – 06/2027',
    description:
      'Currently pursuing specialized degree in AI with focus on machine learning, deep learning, and advanced AI applications.',
    achievements: [
      'Strong foundation in AI/ML algorithms',
      'Practical experience with multiple AI projects',
      'Completed 5 professional certifications',
    ],
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'Data Science'],
  },
  {
    title: 'Intermediate in Computer Science (ICS)',
    company: 'F.G. Sir Syed College',
    duration: '11/2021 – 06/2023',
    description:
      'Foundational computer science education with programming basics and problem-solving skills.',
    achievements: [
      'Developed programming fundamentals',
      'Problem-solving and algorithm design',
      'Introduction to data structures',
    ],
    technologies: ['Python', 'Data Structures', 'Programming Basics', 'Problem Solving'],
  },
  {
    title: 'AI/ML Project Developer',
    company: 'Self-Directed Learning',
    duration: '2023 - Present',
    description:
      'Developing innovative NLP and machine learning projects focused on real-world applications and intelligent systems.',
    achievements: [
      'Built multiple production-ready AI applications',
      'Specialized in NLP and LLM-based solutions',
      'Implemented RAG systems for context-aware responses',
    ],
    technologies: ['Python', 'LangChain', 'PyTorch', 'FastAPI', 'Streamlit'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background via-surface/20 to-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Journey in AI development and continuous learning
          </p>
        </div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative md:grid md:grid-cols-2 gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } animate-slide-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1.5 md:-translate-x-1/2 md:translate-y-6" />

              {/* Content */}
              <div className={`md:col-span-1 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                <Card>
                  <CardHeader>
                    <h3 className="text-2xl font-bold text-gradient">{exp.title}</h3>
                    <p className="text-primary font-semibold mt-1">{exp.company}</p>
                    <p className="text-text-tertiary text-sm mt-1">{exp.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-secondary mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4 space-y-2">
                      {exp.achievements.map((achievement) => (
                        <p key={achievement} className="text-text-tertiary text-sm">
                          • {achievement}
                        </p>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="primary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
