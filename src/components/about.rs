use super::{ScrollAnimate, shared::SectionHeading};
use leptos::prelude::*;
use lucide_leptos::{Code, Cpu, Globe, Sparkles};

#[component]
pub fn About() -> impl IntoView {
    let highlights = [
        (
            "20+ Languages",
            "Proficient in diverse programming languages from low-level Assembly to modern TypeScript",
            "Languages",
        ),
        (
            "Systems Expert",
            "Built operating systems, DB engines, compilers, and network servers from scratch",
            "System",
        ),
        (
            "Full-Stack Dev",
            "End-to-end web development with modern frameworks and databases",
            "Web",
        ),
        (
            "AI/ML Builder",
            "Created AI-powered assistive technologies and NLP applications",
            "AI/ML",
        ),
    ];
    view! {
        <section id="about" class="py-20 px-4">
            <div class="container max-w-5xl">
                <ScrollAnimate>
                    <SectionHeading title="About Me" subtitle=None />
                </ScrollAnimate>
                <div class="grid md:grid-cols-2 gap-10 items-center">
                    <ScrollAnimate delay=100>
                        <div class="space-y-6">
                        <p class="text-lg text-muted-foreground leading-relaxed">
                            "I'm a passionate full-stack developer with programming experience since 2017, starting with C. My journey has taken me through the depths of systems programming to the heights of modern web development."
                        </p>
                        <p class="text-lg text-muted-foreground leading-relaxed">
                            "Currently pursuing "
                            <strong class="text-foreground">
                                "B.Tech in Computer Science & Engineering"
                            </strong> " at VIT Chennai with a CGPA of "
                            <strong class="text-foreground">"9.49"</strong>
                            ". I'm deeply interested in "
                            <strong class="text-foreground">"Quantum Computing"</strong> ", "
                            <strong class="text-foreground">"Artificial Intelligence"</strong>
                            ", and pushing the boundaries of what's possible with code."
                        </p>
                        <p class="text-lg text-muted-foreground leading-relaxed">
                            "From building custom operating systems to creating AI-powered assistive technologies, I love turning complex ideas into elegant, working solutions."
                        </p>
                        </div>
                    </ScrollAnimate>
                    <div class="grid grid-cols-2 gap-4">
                        {highlights
                            .into_iter()
                            .enumerate()
                            .map(|(index, (title, description, icon_name))| {
                                view! {
                                    <ScrollAnimate delay=150 + index as u32 * 100 direction="up">
                                        <div class="p-5 rounded-2xl bg-card border border-border/50 hover-lift h-full">
                                            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 shrink-0">
                                                {match icon_name {
                                                    "System" => view! { <span class="inline-flex w-5 h-5 items-center justify-center text-primary [&>svg]:w-5 [&>svg]:h-5"><Cpu /></span> }.into_any(),
                                                    "Web" => view! { <span class="inline-flex w-5 h-5 items-center justify-center text-primary [&>svg]:w-5 [&>svg]:h-5"><Globe /></span> }.into_any(),
                                                    "AI/ML" => view! { <span class="inline-flex w-5 h-5 items-center justify-center text-primary [&>svg]:w-5 [&>svg]:h-5"><Sparkles /></span> }.into_any(),
                                                    _ => view! { <span class="inline-flex w-5 h-5 items-center justify-center text-primary [&>svg]:w-5 [&>svg]:h-5"><Code /></span> }.into_any(),
                                                }}
                                            </div>
                                            <h3 class="font-semibold text-foreground mb-1">{title}</h3>
                                            <p class="text-sm text-muted-foreground">{description}</p>
                                        </div>
                                    </ScrollAnimate>
                                }
                            })
                            .collect_view()}
                    </div>
                </div>
            </div>
        </section>
    }
}
