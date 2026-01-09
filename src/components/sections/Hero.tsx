import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/typing-animation";

const roles = [
  "Full-Stack Developer",
  "Systems Programmer",
  "Database Architect",
  "Compiler Engineer",
  "AI Enthusiast",
];

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-20 px-4">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img
                  src="https://avatars.githubusercontent.com/u/79755784?v=4"
                  alt="M.V. Harish Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse-soft">
                <span className="text-primary-foreground text-xs">👋</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-3 animate-fade-in-up">
              <p className="text-muted-foreground font-medium">Hi there, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
                M.V. Harish Kumar
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold h-8">
                <TypingAnimation texts={roles} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
              </p>
            </div>

            <p className="text-muted-foreground text-lg max-w-xl animate-fade-in-up stagger-1 opacity-0">
              Deep expertise in 20+ programming languages, from low-level systems to 
              modern web development. Passionate about building compilers, operating 
              systems, and AI-powered applications.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground animate-fade-in-up stagger-2 opacity-0">
              <MapPin className="w-4 h-4" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3 animate-fade-in-up stagger-3 opacity-0">
              <a
                href="https://github.com/harishtpj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/harishtpj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:harishtpj@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-up stagger-4 opacity-0">
              <Button
                size="lg"
                className="rounded-full px-8 shadow-glow"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 gap-2"
                asChild
              >
                <a href="https://github.com/harishtpj/harishtpj/blob/master/HK_Resume.pdf" target="_blank">
                  <FileText className="w-4 h-4" />
                  View my Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
