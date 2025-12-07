import { cn } from "@/lib/utils";
import { 
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript, SiGo, SiRust, SiRuby,
  SiPhp, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiMysql,
  SiOracle, SiRedis, SiSqlite, SiDocker, SiGit, SiLinux, SiArduino, SiAmazon,
  SiPerl, SiLua, SiHaskell, SiElixir, SiErlang, SiKotlin, SiFortran, SiJulia,
  SiGithub, SiGnubash, SiVuedotjs, SiClojure, SiOctave, SiAdafruit, SiDelphi,
  SiDjango, SiRubyonrails, SiFlask, SiFastapi, SiRubysinatra, SiLighthouse,
  SiQiskit, SiNumpy, SiPandas, SiTidyverse, SiLaravel
} from "react-icons/si";
import { FaJava, FaMicrochip, FaCode, FaDatabase, FaBrain, FaRProject, FaLanguage } from "react-icons/fa";
import { DiProlog } from "react-icons/di";
import { GiProcessor } from "react-icons/gi";
import { GrMicrofocus, GrVirtualMachine } from "react-icons/gr";
import { MdCamera } from "react-icons/md";
import { TbBrandCSharp } from "react-icons/tb";

interface TechBadgeProps {
  name: string;
  className?: string;
}

const techIcons: Record<string, { icon: React.ElementType; color: string }> = {
  // Core Languages
  "C": { icon: SiC, color: "#A8B9CC" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "Java": { icon: FaJava, color: "#ED8B00" },
  "C#": { icon: TbBrandCSharp, color: "#239120" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "PHP": { icon: SiPhp, color: "#777BB4" },
  "Go": { icon: SiGo, color: "#00ADD8" },
  "Ruby": { icon: SiRuby, color: "#CC342D" },
  "Rust": { icon: SiRust, color: "#000000" },
  "Perl": { icon: SiPerl, color: "#39457E" },
  "Kotlin": { icon: SiKotlin, color: "#7F52FF" },
  "Lua": { icon: SiLua, color: "#2C2D72" },
  "Julia": { icon: SiJulia, color: "#9558B2" },
  "Haskell": { icon: SiHaskell, color: "#5D4F85" },
  "Erlang": { icon: SiErlang, color: "#A90533" },
  "Elixir": { icon: SiElixir, color: "#4B275F" },
  "Fortran": { icon: SiFortran, color: "#734F96" },
  "Assembly": { icon: FaMicrochip, color: "#6E4C13" },
  "COBOL": { icon: GrMicrofocus, color: "#005CA5" },
  "Pascal": { icon: SiDelphi, color: "#EF4923" },
  "Prolog": { icon: DiProlog, color: "#74283C" },
  "QBASIC": { icon: FaCode, color: "#2C2C54" },
  "Smalltalk": { icon: SiLighthouse, color: "#596706" },
  "LISP": { icon: SiClojure, color: "#3FB68B" },
  "Ada": { icon: SiAdafruit, color: "#02F88C" },
  "R": { icon: FaRProject, color: "#1E4050" },
  "MATLAB": { icon: SiOctave, color: "#e69b10ff" },

  // Web Development
  "HTML5": { icon: SiHtml5, color: "#E34F26" },
  "CSS3": { icon: SiCss3, color: "#1572B6" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "Vue": { icon: SiVuedotjs, color: "#4FC08D" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "REST APIs": { icon: FaCode, color: "#009688" },
  "Django": { icon: SiDjango, color: "#092E20" },
  "Rails": { icon: SiRubyonrails, color: "#CC0000" },
  "Laravel": { icon: SiLaravel, color: "#FF2D20" },
  "Flask": { icon: SiFlask, color: "#000000" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "Sinatra": { icon: SiRubysinatra, color: "#cdc6b9" },

  // Databases
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "Oracle": { icon: SiOracle, color: "#F80000" },
  "Redis": { icon: SiRedis, color: "#DC382D" },
  "SQLite": { icon: SiSqlite, color: "#003B57" },

  // Tools & Platforms
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#181717" },
  "Linux": { icon: SiLinux, color: "#FCC624" },
  "Arduino": { icon: SiArduino, color: "#00979D" },
  "ESP32": { icon: GiProcessor, color: "#181717" },
  "AWS": { icon: SiAmazon, color: "#FF9900" },
  "Bash": { icon: SiGnubash, color: "#4EAA25" },
  "VMware": { icon: GrVirtualMachine, color: "#607078" },
  "Microbit": { icon: FaMicrochip, color: "#00ED00" },

  // AI/ML
  "AI/ML": { icon: FaBrain, color: "#FF6F00" },
  "Computer Vision": { icon: MdCamera, color: "#5C6BC0" },
  "NLP": { icon: FaLanguage, color: "#00BFA5" },

  // Scientific
  "Qiskit": { icon: SiQiskit, color: "#A66EFF" },
  "NumPy": { icon: SiNumpy, color: "#013243" },
  "Pandas": { icon: SiPandas, color: "#150458" },
  "Tidyverse": { icon: SiTidyverse, color: "#1A162D" },

  // Default
  "default": { icon: FaCode, color: "#6B7280" },
};

export function TechBadge({ name, className }: TechBadgeProps) {
  const tech = techIcons[name] || techIcons["default"];
  const Icon = tech.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full",
        "bg-card border border-border/50 text-sm font-medium",
        "transition-all duration-200 hover:shadow-soft hover:scale-105",
        "text-foreground/90",
        className
      )}
    >
      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: tech.color }} />
      <span>{name}</span>
    </span>
  );
}

interface TechGroupProps {
  title: string;
  techs: string[];
  className?: string;
}

export function TechGroup({ title, techs, className }: TechGroupProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}
