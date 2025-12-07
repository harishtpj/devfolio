import { GraduationCap, Trophy } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const education = [
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "Vellore Institute of Technology, Chennai",
    period: "2025 - Present (First Year)",
    highlight: "JEE Main: 95.187 percentile",
  },
  {
    degree: "CBSE Grade 12",
    institution: "Velammal New-Gen School, Surapet",
    period: "2025",
    highlight: "492/500 • 2 Centums (CS: 100, Chemistry: 100)",
    details: "Math: 99 | Physics: 98 | English: 95",
  },
  {
    degree: "CBSE Grade 10",
    institution: "Velammal New-Gen School, Madhavaram",
    period: "2023",
    highlight: "471/500 • 1 Centum (Tamil: 100)",
    details: "Math: 98 | Social: 95 | Science: 94 | English: 84",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-5xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollAnimate>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <ScrollAnimate key={edu.degree} delay={100 + index * 150}>
                <div className="relative pl-0 md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="p-6 rounded-2xl bg-card border border-border/50 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>

                    <div className="ml-0 sm:ml-16 space-y-2">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">{edu.highlight}</span>
                      </div>
                      {edu.details && (
                        <p className="text-sm text-muted-foreground">{edu.details}</p>
                      )}
                    </div>
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
