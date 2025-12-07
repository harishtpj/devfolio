import { Briefcase } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const experiences = [
  {
    title: "Self-Directed Developer",
    period: "2017 - Present",
    description: "Independent software development across multiple domains",
    highlights: [
      "Built 50+ projects spanning systems programming, web development, and AI/ML",
      "Developed custom operating systems, compilers, and network servers",
      "Created AI-powered assistive technologies for disabled individuals",
      "Active open-source contributor with 51 public repositories",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container max-w-4xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollAnimate>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Professional Background</h3>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollAnimate key={exp.title} delay={100 + index * 100}>
                <div className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />
                  
                  <div className="p-5 rounded-2xl bg-card border border-border/50 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
