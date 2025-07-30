import { Card, CardContent } from '@/components/ui/card';
import { Code, Heart, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Passionate Developer",
      description: "I love turning complex problems into simple, beautiful solutions through clean code."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-secondary" />,
      title: "AI Enthusiast",
      description: "Fascinated by the potential of artificial intelligence to transform how we work and live."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Goal-Oriented",
      description: "I believe in setting clear objectives and working systematically to achieve them."
    },
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Team Player",
      description: "Collaboration and knowledge sharing are at the heart of everything I do."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a deep interest in artificial intelligence and modern web technologies. 
            With a background in computer science and years of hands-on experience, I love creating applications that solve real-world problems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into technology began during my computer science studies, where I discovered my passion for 
                problem-solving and creating digital solutions. What started as curiosity about how websites work evolved 
                into a deep love for full-stack development.
              </p>
              <p>
                Over the years, I've worked on diverse projects ranging from e-commerce platforms to AI-powered applications. 
                I'm particularly excited about the intersection of traditional web development and artificial intelligence, 
                constantly exploring how GenAI can enhance user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, 
                or experimenting with the latest frameworks and technologies. I believe in continuous learning and 
                sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-accent rounded-full group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;