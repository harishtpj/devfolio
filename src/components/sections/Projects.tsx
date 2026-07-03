import { useState } from "react";
import { Github, Gitlab, ExternalLink, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/ui/tech-badge";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { cn } from "@/lib/utils";
import { DynamicIcon } from "../ui/dynamic-icon";

interface Project {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  gitlab?: string;
  live?: string;
  category: string[];
  icon?: string;
}

const projects: Project[] = [
  {
    title: "MKS - Minimal Kernel System",
    description: "CLI-based operating system kernel with memory management and system calls, built from scratch.",
    techs: ["C", "Assembly"],
    github: "https://github.com/harishtpj/MKS",
    category: ["Systems"],
    icon: "System"
  },
  {
    title: "IndianSQL - DBMS Engine",
    description: "A simple, file based DBMS engine with SQL query and network access support, built from scratch.",
    techs: ["Go"],
    github: "https://github.com/harishtpj/IndianSQL",
    category: ["Systems", "Networking", "Compilers"],
    icon: "DB"
  },
  {
    title: "ResumeCanvas - Portfolio Builder",
    description: "An AI powered portfolio builder that automatically generates dynamic portfolios from static resumes.",
    techs: ["PHP", "PostgreSQL", "Laravel", "Vue", "TailwindCSS", "Gemini"],
    github: "https://github.com/harishtpj/ResumeCanvas",
    live: "https://resumecanvas-9sjc.onrender.com/",
    category: ["Web Development", "Applications"],
    icon: "Web"
  },
  {
    title: "Verifolium - Leaf Doctor",
    description: "AI-powered web application that diagnoses plant leaf diseases and provides specialized care instructions.",
    techs: ["Ruby", "PostgreSQL", "Rails", "React", "TailwindCSS", "Tensorflow", "Gemini"],
    github: "https://github.com/RocxRam/VeriFolium---Leaf-Monitor",
    live: "https://verifolium-leaf-monitor-production.up.railway.app/",
    category: ["Web Development", "AI/ML", "Applications"],
    icon: "Web"
  },
  {
    title: "RawNN - Minimalistic Neural Network Framework",
    description: "A lightweight neural network framework built from scratch, supporting basic layers and training algorithms.",
    techs: ["Python", "NumPy", "AI/ML"],
    github: "https://github.com/harishtpj/RawNN",
    category: ["AI/ML"],
    icon: "AI/ML"
  },
  {
    title: "CineMood - Movie Recommendation System",
    description: "AI-powered movie recommendation system that suggests films based on user mood and preferences.",
    techs: ["Ruby", "PostgreSQL", "Rails", "React", "TailwindCSS", "AI/ML"],
    github: "https://github.com/harishtpj/CineMood",
    live: "https://cinemood-ai.up.railway.app/",
    category: ["Web Development", "AI/ML", "Applications", "Gemini"],
    icon: "Web"
  },
  {
    title: "boolR - Boolean Expression Analyzer",
    description: "A suite of tools for Boolean expression analysis and minimization in R",
    techs: ["R", "Tidyverse"],
    github: "https://github.com/harishtpj/boolR",
    category: ["Tools"],
    icon: "Tool"
  },
  {
    title: "QTVP - Quantum Teleportation VPN Protocol",
    description: "A theoretical VPN protocol leveraging quantum teleportation principles for secure data transmission.",
    techs: ["Python", "Qiskit", "FastAPI"],
    github: "https://github.com/hecker-go-brrr/QTVP",
    category: ["Networking", "Quantum Computing"],
    icon: "Protocol"
  },
  {
    title: "thinFTP - FTP Server",
    description: "Fully functional FTP server with multi-client support and security features.",
    techs: ["Python"],
    github: "https://github.com/harishtpj/thinftp",
    category: ["Networking"],
    icon: "Protocol"
  },
  {
    title: "AutoREST - API Automator",
    description: "Automation tool for REST API testing and management with comprehensive workflow capabilities.",
    techs: ["Ruby"],
    github: "https://github.com/harishtpj/AutoREST",
    category: ["Networking", "Tools"],
    icon: "Protocol"
  },
  {
    title: "MiME - Mail Server System",
    description: "Complete SMTP mail server with message routing and authentication capabilities.",
    techs: ["C"],
    github: "https://github.com/harishtpj/MiME",
    category: ["Networking"],
    icon: "Protocol"
  },
  {
    title: "GoDNS - DNS Server",
    description: "Custom DNS server with domain name resolution and multiple record type support.",
    techs: ["Go"],
    github: "https://github.com/harishtpj/GoDNS",
    category: ["Networking"],
    icon: "Protocol"
  },
  {
    title: "AI Assistant for Disabled People",
    description: "AI-powered assistant using Micro:bit that recognizes individuals and reads image descriptions for visually impaired users.",
    techs: ["Python", "AI/ML", "Microbit"],
    category: ["AI/ML"],
    icon: "AI/ML"
  },
  {
    title: "Voice-Based Excel Data Assistant",
    description: "Python application that answers questions based on Excel data using NLP and speech synthesis.",
    techs: ["Python", "AI/ML", "NLP"],
    github: "https://github.com/harishtpj/Family-AI",
    category: ["AI/ML"],
    icon: "AI/ML"
  },
  {
    title: "Risonanza",
    description: "An automated, reliable stress and emotion detection from voice audio, enabling real-time analysis with privacy, efficiency, and flexibility.",
    techs: ["Python", "AI/ML"],
    github: "https://github.com/harishtpj/Risonanza",
    category: ["AI/ML"],
    icon: "AI/ML"
  },
  {
    title: "HPI",
    description: "A simple, dynamically-typed, procedural psuedocode interpreter.",
    techs: ["C++"],
    github: "https://github.com/harishtpj/HPI",
    category: ["Compilers"],
    icon: "Compiler"
  },
  {
    title: "Silk Language",
    description: "An Interpreted, Dynamically-typed, Object Oriented language with simple and modern syntax.",
    techs: ["C++"],
    github: "https://github.com/harishtpj/SilkLang",
    category: ["Compilers"],
    icon: "Compiler"
  },
  {
    title: "RAM-VM",
    description: "A RISC based processor virtual machine based on LC-3 computer architecture.",
    techs: ["C", "C++", "Python"],
    github: "https://github.com/harishtpj/RAM-VM-v2.0",
    category: ["Systems"],
    icon: "System"
  },
  {
    title: "Chip8 Emulator",
    description: "A simple Chip8 emulator built using Python and Pygame.",
    techs: ["Python"],
    github: "https://github.com/harishtpj/Chip8-CPU",
    category: ["Systems"],
    icon: "System"
  },
  {
    title: "Fidis",
    description: "A File-based Data store with a similar interface to Redis.",
    techs: ["Ruby"],
    github: "https://github.com/harishtpj/Fidis",
    category: ["Tools"],
    icon: "Tool"
  },
  {
    title: "Project Milk - ERP System",
    description: "Comprehensive ERP system for dairy management with inventory, sales, and customer relations.",
    techs: ["Oracle"],
    github: "https://github.com/harishtpj/Project-Milk",
    category: ["Enterprise"],
  },
  {
    title: "Cafeteria Management System",
    description: "Interactive cafeteria management system with menu, orders, and billing functionality.",
    techs: ["Python", "MySQL"],
    github: "https://github.com/harishtpj/Cafeteria-Management-System",
    category: ["Enterprise", "Applications"],
  },
  {
    title: "Shortly - URL Shortener",
    description: "A web application that shortens long URLs for easier sharing and tracking.",
    techs: ["Ruby", "PostgreSQL", "Rails", "TailwindCSS"],
    github: "https://github.com/harishtpj/shortly",
    category: ["Web Development", "Applications"],
    icon: "Web"
  },
  {
    title: "Devfolio",
    description: "My personal portfolio website showcasing projects and skills.",
    techs: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/harishtpj/devfolio",
    category: ["Web Development"],
    icon: "Web"
  },
  {
    title: "TaskMaster - Task Management App",
    description: "A web application to manage and track tasks efficiently.",
    techs: ["Vue", "TypeScript", "DaisyUI"],
    gitlab: "https://gitlab.com/harishtpj/taskmaster",
    category: ["Web Development"],
    icon: "Web"
  },
  {
    title: "Memoria - Simple Virtual Machine",
    description: "A simple virtual machine implementing SUBLEQ (URISC).",
    techs: ["Ada"],
    github: "https://github.com/harishtpj/Memoria",
    category: ["Systems"],
    icon: "System"
  },
  {
    title: "Calci",
    description: "A Modern, Fast compiled language with pascal-like syntax.",
    techs: ["Python", "C"],
    github: "https://github.com/harishtpj/Calci",
    category: ["Compilers"],
    icon: "Compiler"
  },
  {
    title: "MAthX - Max of Maths",
    description: "A Math Statement Based Language which compiles its code to C Language. Version 2 of Mathsel.",
    techs: ["Python", "C"],
    github: "https://github.com/harishtpj/MathX",
    category: ["Compilers"],
    icon: "Compiler"
  },
  {
    title: "Mathsel",
    description: "A Math Statement Based Language which compiles its code to C Language.",
    techs: ["Java", "C"],
    github: "https://github.com/harishtpj/Mathsel",
    category: ["Compilers"],
    icon: "Compiler"
  },
  {
    title: "Segra",
    description: "A simple reward-based smart bin system that encourages users to recycle by providing incentives.",
    techs: ["Python", "Django", "DaisyUI", "AI/ML"],
    github: "https://github.com/harishtpj/SegraWeb",
    live: "https://segra.pythonanywhere.com/",
    category: ["Web Development", "Applications"],
    icon: "Web"
  }
];

const categories = ["All", "Systems", "AI/ML", "Networking", "Compilers", "Enterprise", "Tools", "Applications", "Web Development", "Quantum Computing"];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory));

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
                    <DynamicIcon name={project.icon || "default"} className="w-6 h-6 text-primary" />
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
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label={"View Live Demo"}
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground" />
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
