import { Code2, Cpu, Globe, Sparkles } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const highlights = [
  {
    icon: Code2,
    title: "20+ Languages",
    description: "Proficient in diverse programming languages from low-level Assembly to modern TypeScript",
  },
  {
    icon: Cpu,
    title: "Systems Expert",
    description: "Built operating systems, compilers, and network servers from scratch",
  },
  {
    icon: Globe,
    title: "Full-Stack Dev",
    description: "End-to-end web development with modern frameworks and databases",
  },
  {
    icon: Sparkles,
    title: "AI/ML Builder",
    description: "Created AI-powered assistive technologies and NLP applications",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-5xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <ScrollAnimate delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with programming experience 
                since 2017, starting with C. My journey has taken me through the 
                depths of systems programming to the heights of modern web development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing <strong className="text-foreground">B.Tech in 
                Computer Science & Engineering</strong> at VIT Chennai. I'm deeply 
                interested in <strong className="text-foreground">Quantum Computing</strong>, 
                <strong className="text-foreground"> Artificial Intelligence</strong>, and 
                pushing the boundaries of what's possible with code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From building custom operating systems to creating AI-powered 
                assistive technologies, I love turning complex ideas into elegant, 
                working solutions.
              </p>
            </div>
          </ScrollAnimate>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <ScrollAnimate key={item.title} delay={150 + index * 100}>
                <div className="p-5 rounded-2xl bg-card border border-border/50 hover-lift h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
