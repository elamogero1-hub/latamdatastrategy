import { Download, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "10+ años de experiencia en Data & Analytics",
  "Liderazgo de equipos multidisciplinarios",
  "Proyectos en Fortune 500 companies",
  "Speaker en conferencias tech",
];

export const CVSection = () => {
  return (
    <section id="cv" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card gradient-border p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                  <FileText className="w-4 h-4" />
                  Currículum Vitae
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Descarga mi CV
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Obtén una visión completa de mi trayectoria profesional,
                  habilidades técnicas y logros en el mundo de los datos.
                </p>

                <ul className="space-y-3 mb-8">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Descargar CV (PDF)
                </Button>
              </div>

              {/* Visual element */}
              <div className="hidden md:flex justify-center">
                <div className="relative">
                  {/* Document mockup */}
                  <div className="w-48 h-64 bg-background/80 rounded-xl border border-border/50 shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full rounded-lg bg-muted/30 flex flex-col items-center justify-center">
                      <FileText className="w-12 h-12 text-primary mb-3" />
                      <div className="space-y-2 w-full px-4">
                        <div className="h-2 bg-muted rounded-full" />
                        <div className="h-2 bg-muted rounded-full w-3/4" />
                        <div className="h-2 bg-muted rounded-full w-1/2" />
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 p-2 glass-card rounded-lg floating">
                    <Download className="w-4 h-4 text-primary" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 p-2 glass-card rounded-lg floating-delayed">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
