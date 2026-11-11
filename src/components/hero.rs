use crate::data::ROLES;
use gloo_timers::future::TimeoutFuture;
use icondata::{FaLinkedinInBrands, SiGithub};
use leptos::prelude::*;
use leptos_icons::Icon;
use lucide_leptos::{FileText, MapPin};

#[component]
pub fn Hero() -> impl IntoView {
    let (display, set_display) = signal(String::new());
    leptos::task::spawn_local(async move {
        loop {
            for full in ROLES {
                let characters = full.chars().collect::<Vec<_>>();
                for length in 1..=characters.len() {
                    set_display.set(characters[..length].iter().collect());
                    TimeoutFuture::new(80).await;
                }
                TimeoutFuture::new(2500).await;
                for length in (0..characters.len()).rev() {
                    set_display.set(characters[..length].iter().collect());
                    TimeoutFuture::new(40).await;
                }
                TimeoutFuture::new(250).await;
            }
        }
    });
    view! {
        <section class="min-h-[90vh] flex items-center justify-center py-20 px-4">
            <div class="container max-w-4xl">
                <div class="flex flex-col md:flex-row items-center gap-12">
                    <div class="animate-fade-in">
                        <div class="relative">
                            <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                                <img
                                    src="https://avatars.githubusercontent.com/u/79755784?v=4"
                                    alt="M.V. Harish Kumar"
                                    class="w-full h-full object-cover"
                                />
                            </div>
                            <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse-soft">
                                <span class="text-primary-foreground text-xs">"👋"</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 text-center md:text-left space-y-6">
                        <div class="space-y-3 animate-fade-in-up">
                            <p class="text-muted-foreground font-medium">"Hi there, I'm"</p>
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
                                "M.V. Harish Kumar"
                            </h1>
                            <p class="text-xl md:text-2xl text-primary font-semibold h-8">
                                {move || {
                                    view! {
                                        <>{display.get()}<span class="animate-pulse">"|"</span></>
                                    }
                                }}
                            </p>
                        </div>
                        <p class="text-muted-foreground text-lg max-w-xl animate-fade-in-up stagger-1 opacity-0">
                            "Deep expertise in 20+ programming languages, from low-level systems to modern web development. Passionate about building compilers, operating systems, database engines and AI-powered applications."
                        </p>
                        <div class="flex items-center justify-center md:justify-start gap-2 text-muted-foreground animate-fade-in-up stagger-2 opacity-0">
                            <MapPin />
                            <span>"Chennai, Tamil Nadu, India"</span>
                        </div>
                        <div class="flex items-center justify-center md:justify-start gap-3 animate-fade-in-up stagger-3 opacity-0">
                            <a
                                href="https://github.com/harishtpj"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Icon icon=SiGithub width="20" height="20" />
                            </a>
                            <a
                                href="https://linkedin.com/in/harishtpj"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="p-3 rounded-full bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Icon icon=FaLinkedinInBrands width="20" height="20" />
                            </a>
                        </div>
                        <div class="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-up stagger-4 opacity-0">
                            <a
                                href="#projects"
                                class="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
                            >
                                "View My Work"
                            </a>
                            <a
                                href="https://harishtpj.github.io/docs/HK_Resume.pdf"
                                target="_blank"
                                class="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full border border-input bg-background hover:bg-accent"
                            >
                                <FileText />
                                "View my Resume"
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}
