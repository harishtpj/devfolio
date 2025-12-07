import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
// import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        {/* <Experience /> */}
        <Certifications />
        <Education />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
