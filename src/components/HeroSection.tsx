import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-accent/20 to-secondary-light/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center animate-slide-up">
          {/* Content */}
          <div className="max-w-4xl">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-foreground">Hello, I'm</span>
                <br />
                <span className="gradient-text">TEJASWINI DALAPPAGARI</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6">
                Empowering Future Developers | AIML Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Passionate Software Development Instructor at NxtWave, guiding students through real-world tech stacks 
                and AI/ML concepts. Dedicated to mentoring the next generation of developers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300" onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-card hover:bg-accent rounded-full shadow-md hover:shadow-lg transition-all duration-300 group">
                <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-card hover:bg-accent rounded-full shadow-md hover:shadow-lg transition-all duration-300 group">
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="mailto:alex@example.com" className="p-3 bg-card hover:bg-accent rounded-full shadow-md hover:shadow-lg transition-all duration-300 group">
                <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>;
};
export default HeroSection;