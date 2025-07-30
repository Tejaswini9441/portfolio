import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Forever",
      category: "E-Commerce Projects",
      description: "A full stack e-commerce website with complete shopping functionality, payment integration, inventory management, and user authentication system.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Payment Gateway"],
      githubUrl: "https://github.com/Pranathi1303/forever",
      featured: true
    },
    {
      title: "Health Insurance Cost Prediction",
      category: "ML Projects",
      description: "Machine learning model to predict health insurance premium costs based on various factors like age, BMI, smoking habits, and medical history.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
      githubUrl: "https://github.com/Pranathi1303/health-insurance-prediction",
      featured: false
    },
    {
      title: "Network Intrusion Detection System",
      category: "ML Projects",
      description: "ML model to detect cyber-attacks and network intrusions using machine learning algorithms to identify suspicious network activities and potential security threats.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Network Security"],
      githubUrl: "https://github.com/Pranathi1303/network-intrusion-detection",
      featured: false
    },
    {
      title: "Business Fraud Detection System",
      category: "ML Projects",
      description: "Machine learning-based fraud detection model to identify suspicious business transactions using Random Forest, Logistic Regression, KNN, and MLP. Integrated rule-based logic and feature importance analysis to ensure high accuracy and interpretability.",
      technologies: ["Python", "Scikit-learn", "Pandas", "+2"],
      githubUrl: "https://github.com/Tejaswini9441/bussnessFraud",
      featured: false
    },
    {
      title: "Fun Tots Universe",
      category: "Web App Projects",
      description: "Fun Tots Universe is a playful and colorful web app designed to make early childhood learning joyful and engaging. Kids can choose from fun activities like Games, Stories, Draw, Music, and Rhymes & Riddles—each crafted to spark creativity and boost skills through play. With a clean interface, bright gradients, and progress tracking, the app keeps young learners motivated while giving parents a glimpse of their child’s achievements. Perfect for toddlers and preschoolers, this app turns screen time into skill time. 🚀🎨🎶",
      technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "+2"],
      githubUrl: "https://github.com/Tejaswini9441/fun-tots-universe",
      liveUrl: "https://fun-tots-universe.lovable.app/",
      featured: true
    }
  ];

  const categories = ["All", "Full Stack Projects", "E-Commerce Projects", "ML Projects"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work spanning web development, artificial intelligence, and full-stack applications. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground text-xs">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-muted-foreground/30 text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Pranathi1303" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;