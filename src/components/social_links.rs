use super::{ScrollAnimate, shared::SectionHeading};
use icondata::FaLinkedinInBrands;
use icondata::{
    SiCodechef, SiCodeforces, SiGithub, SiGitlab, SiHackerrank, SiInstagram, SiKaggle, SiLeetcode,
};
use leptos::prelude::*;
use leptos_icons::Icon;

#[component]
pub fn SocialLinks() -> impl IntoView {
    let links = [
        (
            "GitHub",
            "@harishtpj",
            "https://github.com/harishtpj",
            SiGithub,
            "hover:text-[#333] dark:hover:text-white",
        ),
        (
            "GitLab",
            "@harishtpj",
            "https://gitlab.com/harishtpj",
            SiGitlab,
            "hover:text-[#FC6D26]",
        ),
        (
            "LinkedIn",
            "@harishtpj",
            "https://linkedin.com/in/harishtpj",
            FaLinkedinInBrands,
            "hover:text-[#0A66C2]",
        ),
        (
            "Instagram",
            "@harishtpj.dev",
            "https://instagram.com/harishtpj.dev",
            SiInstagram,
            "hover:text-[#E4405F]",
        ),
        (
            "Kaggle",
            "@harishtpj",
            "https://kaggle.com/harishtpj",
            SiKaggle,
            "hover:text-[#20BEFF]",
        ),
        (
            "LeetCode",
            "@harishkumar_mv",
            "https://leetcode.com/u/harishkumar_mv",
            SiLeetcode,
            "hover:text-[#FFA116]",
        ),
        (
            "Codeforces",
            "@harishtpj",
            "https://codeforces.com/profile/harishtpj",
            SiCodeforces,
            "hover:text-[#1F8ACB]",
        ),
        (
            "HackerRank",
            "@harishtpj",
            "https://hackerrank.com/harishtpj",
            SiHackerrank,
            "hover:text-[#00EA64]",
        ),
        (
            "CodeChef",
            "@harishtpj",
            "https://codechef.com/users/harishtpj",
            SiCodechef,
            "hover:text-[#5B4638]",
        ),
    ];

    view! {
        <section id="socials" class="py-20 px-4 bg-card/30">
            <div class="container max-w-5xl">
                <ScrollAnimate>
                    <SectionHeading title="Find Me Online" subtitle=None />
                    <p class="text-muted-foreground -mt-8 mb-12 max-w-lg mx-auto text-center">
                        "Connect with me on various coding platforms and social networks"
                    </p>
                </ScrollAnimate>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {links
                        .into_iter()
                        .enumerate()
                        .map(|(index, (name, username, url, icon, color))| {
                            view! {
                                <ScrollAnimate delay=100 + index as u32 * 50>
                                    <a
                                        href=url
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class=format!("group p-4 rounded-xl bg-card border border-border/50 hover-lift flex flex-col items-center text-center transition-colors {color}")
                                    >
                                        <div class="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                                            <Icon icon=icon width="24" height="24" />
                                        </div>
                                        <span class="font-medium text-sm">{name}</span>
                                        <span class="text-xs text-muted-foreground mt-1 truncate w-full">
                                            {username}
                                        </span>
                                    </a>
                                </ScrollAnimate>
                            }
                        })
                        .collect_view()}
                </div>
            </div>
        </section>
    }
}
