use super::{ScrollAnimate, shared::SectionHeading};
use leptos::prelude::*;
use lucide_leptos::{GraduationCap, Trophy};

#[component]
pub fn Education() -> impl IntoView {
    let education = [
        (
            "B.Tech Computer Science & Engineering",
            "Vellore Institute of Technology, Chennai",
            "2025 - Present (Second Year)",
            "CGPA: 9.49/10",
            None,
        ),
        (
            "CBSE Grade 12",
            "Velammal New-Gen School, Surapet",
            "2025",
            "492/500 • 2 Centums (CS: 100, Chemistry: 100)",
            Some("Math: 99 | Physics: 98 | English: 95 | JEE Mains: 95.187 percentile"),
        ),
        (
            "CBSE Grade 10",
            "Velammal New-Gen School, Madhavaram",
            "2023",
            "471/500 • 1 Centum (Tamil: 100)",
            Some("Math: 98 | Social: 95 | Science: 94 | English: 84"),
        ),
    ];
    view! {
        <section id="education" class="py-20 px-4">
            <div class="container max-w-5xl">
                <ScrollAnimate>
                    <SectionHeading title="Education" subtitle=None />
                </ScrollAnimate>
                <div class="relative">
                    <div class="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>
                    <div class="space-y-8">
                        {education
                            .into_iter()
                            .map(|(degree, institution, period, highlight, details)| {
                                view! {
                                    <ScrollAnimate delay=100 direction="left">
                                        <div class="relative pl-0 md:pl-20">
                                            <div class="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                                            <div class="p-6 rounded-2xl bg-card border border-border/50 hover-lift">
                                                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                                    <div class="flex items-start gap-4">
                                                        <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                            <GraduationCap />
                                                        </div>
                                                        <div>
                                                            <h3 class="text-lg font-semibold">{degree}</h3>
                                                            <p class="text-muted-foreground">{institution}</p>
                                                        </div>
                                                    </div>
                                                    <span class="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                                                        {period}
                                                    </span>
                                                </div>
                                                <div class="ml-0 sm:ml-16 space-y-2">
                                                    <div class="flex items-center gap-2">
                                                        <span class="text-primary"><Trophy /></span>
                                                        <span class="font-medium text-primary">{highlight}</span>
                                                    </div>
                                                    {details
                                                        .map(|text| {
                                                            view! {
                                                                <p class="text-sm text-muted-foreground">{text}</p>
                                                            }
                                                        })}
                                                </div>
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
