use leptos::prelude::*;
use lucide_leptos::Briefcase;
use super::{ScrollAnimate, shared::SectionHeading};

const EXPERIENCES: &[(&str, &str, &str, &[&str])] = &[(
    "Self-Directed Developer",
    "2017 - Present",
    "Independent software development across multiple domains",
    &[
        "Built 50+ projects spanning systems programming, web development, and AI/ML",
        "Developed custom operating systems, compilers, and network servers",
        "Created AI-powered assistive technologies for disabled individuals",
        "Active open-source contributor with 51 public repositories",
    ],
)];

#[component]
pub fn Experience() -> impl IntoView {
    view! {
        <section id="experience" class="py-20 px-4 bg-card/30">
            <div class="container max-w-4xl">
                <ScrollAnimate>
                    <SectionHeading title="Experience" subtitle=None />
                </ScrollAnimate>
                <ScrollAnimate delay=100 direction="left">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Briefcase />
                        </div>
                        <h3 class="text-xl font-semibold">"Professional Background"</h3>
                    </div>
                </ScrollAnimate>

                <div class="relative">
                    <div class="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-border" />
                    <div class="space-y-8">
                        {EXPERIENCES
                            .iter()
                            .enumerate()
                            .map(|(index, (title, period, description, highlights))| {
                                view! {
                                    <ScrollAnimate delay=100 + index as u32 * 100>
                                        <div class="relative pl-12 md:pl-16">
                                            <div class="absolute left-2 md:left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md" />
                                            <div class="p-5 rounded-2xl bg-card border border-border/50 hover-lift">
                                                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                                    <h4 class="font-semibold text-lg">{*title}</h4>
                                                    <span class="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full w-fit">
                                                        {*period}
                                                    </span>
                                                </div>
                                                <p class="text-muted-foreground mb-4">{*description}</p>
                                                <ul class="space-y-2 text-muted-foreground">
                                                    {highlights
                                                        .iter()
                                                        .map(|highlight| {
                                                            view! {
                                                                <li class="flex items-start gap-2">
                                                                    <span class="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                    <span>{*highlight}</span>
                                                                </li>
                                                            }
                                                        })
                                                        .collect_view()}
                                                </ul>
                                            </div>
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
