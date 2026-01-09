import { Award, FileBadge, ExternalLink } from "lucide-react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    name: "Cisco C++ Essentials",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/15423c42-6b27-4fa9-a65f-c178af0a0f4b/"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/6586f3eb-b199-443c-94b7-1820e46f6522/",
  },
  {
    name: "Basic Python Programming",
    issuer: "UpGrad",
    link: "https://www.credential.net/641ff180-90c4-462c-82ce-872adc519ca4#acc.LTJDkc3a",
  },
  {
    name: "Core Java Basics",
    issuer: "UpGrad",
    link: "https://upgrad.certificate.givemycertificate.com/c/96c2a528-fd78-4c89-9f08-c62459c99c42",
  },
  {
    name: "AI in Real World",
    issuer: "UpGrad",
    link: "https://upgrad.certificate.givemycertificate.com/c/95b42cff-14a3-414c-8451-cabd3ff3c471",
  },
  {
    name: "Database Design with MySQL",
    issuer: "UpGrad",
    link: "https://upgrad.certificate.givemycertificate.com/c/217fadfd-a61e-4eb2-8c33-95dcc5ab6ffb",
  },
  {
    name: "Pandas Basics",
    issuer: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/harishtpj/pandas"
  }
];

const hackathons = [
  {
    name: "DecodeX 2025",
    desc: "A competitive coding event held as part of TechnoVIT '25. Secured a spot in the Top 10.",
    link: "https://harishtpj.github.io/docs/Certificate_DecodeX.pdf"
  },
  {
    name: "Bit-n-Build Hackathon 2025",
    desc: "A Statewide Hackathon conducted by FRCRCE in association with GDG",
    link: "https://unstop.com/certificate-preview/82d621d9-6978-4194-ac25-1178ab05cfcc",
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container max-w-4xl">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </ScrollAnimate>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Professional Credentials</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <ScrollAnimate key={cert.name} delay={100 + index * 75} direction="left">
              <div className="p-4 rounded-xl bg-card border border-border/50 hover-lift group">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium block">{cert.name}</span>
                      <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" title="View Certificate">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-8 pt-10">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <FileBadge className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">Hackathons & Workshops</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {hackathons.map((cert, index) => (
            <ScrollAnimate key={cert.name} delay={100 + index * 75} direction="left">
              <div className="p-4 rounded-xl bg-card border border-border/50 hover-lift group">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium block">{cert.name}</span>
                      <span className="text-sm text-muted-foreground">{cert.desc}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-60 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" title="View Certificate">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>

      </div>
    </section>
  );
}
