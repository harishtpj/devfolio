use super::{ScrollAnimate, shared::SectionHeading};
use icondata::{FaLinkedinInBrands, SiGithub};
use leptos::prelude::*;
use leptos_icons::Icon;
use lucide_leptos::Globe;

#[component]
pub fn ContactCard(
    icon: &'static str,
    label: &'static str,
    value: &'static str,
    href: Option<&'static str>,
) -> impl IntoView {
    let content = move || match icon {
        "github" => view! { <Icon icon=SiGithub width="20" height="20" /> }.into_any(),
        "linkedin" => view! { <Icon icon=FaLinkedinInBrands width="20" height="20" /> }.into_any(),
        _ => view! { <Globe /> }.into_any(),
    };
    let value_view = if let Some(url) = href {
        view! {
            <a href=url target="_blank" class="font-medium hover:text-primary transition-colors">
                {value}
            </a>
        }
        .into_any()
    } else {
        view! { <p class="font-medium">{value}</p> }.into_any()
    };
    view! {
        <div class="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover-lift">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {content()}
            </div>
            <div>
                <p class="text-sm text-muted-foreground">{label}</p>
                {value_view}
            </div>
        </div>
    }
}

#[component]
pub fn Contact() -> impl IntoView {
    view! {
        <section id="contact" class="py-20 px-4 bg-card/30">
            <div class="container max-w-4xl">
                <ScrollAnimate>
                    <SectionHeading
                        title="Get in Touch"
                        subtitle=Some(
                            "Interested in collaborating or have a project in mind? I'd love to hear from you!",
                        )
                    />
                </ScrollAnimate>
            <div class="grid md:grid-cols-2 gap-8">
                <ScrollAnimate delay=100 direction="left">
                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        class="space-y-4 p-6 rounded-2xl bg-card border border-border/50"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p class="hidden">
                            <label>
                                "Don’t fill this out if you're human: "
                                <input name="bot-field" />
                            </label>
                        </p>
                        <h3 class="text-lg font-semibold">"Send a Message"</h3>
                        <label class="block text-sm font-medium" for="contact-name">"Name"</label>
                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            class="w-full h-11 px-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <label class="block text-sm font-medium" for="contact-email">"Email"</label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            class="w-full h-11 px-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <label class="block text-sm font-medium" for="contact-message">"Message"</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            required
                            rows="5"
                            class="w-full p-3 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                        ></textarea>
                        <button
                            type="submit"
                            class="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-primary-foreground shadow-glow hover:bg-primary/90"
                        >
                            "Send Message"
                        </button>
                    </form>
                </ScrollAnimate>
                <ScrollAnimate delay=200 direction="right">
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold mb-4">"Connect With Me"</h3>
                        <ScrollAnimate delay=250 direction="right">
                            <ContactCard
                                icon="github"
                                label="GitHub"
                                value="@harishtpj"
                                href=Some("https://github.com/harishtpj")
                            />
                        </ScrollAnimate>
                        <ScrollAnimate delay=325 direction="right">
                            <ContactCard
                                icon="linkedin"
                                label="LinkedIn"
                                value="in/harishtpj"
                                href=Some("https://linkedin.com/in/harishtpj")
                            />
                        </ScrollAnimate>
                        <ScrollAnimate delay=400 direction="right">
                            <ContactCard
                                icon="globe"
                                label="My Blog"
                                value="harishtpj.github.io"
                                href=Some("https://harishtpj.github.io")
                            />
                        </ScrollAnimate>
                    </div>
                </ScrollAnimate>
            </div>
            </div>
        </section>
    }
}
