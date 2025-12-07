import { useState } from "react";
import { Github, Gitlab, ExternalLink, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/ui/tech-badge";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  gitlab?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "MKS - Minimal Kernel System",
    description: "CLI-based operating system kernel with memory management and system calls, built from scratch.",
    techs: ["C", "Assembly"],
    github: "https://github.com/harishtpj/MKS",
    category: "Systems",
  },
  {
    title: "thinFTP - FTP Server",
    description: "Fully functional FTP server with multi-client support and security features.",
    techs: ["Python"],
    github: "https://github.com/harishtpj/thinftp",
    category: "Networking",
  },
  {
    title: "AutoREST - API Automator",
    description: "Automation tool for REST API testing and management with comprehensive workflow capabilities.",
    techs: ["Ruby"],
    github: "https://github.com/harishtpj/AutoREST",
    category: "Tools",
  },
  {
    title: "MiME - Mail Server System",
    description: "Complete SMTP mail server with message routing and authentication capabilities.",
    techs: ["C"],
    github: "https://github.com/harishtpj/MiME",
    category: "Networking",
  },
  {
    title: "HPI",
    description: "A simple, dynamically-typed, procedural psuedocode interpreter.",
    techs: ["C++"],
    github: "https://github.com/harishtpj/HPI",
    category: "Compilers",
  },
  {
    title: "Silk Language",
    description: "An Interpreted, Dynamically-typed, Object Oriented language with simple and modern syntax.",
    techs: ["C++"],
    github: "https://github.com/harishtpj/SilkLang",
    category: "Compilers",
  },
  {
    title: "Calci",
    description: "A Modern, Fast compiled language with pascal-like syntax.",
    techs: ["Python", "C"],
    github: "https://github.com/harishtpj/Calci",
    category: "Compilers",
  },
  {
    title: "Mathsel",
    description: "A Math Statement Based Language which compiles its code to C Language.",
    techs: ["Java", "C"],
    github: "https://github.com/harishtpj/Mathsel",
    category: "Compilers",
  },
  {
    title: "Fidis",
    description: "A File-based Data store with a similar interface to Redis.",
    techs: ["Ruby"],
    github: "https://github.com/harishtpj/Fidis",
    category: "Tools",
  },
  {
    title: "AI Assistant for Disabled People",
    description: "AI-powered assistant using Micro:bit that recognizes individuals and reads image descriptions for visually impaired users.",
    techs: ["Python", "AI/ML", "Microbit"],
    category: "AI/ML",
  },
  {
    title: "Voice-Based Excel Data Assistant",
    description: "Python application that answers questions based on Excel data using NLP and speech synthesis.",
    techs: ["Python", "AI/ML", "NLP"],
    github: "https://github.com/harishtpj/Family-AI",
    category: "AI/ML",
  },
  {
    title: "Risonanza",
    description: "An automated, reliable stress and emotion detection from voice audio, enabling real-time analysis with privacy, efficiency, and flexibility.",
    techs: ["Python", "AI/ML"],
    github: "https://github.com/harishtpj/Risonanza",
    category: "AI/ML",
  },
  {
    title: "GoDNS - DNS Server",
    description: "Custom DNS server with domain name resolution and multiple record type support.",
    techs: ["Go"],
    github: "https://github.com/harishtpj/GoDNS",
    category: "Networking",
  },
  {
    title: "Project Milk - ERP System",
    description: "Comprehensive ERP system for dairy management with inventory, sales, and customer relations.",
    techs: ["Oracle"],
    github: "https://github.com/harishtpj/Project-Milk",
    category: "Enterprise",
  },
  {
    title: "Cafeteria Management System",
    description: "Interactive cafeteria management system with menu, orders, and billing functionality.",
    techs: ["Python"],
    github: "https://github.com/harishtpj/Cafeteria-Management-System",
    category: "Applications",
  },
];

const categories = ["All", "Systems", "AI/ML", "Networking", "Compilers", "Enterprise", "Tools", "Applications"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-5xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From operating systems to AI applications, here are some projects 
              that showcase my technical depth and creativity.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
        </ScrollAnimate>

        {/* Category Filter */}
        <ScrollAnimate delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollAnimate>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollAnimate key={project.title} delay={150 + (index % 4) * 75}>
              <article
                className={cn(
                  "group p-6 rounded-2xl bg-card border border-border/50",
                  "hover-lift h-full"
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FolderGit2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                    {project.gitlab && (
                      <a
                        href={project.gitlab}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label={`View ${project.title} on GitLab`}
                      >
                        <Gitlab className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <TechBadge key={tech} name={tech} className="text-xs" />
                  ))}
                </div>
              </article>
            </ScrollAnimate>
          ))}
        </div>

        {/* View All Link */}
        <ScrollAnimate delay={400}>
          <div className="text-center mt-10">
            <Button variant="outline" className="rounded-full gap-2" asChild>
              <a
                href="https://github.com/harishtpj?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                View All on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
