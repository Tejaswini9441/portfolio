import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        "Python", "JavaScript", "Java", "C++", 
        "React", "HTML5", "CSS3"
      ]
    },
    {
      title: "AI & Machine Learning", 
      icon: "🤖",
      skills: [
        "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", 
        "NumPy", "OpenCV", "Neural Networks"
      ]
    },
    {
      title: "Teaching & Development",
      icon: "🎓", 
      skills: [
        "Curriculum Design", "Student Mentoring", "Workshop Facilitation", 
        "Code Review", "Project Guidance", "Assessment Design"
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      skills: [
        "Git", "VS Code", "Jupyter", "Node.js", "Express.js", "MongoDB"
      ]
    }
  ];

  const softSkills = [
    "Teaching Excellence",
    "Student Mentoring",
    "Communication",
    "Problem Solving",
    "Leadership",
    "Curriculum Development",
    "Research & Analysis",
    "Continuous Learning"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and skills that I've developed over years of 
            passionate learning and hands-on experience in software development.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="px-3 py-1 text-sm font-medium bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-secondary/20 hover:bg-secondary/40 text-secondary-foreground border border-secondary/30 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mt-16 text-center animate-slide-up">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Education & Achievements</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border/50">
              <div className="text-primary mb-2">🎓</div>
              <h4 className="font-semibold mb-2">Computer Science</h4>
              <p className="text-sm text-muted-foreground">AI & ML Specialization</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border/50">
              <div className="text-secondary mb-2">📜</div>
              <h4 className="font-semibold mb-2">NPTEL Certified</h4>
              <p className="text-sm text-muted-foreground">Multiple Certifications</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border/50">
              <div className="text-primary mb-2">📝</div>
              <h4 className="font-semibold mb-2">Research Paper</h4>
              <p className="text-sm text-muted-foreground">AI Research Publication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;