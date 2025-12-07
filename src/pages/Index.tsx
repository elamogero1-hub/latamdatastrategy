import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhyTechnicalSection } from "@/components/WhyTechnicalSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsTimeline } from "@/components/ProjectsTimeline";
import { ExperienceCarousel } from "@/components/ExperienceCarousel";
import { CertificationsSection } from "@/components/CertificationsSection";
import { CVSection } from "@/components/CVSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <WhyTechnicalSection />
      <TechStackSection />
      <ProjectsTimeline />
      <ExperienceCarousel />
      <CertificationsSection />
      <CVSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
