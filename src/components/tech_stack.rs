use super::{
    ScrollAnimate,
    shared::{SectionHeading, TechBadge},
};
use leptos::prelude::*;

#[component]
pub fn TechStack() -> impl IntoView {
    let groups = [
        (
            "Core Languages",
            &["C", "C++", "Python", "Java", "Go", "Rust"][..],
        ),
        (
            "Web Development",
            &[
                "HTML5",
                "CSS3",
                "PHP",
                "JavaScript",
                "TypeScript",
                "REST APIs",
                "Vue",
                "React",
            ][..],
        ),
        (
            "Web Frameworks",
            &["Django", "Rails", "Laravel", "Flask", "FastAPI", "Sinatra"][..],
        ),
        ("App Development", &["Kotlin", "C#"][..]),
        (
            "Databases",
            &[
                "Oracle",
                "MySQL",
                "PostgreSQL",
                "SQLite",
                "MongoDB",
                "Redis",
                "Neo4j",
            ][..],
        ),
        (
            "Systems & Hardware",
            &["Assembly", "Arduino", "Microbit", "ESP32", "Linux"][..],
        ),
        (
            "AI & Machine Learning",
            &[
                "PyTorch",
                "Tensorflow",
                "Keras",
                "Scikit-learn",
                "Computer Vision",
                "NLP",
                "Langchain",
                "LLM",
            ][..],
        ),
        (
            "Tools & Platforms",
            &["Git", "GitHub", "Docker", "Podman", "AWS", "VMware"][..],
        ),
        (
            "Scripting & Automation",
            &["Ruby", "Perl", "Lua", "Bash"][..],
        ),
        (
            "Functional Programming",
            &["Haskell", "Erlang", "Elixir", "Prolog", "LISP"][..],
        ),
        (
            "Scientific, Mathematical & Quantum Computing",
            &[
                "R",
                "MATLAB",
                "Julia",
                "Qiskit",
                "NumPy",
                "Pandas",
                "Tidyverse",
            ][..],
        ),
        (
            "Working Experience",
            &["Fortran", "COBOL", "Ada", "Pascal", "QBASIC", "Smalltalk"][..],
        ),
    ];
    view! {
        <section id="skills" class="py-20 px-4 bg-card/30">
            <div class="container max-w-5xl">
                <ScrollAnimate>
                    <SectionHeading
                        title="Tech Stack"
                        subtitle=Some(
                            "A diverse toolkit spanning systems programming, web development, databases, and emerging technologies.",
                        )
                    />
                </ScrollAnimate>
                <div class="grid md:grid-cols-2 gap-8">
                    {groups
                        .into_iter()
                        .enumerate()
                        .map(|(index, (title, techs))| {
                            view! {
                                <ScrollAnimate delay=100 + index as u32 * 75>
                                    <div class="space-y-3">
                                        <h4 class="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                            {title}
                                        </h4>
                                        <div class="flex flex-wrap gap-2">
                                            {techs
                                                .iter()
                                                .map(|tech| view! { <TechBadge name=*tech /> })
                                                .collect_view()}
                                        </div>
                                    </div>
                                </ScrollAnimate>
                            }
                        })
                        .collect_view()}
                </div>
            </div>
        </section>
    }
}
