use leptos::prelude::*;
use leptos_icons::Icon;

fn tech_icon(name: &str) -> (icondata::Icon, &'static str) {
    use icondata::{
        AiOpenAIFilled, FaAwsBrands, FaBrainSolid, FaCodeSolid, FaDatabaseSolid, FaJavaBrands,
        FaLanguageSolid, FaMicrochipSolid, FaRProjectBrands, SiAdafruit, SiArduino, SiC, SiClojure,
        SiCplusplus, SiCss, SiDelphi, SiDjango, SiDocker, SiElixir, SiErlang, SiEspressif,
        SiFastapi, SiFlask, SiFortran, SiGit, SiGithub, SiGnubash, SiGo, SiHaskell, SiHtml5,
        SiJavascript, SiJulia, SiKeras, SiKotlin, SiLangchain, SiLaravel, SiLighthouse, SiLinux,
        SiLua, SiMicrobit, SiMongodb, SiMysql, SiNeo4j, SiNumpy, SiOctave, SiPandas, SiPerl, SiPhp,
        SiPodman, SiPostgresql, SiPython, SiPytorch, SiQiskit, SiReact, SiRedis, SiRuby,
        SiRubyonrails, SiRubysinatra, SiRust, SiScikitlearn, SiSqlite, SiTailwindcss, SiTensorflow,
        SiTidyverse, SiTypescript, SiVmware, SiVuedotjs, TbBrandCSharpOutline,
    };

    match name {
        "C" => (SiC, "#A8B9CC"),
        "C++" => (SiCplusplus, "#00599C"),
        "Python" => (SiPython, "#3776AB"),
        "Java" => (FaJavaBrands, "#ED8B00"),
        "C#" => (TbBrandCSharpOutline, "#239120"),
        "JavaScript" => (SiJavascript, "#F7DF1E"),
        "TypeScript" => (SiTypescript, "#3178C6"),
        "PHP" => (SiPhp, "#777BB4"),
        "Go" => (SiGo, "#00ADD8"),
        "Ruby" => (SiRuby, "#CC342D"),
        "Rust" => (SiRust, "#000000"),
        "Perl" => (SiPerl, "#39457E"),
        "Kotlin" => (SiKotlin, "#7F52FF"),
        "Lua" => (SiLua, "#2C2D72"),
        "Julia" => (SiJulia, "#9558B2"),
        "Haskell" => (SiHaskell, "#5D4F85"),
        "Erlang" => (SiErlang, "#A90533"),
        "Elixir" => (SiElixir, "#4B275F"),
        "Fortran" => (SiFortran, "#734F96"),
        "Assembly" => (FaMicrochipSolid, "#6E4C13"),
        "Pascal" => (SiDelphi, "#EF4923"),
        "Prolog" => (FaCodeSolid, "#74283C"),
        "COBOL" => (FaDatabaseSolid, "#005CA5"),
        "QBASIC" => (FaCodeSolid, "#2C2C54"),
        "Smalltalk" => (SiLighthouse, "#596706"),
        "LISP" => (SiClojure, "#3FB68B"),
        "Ada" => (SiAdafruit, "#02F88C"),
        "R" => (FaRProjectBrands, "#1E4050"),
        "MATLAB" => (SiOctave, "#E69B10"),
        "HTML5" => (SiHtml5, "#E34F26"),
        "CSS3" => (SiCss, "#1572B6"),
        "React" => (SiReact, "#61DAFB"),
        "Vue" => (SiVuedotjs, "#4FC08D"),
        "REST APIs" => (FaCodeSolid, "#009688"),
        "Django" => (SiDjango, "#092E20"),
        "Rails" => (SiRubyonrails, "#CC0000"),
        "Laravel" => (SiLaravel, "#FF2D20"),
        "Flask" => (SiFlask, "#000000"),
        "FastAPI" => (SiFastapi, "#009688"),
        "Sinatra" => (SiRubysinatra, "#CDC6B9"),
        "MongoDB" => (SiMongodb, "#47A248"),
        "PostgreSQL" => (SiPostgresql, "#4169E1"),
        "MySQL" => (SiMysql, "#4479A1"),
        "Oracle" => (FaDatabaseSolid, "#F80000"),
        "Redis" => (SiRedis, "#DC382D"),
        "SQLite" => (SiSqlite, "#003B57"),
        "Docker" => (SiDocker, "#2496ED"),
        "Podman" => (SiPodman, "#892CA0"),
        "Git" => (SiGit, "#F05032"),
        "GitHub" => (SiGithub, "#181717"),
        "Linux" => (SiLinux, "#FCC624"),
        "Arduino" => (SiArduino, "#00979D"),
        "ESP32" => (SiEspressif, "#181717"),
        "AWS" => (FaAwsBrands, "#FF9900"),
        "Bash" => (SiGnubash, "#4EAA25"),
        "VMware" => (SiVmware, "#607078"),
        "Microbit" => (SiMicrobit, "#00ED00"),
        "PyTorch" => (SiPytorch, "#EE4C2C"),
        "Tensorflow" => (SiTensorflow, "#FF6F00"),
        "Keras" => (SiKeras, "#D00000"),
        "Scikit-learn" => (SiScikitlearn, "#F7931E"),
        "Langchain" => (SiLangchain, "#09343B"),
        "LLM" => (AiOpenAIFilled, "#10A37F"),
        "NLP" => (FaLanguageSolid, "#00BFA5"),
        "Computer Vision" => (FaBrainSolid, "#5C6BC0"),
        "Qiskit" => (SiQiskit, "#A66EFF"),
        "NumPy" => (SiNumpy, "#013243"),
        "Pandas" => (SiPandas, "#150458"),
        "Tidyverse" => (SiTidyverse, "#1A162D"),
        "Neo4j" => (SiNeo4j, "#4581C3"),
        "TailwindCSS" => (SiTailwindcss, "#38B2AC"),
        _ => (FaCodeSolid, "#6B7280"),
    }
}

pub fn icon(name: &'static str, class: &'static str) -> impl IntoView {
    use icondata::{
        FaBrainSolid, FaGearsSolid, FaGlobeSolid, FaScrewdriverWrenchSolid, LuFolderGit2,
        SiCompilerexplorer, TbDatabaseOutline, TbProtocolOutline,
    };

    let (project_icon, style) = match name {
        "System" => (FaGearsSolid, "color: hsl(var(--primary))"),
        "DB" => (TbDatabaseOutline, "color: hsl(var(--primary))"),
        "Web" => (FaGlobeSolid, "color: hsl(var(--primary))"),
        "AI/ML" => (FaBrainSolid, "color: hsl(var(--primary))"),
        "Compiler" => (SiCompilerexplorer, "color: hsl(var(--primary))"),
        "Tool" => (FaScrewdriverWrenchSolid, "color: hsl(var(--primary))"),
        "Protocol" => (TbProtocolOutline, "color: hsl(var(--primary))"),
        _ => (LuFolderGit2, "color: hsl(var(--primary))"),
    };
    let size = if class.contains("w-5") { "20" } else { "24" };

    match name {
        _ => view! {
            <span class=class>
                <Icon icon=project_icon width=size height=size style=style />
            </span>
        }
        .into_any(),
    }
}

#[component]
pub fn TechBadge(name: &'static str) -> impl IntoView {
    let (tech, color) = tech_icon(name);
    view! {
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border/50 text-sm font-medium transition-all duration-200 hover:shadow-soft hover:scale-105 text-foreground/90">
            <span class="w-4 h-4 flex-shrink-0">
                <Icon icon=tech width="16" height="16" style=format!("color: {color}") />
            </span>
            <span>{name}</span>
        </span>
    }
}

#[component]
pub fn SectionHeading(title: &'static str, subtitle: Option<&'static str>) -> impl IntoView {
    view! {
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
            {subtitle
                .map(|text| {
                    view! { <p class="text-muted-foreground max-w-2xl mx-auto">{text}</p> }
                })}
            <div class="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>
    }
}
