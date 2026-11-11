use super::{
    ScrollAnimate,
    shared::{SectionHeading, TechBadge, icon},
};
use crate::data::{CATEGORIES, PROJECTS};
use icondata::{FiExternalLink, SiGithub, SiGitlab};
use leptos::prelude::*;
use leptos_icons::Icon;

#[component]
pub fn Projects() -> impl IntoView {
    let (category, set_category) = signal("All");
    view! {
        <section id="projects" class="py-20 px-4">
            <div class="container max-w-5xl">
                <ScrollAnimate>
                    <SectionHeading
                        title="Featured Projects"
                        subtitle=Some(
                            "From operating systems to AI applications, here are some projects that showcase my technical depth and creativity.",
                        )
                    />
                </ScrollAnimate>
                <ScrollAnimate delay=100>
                    <div class="flex flex-wrap justify-center gap-2 mb-10">
                    {CATEGORIES
                        .iter()
                        .map(|item| {
                            view! {
                                <button
                                    class=move || {
                                        if category.get() == *item {
                                            "inline-flex items-center justify-center h-9 rounded-full px-3 text-sm font-medium bg-primary text-primary-foreground"
                                        } else {
                                            "inline-flex items-center justify-center h-9 rounded-full px-3 text-sm font-medium border border-input bg-background hover:bg-accent"
                                        }
                                    }
                                    on:click=move |_| set_category.set(*item)
                                >
                                    {*item}
                                </button>
                            }
                        })
                        .collect_view()}
                    </div>
                </ScrollAnimate>
                <div class="grid md:grid-cols-2 gap-6">
                    {move || {
                        PROJECTS
                            .iter()
                            .filter(|project| {
                                category.get() == "All"
                                    || project.categories.contains(&category.get())
                            })
                            .enumerate()
                            .map(|(index, project)| {
                                view! {
                                    <ScrollAnimate delay=150 + (index as u32 % 4) * 75 direction="up">
                                        <article class="group p-6 rounded-2xl bg-card border border-border/50 hover-lift h-full">
                                            <div class="flex items-start justify-between mb-4">
                                                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                    {icon(project.icon, "w-6 h-6 text-primary")}
                                                </div>
                                                <div class="flex gap-2">
                                                    {project
                                                        .github
                                                        .map(|url| {
                                                            view! {
                                                                <a
                                                                    href=url
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    class="p-2 rounded-lg hover:bg-muted transition-colors"
                                                                    aria-label="View on GitHub"
                                                                >
                                                                    <Icon icon=SiGithub width="20" height="20" style="color: hsl(var(--muted-foreground))" />
                                                                </a>
                                                            }
                                                        })}
                                                    {project
                                                        .gitlab
                                                        .map(|url| {
                                                            view! {
                                                                <a
                                                                    href=url
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    class="p-2 rounded-lg hover:bg-muted transition-colors"
                                                                    aria-label="View on GitLab"
                                                                >
                                                                    <Icon icon=SiGitlab width="20" height="20" style="color: hsl(var(--muted-foreground))" />
                                                                </a>
                                                            }
                                                        })}
                                                    {project
                                                        .live
                                                        .map(|url| {
                                                            view! {
                                                                <a
                                                                    href=url
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    class="p-2 rounded-lg hover:bg-muted transition-colors"
                                                                    aria-label="View live demo"
                                                                >
                                                                    <Icon icon=FiExternalLink width="20" height="20" style="color: hsl(var(--muted-foreground))" />
                                                                </a>
                                                            }
                                                        })}
                                                </div>
                                            </div>
                                            <h3 class="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p class="text-muted-foreground mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div class="flex flex-wrap gap-2">
                                                {project
                                                    .techs
                                                    .iter()
                                                    .map(|tech| view! { <TechBadge name=*tech /> })
                                                    .collect_view()}
                                            </div>
                                        </article>
                                    </ScrollAnimate>
                                }
                            })
                            .collect_view()
                    }}
                </div>
                <div class="text-center mt-10">
                    <a
                        href="https://github.com/harishtpj?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full border border-input bg-background hover:bg-accent"
                    >
                        <Icon icon=SiGithub width="16" height="16" />
                        "View All on GitHub"
                        <Icon icon=FiExternalLink width="16" height="16" />
                    </a>
                </div>
            </div>
        </section>
    }
}
