import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Google Cloud Professional Data Engineer",
    provider: "Google Cloud",
    year: "2024",
    color: "from-blue-500/20 to-green-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Google Cloud Professional Data Architect",
    provider: "Google Cloud",
    year: "2024",
    color: "from-blue-500/20 to-yellow-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Azure Data Engineer",
    provider: "Microsoft Azure",
    year: "2023",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
  },
  {
    name: "Databricks Lakehouse",
    provider: "Databricks",
    year: "2023",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
  },
  {
    name: "Digital Leader",
    provider: "Google Cloud",
    year: "2023",
    color: "from-green-500/20 to-teal-500/20",
    borderColor: "border-green-500/30",
  },
  {
    name: "Azure Fundamentals AI",
    provider: "Microsoft Azure",
    year: "2024",
    color: "from-blue-600/20 to-purple-600/20",
    borderColor: "border-blue-600/30",
  },
];

export const CertificationsSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-full h-64 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Certificaciones
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Credenciales que{" "}
              <span className="gradient-text">respaldan mi expertise</span>
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`glass-card p-6 rounded-2xl border ${cert.borderColor} hover:scale-[1.02] transition-all duration-300 group cursor-pointer`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative z-10">
                  {/* Provider badge and year */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {cert.provider}
                    </span>
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-background/50 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>

                  {/* View link */}
                  <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <span>Ver credencial</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Más de <span className="text-primary font-semibold">15+</span>{" "}
              certificaciones en tecnologías cloud, datos y DevOps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
