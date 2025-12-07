import { ArrowRight, Download, MessageCircle, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] floating animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] floating-delayed animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-[80px] floating-slow animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 relative inline-block animate-fade-up">
            <div className="relative w-48 h-48 md:w-64 md:h-64 group">
              {/* LED Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-r from-primary via-secondary to-accent">
                <div className="w-full h-full rounded-full overflow-hidden bg-background relative z-10">
                  <img
                    src="/images/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Badge */}


          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up delay-100 leading-tight">
            <span className="text-foreground">El Liderazgo Técnico en </span>
            <span className="gradient-text">Data No Negocia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary mb-4 animate-fade-up delay-200 font-semibold">
            Data Leaders Need to Stay Technical
          </p>

          {/* Value Proposition */}
          <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-6 animate-fade-up delay-300 leading-relaxed">
            Los líderes de datos que mantienen experiencia práctica, no solo visión estratégica,
            son quienes realmente transforman organizaciones en la era de la{" "}
            <span className="text-primary font-medium">Inteligencia Artificial</span>.
          </p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-up delay-350">
            {["AI", "ML", "Cloud", "Data Architecture", "Big Data", "Analytics"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up delay-400">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
            >
              <a href="#cv">
                <Download className="mr-2 w-5 h-5" />
                Descarga mi CV
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary/50 bg-primary/10 hover:bg-primary/20 text-foreground font-semibold px-8 py-6 text-lg group"
            >
              <a href="#contacto">
                <MessageCircle className="mr-2 w-5 h-5" />
                Hablemos de Data
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up delay-500">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:bg-muted/50 transition-all hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:bg-muted/50 transition-all hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:contacto@example.com"
              className="p-3 rounded-xl glass-card hover:bg-muted/50 transition-all hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}

      </div>
    </section>
  );
};
