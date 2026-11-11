use icondata::{FaLinkedinInBrands, SiGithub};
use leptos::prelude::*;
use leptos_icons::Icon;

#[component]
pub fn Footer() -> impl IntoView {
    view! {
        <footer class="py-8 px-4 border-t border-border/50">
            <div class="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="text-sm text-muted-foreground">"© 2026 M.V. Harish Kumar."</div>
                <div class="flex items-center gap-4">
                    <a href="https://github.com/harishtpj" target="_blank" aria-label="GitHub">
                        <Icon icon=SiGithub width="20" height="20" />
                    </a>
                    <a
                        href="https://linkedin.com/in/harishtpj"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <Icon icon=FaLinkedinInBrands width="20" height="20" />
                    </a>
                </div>
            </div>
        </footer>
    }
}
