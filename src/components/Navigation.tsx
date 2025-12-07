import { useState, useEffect } from "react";
import { Menu, X, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-2 text-foreground font-bold text-xl group"
        >
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <Database className="w-5 h-5 text-primary" />
          </div>
          <span className="hidden sm:inline">
            Data<span className="text-primary">Hub</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
            </a>
          ))}
          <Button
            asChild
            className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
          >
            <a href="#contacto">Contactar</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                Contactar
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
