import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Software Development Instructor",
      company: "NxtWave",
      duration: "June 14, 2025 – Present",
      location: "Remote",
      description: "Teaching comprehensive software development concepts to students, guiding them through real-world tech stacks, and mentoring on AI/ML applications. Conducting hands-on workshops and providing personalized guidance to help students build industry-ready skills.",
      technologies: ["React", "Node.js", "Python", "Machine Learning", "AI", "Teaching", "Mentoring"],
      type: "Full-time"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development and education, where I've had the opportunity to share knowledge and help others grow in their tech careers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                      {experience.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-lg font-semibold text-secondary-foreground mt-1">
                      <Building className="h-5 w-5" />
                      {experience.company}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="secondary" className="w-fit bg-secondary/20 text-secondary-foreground">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-medium">{experience.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {experience.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="px-3 py-1 text-sm font-medium bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline indicator for future experiences */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 rounded-full border border-border/50">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-muted-foreground font-medium">Currently building amazing things...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;