import {
  Brain,
  Cloud,
  Database,
  BarChart3,
  Cpu,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

const skills = [
  { icon: Database, label: "DWH & DataLake" },
  { icon: Cloud, label: "AWS / GCP / Azure" },
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: BarChart3, label: "Data Analytics" },
  { icon: Cpu, label: "MLOps & DataOps" },
  { icon: Shield, label: "Data Governance" },
];

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-1/2 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Sobre Mí
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Transformando datos en{" "}
              <span className="gradient-text">decisiones estratégicas</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-2xl scale-110 animate-pulse-glow" />
                
                {/* Image container */}
                <div className="relative glass-card gradient-border p-2 rounded-3xl">
                  <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                    {/* Placeholder avatar */}
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                        <Zap className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm">Tu foto aquí</p>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 p-3 glass-card rounded-xl floating">
                  <Brain className="w-6 h-6 text-secondary" />
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 glass-card rounded-xl floating-delayed">
                  <Cloud className="w-6 h-6 text-accent" />
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-3 space-y-6">
              <div className="glass-card p-6 md:p-8 rounded-2xl">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                  Ingeniero de Sistemas | Data Expert
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-medium">
                      Máster en Data Management e Innovación
                    </span>{" "}
                    con más de una década de experiencia liderando la transformación
                    digital de empresas mediante arquitecturas de datos modernas.
                  </p>
                  <p>
                    Especialista en diseñar e implementar soluciones de{" "}
                    <span className="text-primary">Data Warehouse</span>,{" "}
                    <span className="text-secondary">DataLake</span> y{" "}
                    <span className="text-accent">LakeHouse</span>, combinando
                    tecnologías cloud-native con prácticas de MLOps y DataOps para
                    maximizar el valor de los datos.
                  </p>
                  <p>
                    Apasionado por la{" "}
                    <span className="text-foreground font-medium">
                      disrupción tecnológica
                    </span>
                    , la innovación continua y la investigación de nuevas soluciones
                    que impulsen la competitividad empresarial.
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.label}
                    className="glass-card p-4 rounded-xl flex items-center gap-3 hover:bg-muted/50 transition-all group cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <skill.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
