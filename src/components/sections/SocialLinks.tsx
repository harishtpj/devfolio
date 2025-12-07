import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { 
  SiKaggle, 
  SiLeetcode, 
  SiCodeforces, 
  SiGithub,
  SiGitlab,
  SiLinkedin,
  SiHackerrank,
  SiCodechef,
} from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    username: "@harishtpj",
    url: "https://github.com/harishtpj",
    icon: SiGithub,
    color: "hover:text-[#333] dark:hover:text-white",
  },
  {
    name: "GitLab",
    username: "@harishtpj",
    url: "https://gitlab.com/harishtpj",
    icon: SiGitlab,
    color: "hover:text-[#FC6D26]",
  },
  {
    name: "LinkedIn",
    username: "@harishtpj",
    url: "https://linkedin.com/in/harishtpj",
    icon: SiLinkedin,
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Kaggle",
    username: "@harishtpj",
    url: "https://kaggle.com/harishtpj",
    icon: SiKaggle,
    color: "hover:text-[#20BEFF]",
  },
  {
    name: "LeetCode",
    username: "@harishtpj",
    url: "https://leetcode.com/u/harishtpj",
    icon: SiLeetcode,
    color: "hover:text-[#FFA116]",
  },
  {
    name: "Codeforces",
    username: "@harishtpj",
    url: "https://codeforces.com/profile/harishtpj",
    icon: SiCodeforces,
    color: "hover:text-[#1F8ACB]",
  },
  {
    name: "HackerRank",
    username: "@harishtpj",
    url: "https://hackerrank.com/harishtpj",
    icon: SiHackerrank,
    color: "hover:text-[#00EA64]",
  },
  {
    name: "CodeChef",
    username: "@harishtpj",
    url: "https://codechef.com/users/harishtpj",
    icon: SiCodechef,
    color: "hover:text-[#5B4638]",
  },
];

export function SocialLinks() {
  return (
    <section id="socials" className="py-20 px-4 bg-card/30">
      <div className="container max-w-5xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Find Me Online
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Connect with me on various coding platforms and social networks
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <ScrollAnimate key={social.name} delay={100 + index * 50}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 rounded-xl bg-card border border-border/50 hover-lift flex flex-col items-center text-center transition-colors ${social.color}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 transition-colors" />
                  </div>
                  <span className="font-medium text-sm">{social.name}</span>
                  <span className="text-xs text-muted-foreground mt-1 truncate w-full">
                    {social.username}
                  </span>
                </a>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
}
