import { Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimate } from "@/components/ui/scroll-animate";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harishtpj@gmail.com",
    href: "mailto:harishtpj@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9940559664",
    href: "tel:+919940559664",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/harishtpj",
    username: "@harishtpj",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/harishtpj",
    username: "in/harishtpj",
  },
  {
    icon: Globe,
    label: "My Blog",
    href: "https://harishtpj.github.io",
    username: "harishtpj.github.io",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container max-w-4xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Interested in collaborating or have a project in mind? 
              I'd love to hear from you!
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <ScrollAnimate delay={100} direction="left">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <ScrollAnimate key={item.label} delay={150 + index * 75} direction="left">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover-lift">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </ScrollAnimate>

          {/* Social Links */}
          <ScrollAnimate delay={200} direction="right">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              {socialLinks.map((social, index) => (
                <ScrollAnimate key={social.label} delay={250 + index * 75} direction="right">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover-lift group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                </ScrollAnimate>
              ))}
            </div>
          </ScrollAnimate>
        </div>

        {/* CTA */}
        <ScrollAnimate delay={400}>
          <div className="text-center mt-12">
            <Button size="lg" className="rounded-full px-8 shadow-glow" asChild>
              <a href="mailto:harishtpj@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
