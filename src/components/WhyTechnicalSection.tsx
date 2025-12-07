import { Brain, Rocket, Target, Zap } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Decisiones Informadas",
    description:
      "Un líder técnico comprende las implicaciones reales de cada arquitectura, evitando decisiones basadas solo en tendencias o marketing.",
  },
  {
    icon: Rocket,
    title: "Velocidad de Innovación",
    description:
      "El mercado de data evoluciona semanalmente. Solo quien practica puede evaluar y adoptar nuevas tecnologías efectivamente.",
  },
  {
    icon: Target,
    title: "Credibilidad con el Equipo",
    description:
      "Los equipos técnicos respetan y siguen a líderes que entienden sus desafíos y pueden guiarlos con conocimiento real.",
  },
  {
    icon: Zap,
    title: "Ejecución sin Dependencias",
    description:
      "Cuando entiendes el código, puedes prototipar, debuggear y desbloquear al equipo sin esperar disponibilidad de otros.",
  },
];

export const WhyTechnicalSection = () => {
  return (
    <section id="por-que-tecnico" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Filosofía de Liderazgo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">¿Por Qué </span>
            <span className="gradient-text">Lo Técnico Importa?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En un mercado que cambia cada semana, la práctica hands-on no es opcional 
            para quien lidera equipos de Data & Analytics.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group glass-card p-8 rounded-2xl hover:bg-muted/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <blockquote className="glass-card inline-block px-8 py-6 rounded-2xl max-w-3xl">
            <p className="text-lg md:text-xl text-foreground italic">
              "Los mejores líderes de Data no solo dirigen equipos, 
              <span className="text-primary font-semibold"> escriben código</span>, 
              experimentan con nuevas herramientas y nunca pierden el contacto con la tecnología."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
