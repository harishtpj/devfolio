use super::{ScrollAnimate, shared::SectionHeading};
use leptos::prelude::*;
use lucide_leptos::{Award, ExternalLink, FileBadge};

#[component]
pub fn Certifications() -> impl IntoView {
    let certifications = [
        (
            "Junior Grade Typewriting English",
            "Government of Tamil Nadu",
            None,
        ),
        (
            "OCP: Java SE 11 Developer",
            "Oracle",
            Some(
                "https://catalog-education.oracle.com/ords/certview/sharebadge_m?id=8B47CBDAD49211772C17D63751A47529BEC333A111AF14D23ECFE64712F01E95",
            ),
        ),
        (
            "Introduction to Programming with R",
            "CS50 - Harvard University",
            Some(
                "https://certificates.cs50.io/1859cb67-cc59-4447-beb7-a1ef0d155cee.pdf?size=letter",
            ),
        ),
        (
            "Cisco C++ Essentials",
            "Cisco Networking Academy",
            Some("https://www.credly.com/badges/15423c42-6b27-4fa9-a65f-c178af0a0f4b/"),
        ),
        (
            "AWS Certified Cloud Practitioner",
            "Amazon Web Services",
            Some("https://www.credly.com/badges/6586f3eb-b199-443c-94b7-1820e46f6522/"),
        ),
        (
            "Basic Python Programming",
            "UpGrad",
            Some("https://www.credential.net/641ff180-90c4-462c-82ce-872adc519ca4#acc.LTJDkc3a"),
        ),
        (
            "Core Java Basics",
            "UpGrad",
            Some(
                "https://upgrad.certificate.givemycertificate.com/c/96c2a528-fd78-4c89-9f08-c62459c99c42",
            ),
        ),
        (
            "AI in Real World",
            "UpGrad",
            Some(
                "https://upgrad.certificate.givemycertificate.com/c/95b42cff-14a3-414c-8451-cabd3ff3c471",
            ),
        ),
        (
            "Database Design with MySQL",
            "UpGrad",
            Some(
                "https://upgrad.certificate.givemycertificate.com/c/217fadfd-a61e-4eb2-8c33-95dcc5ab6ffb",
            ),
        ),
        (
            "Pandas Basics",
            "Kaggle",
            Some("https://www.kaggle.com/learn/certification/harishtpj/pandas"),
        ),
    ];
    let hackathons = [
        (
            "MicroCraft - ArcNight Hackathon 2026",
            "A 24-hour flagship hackathon organized as part of MicroCraft 2026. Built Verifolium",
            None,
        ),
        (
            "Agentic AI - The Future of Autonomous Agents",
            "Workshop conducted at VITC. Learned about AI agents and their applications.",
            Some("https://harishtpj.github.io/docs/Certificate_AgenticAI.pdf"),
        ),
        (
            "DecodeX 2025",
            "A competitive coding event held as part of TechnoVIT '25. Secured a spot in the Top 10.",
            Some("https://harishtpj.github.io/docs/Certificate_DecodeX.pdf"),
        ),
        (
            "Bit-n-Build Hackathon 2025",
            "A Statewide Hackathon conducted by FRCRCE in association with GDG. Built Risonanza",
            Some("https://unstop.com/certificate-preview/82d621d9-6978-4194-ac25-1178ab05cfcc"),
        ),
    ];
    let cards = |items: Vec<(&'static str, &'static str, Option<&'static str>)>| {
        view! {
            <div class="grid sm:grid-cols-2 gap-4">
                {items
                    .into_iter()
                    .enumerate()
                    .map(|(index, (name, issuer, link))| {
                        view! {
                            <ScrollAnimate delay=100 + index as u32 * 75 direction="left">
                                <div class="p-4 rounded-xl bg-card border border-border/50 hover-lift group">
                                    <div class="flex items-start justify-between gap-3">
                                        <div class="flex items-start gap-3 flex-1">
                                            <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <span class="font-medium block">{name}</span>
                                                <span class="text-sm text-muted-foreground">{issuer}</span>
                                            </div>
                                        </div>
                                        {link
                                            .map(|url| {
                                                view! {
                                                    <a
                                                        href=url
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        class="p-2 opacity-60 group-hover:opacity-100 text-primary"
                                                        title="View Certificate"
                                                    >
                                                        <ExternalLink />
                                                    </a>
                                                }
                                            })}
                                    </div>
                                </div>
                            </ScrollAnimate>
                        }
                    })
                    .collect_view()}
            </div>
        }
    };
    view! {
        <section id="certifications" class="py-20 px-4">
            <div class="container max-w-4xl">
                <ScrollAnimate>
                    <SectionHeading title="Certifications" subtitle=None />
                </ScrollAnimate>
                <ScrollAnimate delay=100 direction="left">
                    <div class="flex items-center gap-3 mb-8">
                        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Award />
                        </div>
                        <h3 class="text-xl font-semibold">"Professional Credentials"</h3>
                    </div>
                </ScrollAnimate>
                {cards(certifications.to_vec())}
                <ScrollAnimate delay=100 direction="left">
                    <div class="flex items-center gap-3 mb-8 pt-10">
                        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <FileBadge />
                        </div>
                        <h3 class="text-xl font-semibold">"Hackathons & Workshops"</h3>
                    </div>
                </ScrollAnimate>
                {cards(hackathons.to_vec())}
            </div>
        </section>
    }
}
