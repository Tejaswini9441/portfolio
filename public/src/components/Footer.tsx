import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: <Github className="h-5 w-5" />, 
    label: "GitHub", 
    url: "https://github.com/Tejaswini9441"
  }, {
    icon: <Linkedin className="h-5 w-5" />, 
    label: "LinkedIn", 
    url: "https://www.linkedin.com/in/tejaswini-reddy-1b7b76254"
  }, {
    icon: <Mail className="h-5 w-5" />, 
    label: "Email", 
    url: "mailto:tejaswinir497@gmail.com"
  }];
  const quickLinks = [{
    label: "About",
    href: "#about"
  }, {
    label: "Skills",
    href: "#skills"
  }, {
    label: "Projects",
    href: "#projects"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <footer className="bg-gradient-to-t from-muted/50 to-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-black gradient-text">Tejaswini Dalappagari</div>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer & GenAI Enthusiast passionate about creating 
              innovative solutions that make a difference.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-accent hover:bg-primary/10 rounded-lg transition-all duration-300 group" aria-label={social.label}>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {social.icon}
                  </div>
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => <a key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 w-fit">
                  {link.label}
                </a>)}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:tejaswinir497@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">tejaswinir497@gmail.com</a>
              </div>
              <div className="text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for new opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <div></div>

          <Button variant="outline" size="sm" onClick={scrollToTop} className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>;
};
export default Footer;