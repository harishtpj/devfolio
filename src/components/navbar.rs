use leptos::prelude::*;
use lucide_leptos::{Menu, Moon, Sun, X};
use wasm_bindgen::{JsCast, closure::Closure};

#[component]
pub fn Navbar() -> impl IntoView {
    let (open, set_open) = signal(false);
    let initial_dark = web_sys::window()
        .and_then(|window| window.document())
        .and_then(|document| document.document_element())
        .is_some_and(|root| root.class_list().contains("dark"));
    let (dark, set_dark) = signal(initial_dark);
    let (scrolled, set_scrolled) = signal(false);
    let links = [
        ("#about", "About"),
        ("#skills", "Skills"),
        ("#projects", "Projects"),
        // ("#experience", "Experience"),
        ("#certifications", "Certifications"),
        ("#education", "Education"),
        ("#contact", "Contact"),
        ("https://harishtpj.github.io", "Blog"),
    ];
    Effect::new(move |_| {
        let Some(window) = web_sys::window() else {
            return;
        };
        set_scrolled.set(window.scroll_y().unwrap_or_default() > 50.0);
        let setter = set_scrolled;
        let callback = Closure::wrap(Box::new(move |_event: web_sys::Event| {
            if let Some(window) = web_sys::window() {
                setter.set(window.scroll_y().unwrap_or_default() > 50.0);
            }
        }) as Box<dyn FnMut(web_sys::Event)>);
        let _ =
            window.add_event_listener_with_callback("scroll", callback.as_ref().unchecked_ref());
        let _ = StoredValue::new_local((window, callback));
    });

    let toggle_theme = move |_| {
        let next = !dark.get();
        set_dark.set(next);
        if let Some(document) = web_sys::window().and_then(|window| window.document()) {
            let _ = document.document_element().map(|root| {
                if next {
                    root.class_list().add_1("dark")
                } else {
                    root.class_list().remove_1("dark")
                }
            });
        }
    };
    view! {
        <header class=move || {
            if scrolled.get() {
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-soft"
            } else {
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
            }
        }>
            <nav class="container max-w-5xl mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <a
                        href="#"
                        class="text-xl font-display font-bold text-foreground hover:text-primary transition-colors"
                    >
                        "HK"
                        <span class="text-primary">"."</span>
                    </a>
                    <div class="hidden md:flex items-center gap-1">
                        <ul class="flex items-center gap-1">
                            {links
                                .iter()
                                .map(|(href, label)| {
                                    view! {
                                        <li>
                                            <a
                                                href=*href
                                                class="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                                            >
                                                {*label}
                                            </a>
                                        </li>
                                    }
                                })
                                .collect_view()}
                        </ul>
                        <button
                            class="ml-2 h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
                            on:click=toggle_theme
                            aria-label="Toggle theme"
                        >
                            {move || {
                                if dark.get() {
                                    view! { <Sun /> }.into_any()
                                } else {
                                    view! { <Moon /> }.into_any()
                                }
                            }}
                        </button>
                    </div>
                    <div class="flex items-center gap-2 md:hidden">
                        <button
                            class="h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-accent"
                            on:click=toggle_theme
                            aria-label="Toggle theme"
                        >
                            {move || {
                                if dark.get() {
                                    view! { <Sun /> }.into_any()
                                } else {
                                    view! { <Moon /> }.into_any()
                                }
                            }}
                        </button>
                        <button
                            class="h-10 w-10 inline-flex items-center justify-center rounded-md hover:bg-accent"
                            on:click=move |_| set_open.update(|value| *value = !*value)
                            aria-label="Toggle menu"
                        >
                            {move || {
                                if open.get() {
                                    view! { <X /> }.into_any()
                                } else {
                                    view! { <Menu /> }.into_any()
                                }
                            }}
                        </button>
                    </div>
                </div>
                <div class=move || {
                    if open.get() {
                        "md:hidden overflow-hidden transition-all duration-300 max-h-96 mt-4"
                    } else {
                        "md:hidden overflow-hidden transition-all duration-300 max-h-0"
                    }
                }>
                    <ul class="flex flex-col gap-1 py-4">
                        {links
                            .iter()
                            .map(|(href, label)| {
                                let close = set_open;
                                view! {
                                    <li>
                                        <a
                                            href=*href
                                            on:click=move |_| close.set(false)
                                            class="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                                        >
                                            {*label}
                                        </a>
                                    </li>
                                }
                            })
                            .collect_view()}
                    </ul>
                </div>
            </nav>
        </header>
    }
}
