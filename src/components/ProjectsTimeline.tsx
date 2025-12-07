import { Github, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const sessions = [
  {
    number: 0,
    title: "Introducción al Ecosistema",
    description: "Setup inicial con Lovable AI, GitHub y Vercel para desarrollo moderno.",
    technologies: ["Lovable AI", "GitHub", "Vercel"],
    github: "https://github.com",
    featured: true,
  },
  {
    number: 1,
    title: "Fundamentos de Databricks",
    description: "Arquitectura Lakehouse, notebooks y workflows en Databricks.",
    technologies: ["Databricks", "Spark", "Python"],
    github: "https://github.com",
  },
  {
    number: 2,
    title: "Data Engineering con Azure",
    description: "Pipelines de datos con Azure Data Factory y Synapse Analytics.",
    technologies: ["Azure", "Data Factory", "Synapse"],
    github: "https://github.com",
  },
  {
    number: 3,
    title: "Streaming con Kafka",
    description: "Procesamiento en tiempo real con Apache Kafka y Spark Streaming.",
    technologies: ["Kafka", "Spark Streaming", "Python"],
    github: "https://github.com",
  },
  {
    number: 4,
    title: "Machine Learning Ops",
    description: "MLflow, model registry y deployment de modelos en producción.",
    technologies: ["MLflow", "Docker", "Kubernetes"],
    github: "https://github.com",
  },
  {
    number: 5,
    title: "Data Governance",
    description: "Unity Catalog, lineage y políticas de acceso a datos.",
    technologies: ["Unity Catalog", "Purview", "Collibra"],
    github: "https://github.com",
  },
  {
    number: 6,
    title: "Advanced Analytics",
    description: "Modelos predictivos y análisis avanzado con PySpark ML.",
    technologies: ["PySpark", "ML", "Delta Lake"],
    github: "https://github.com",
  },
  {
    number: 7,
    title: "Real-time Dashboards",
    description: "Visualización en tiempo real con Power BI y Grafana.",
    technologies: ["Power BI", "Grafana", "Prometheus"],
    github: "https://github.com",
  },
  {
    number: 8,
    title: "Cloud Infrastructure",
    description: "Terraform, IaC y arquitectura multi-cloud.",
    technologies: ["Terraform", "AWS", "GCP"],
    github: "https://github.com",
  },
  {
    number: 9,
    title: "AI/LLM Integration",
    description: "Integración de modelos de lenguaje y AI generativa.",
    technologies: ["OpenAI", "LangChain", "Vector DB"],
    github: "https://github.com",
  },
  {
    number: 10,
    title: "Data Quality",
    description: "Great Expectations, testing de datos y observabilidad.",
    technologies: ["Great Expectations", "dbt", "Monte Carlo"],
    github: "https://github.com",
  },
  {
    number: 11,
    title: "Cost Optimization",
    description: "Optimización de costos cloud y governance financiero.",
    technologies: ["FinOps", "Spot Instances", "Auto-scaling"],
    github: "https://github.com",
  },
  {
    number: 12,
    title: "CI/CD para Data",
    description: "Pipelines de CI/CD, testing automatizado y deployment.",
    technologies: ["GitHub Actions", "dbt", "Airflow"],
    github: "https://github.com",
  },
];

export const ProjectsTimeline = () => {
  return (
    <section id="proyectos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio Técnico
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">12 Sesiones de </span>
            <span className="gradient-text">Proyectos Prácticos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde fundamentos hasta implementaciones avanzadas, cada proyecto 
            representa aprendizaje hands-on con tecnologías de vanguardia.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((session, index) => (
            <div
              key={session.number}
              className={`group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-up ${
                session.featured ? "md:col-span-2 lg:col-span-1 ring-2 ring-primary/50" : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-xs font-mono text-primary">
                    <span className="px-2 py-1 rounded bg-primary/10">
                      Sesión {session.number.toString().padStart(2, "0")}
                    </span>
                    {session.featured && (
                      <span className="flex items-center gap-1 px-2 py-1 rounded bg-accent/20 text-accent">
                        <Sparkles className="w-3 h-3" />
                        Intro
                      </span>
                    )}
                  </span>
                  <a
                    href={session.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    aria-label="Ver en GitHub"
                  >
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </a>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {session.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {session.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {session.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-border/50 bg-muted/20">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="w-full text-primary hover:text-primary hover:bg-primary/10"
                >
                  <a href={session.github} target="_blank" rel="noopener noreferrer">
                    Ver Proyecto
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
