mod components;
mod data;

use components::{
    About,
    Certifications,
    Contact,
    Education, //Experience,
    Footer,
    Hero,
    Navbar,
    Projects,
    SocialLinks,
    TechStack,
};
use leptos::prelude::*;

#[component]
fn App() -> impl IntoView {
    view! {
        <div class="min-h-screen bg-background">
            <Navbar />
            <main>
                <Hero />
                <About />
                <TechStack />
                <Projects />
                // <Experience />
                <Certifications />
                <Education />
                <SocialLinks />
                <Contact />
            </main>
            <Footer />
        </div>
    }
}

fn main() {
    mount_to_body(App);
}
