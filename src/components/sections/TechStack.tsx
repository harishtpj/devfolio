import { TechGroup } from "@/components/ui/tech-badge";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const techCategories = [
  {
    title: "Core Languages",
    techs: ["C", "C++", "Python", "Java", "Go", "Rust"],
  },
  {
    title: "Web Development",
    techs: ["HTML5", "CSS3", "PHP", "JavaScript", "TypeScript", "REST APIs", "Vue", "React"],
  },
  {
    title: "Web Frameworks",
    techs: ["Django", "Rails", "Laravel", "Flask", "FastAPI", "Sinatra"]
  },
  {
    title: "App Development",
    techs: ["Kotlin", "C#"],
  },
  {
    title: "Databases",
    techs: ["Oracle", "MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis"],
  },
  {
    title: "Systems & Hardware",
    techs: ["Assembly", "Arduino", "Microbit", "ESP32", "Linux"],
  },
  {
    title: "AI & Machine Learning",
    techs: ["AI/ML", "Computer Vision", "NLP"],
  },
  {
    title: "Tools & Platforms",
    techs: ["Git", "GitHub", "Docker", "AWS", "VMware"],
  },
  {
    title: "Scripting & Automation",
    techs: ["Ruby", "Perl", "Lua", "Bash"],
  },
  {
    title: "Functional Programming",
    techs: ["Haskell", "Erlang", "Elixir", "Prolog", "LISP"],
  },
  {
    title: "Scientific, Mathematical & Quantum Computing",
    techs: ["R", "MATLAB", "Julia", "Qiskit", "NumPy", "Pandas", "Tidyverse"],
  },
  {
    title: "Working Experience",
    techs: ["Fortran", "COBOL", "Ada", "Pascal", "QBASIC", "Smalltalk"]
  },
];

export function TechStack() {
  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container max-w-5xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Tech Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit spanning systems programming, web development, 
              databases, and emerging technologies.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <ScrollAnimate key={category.title} delay={100 + index * 75}>
              <TechGroup
                title={category.title}
                techs={category.techs}
              />
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
