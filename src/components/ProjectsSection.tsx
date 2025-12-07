import { ExternalLink, Github, Star, GitFork, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProject = {
  title: "Posiciona Tu Marca Personal",
  description:
    "Guía completa para construir una presencia digital profesional como experto en tecnología. Estrategias de personal branding, optimización de LinkedIn, y creación de contenido técnico de alto impacto.",
  technologies: ["Markdown", "GitHub Pages", "SEO", "Personal Branding"],
  stars: 128,
  forks: 45,
  github: "https://github.com",
  demo: "#",
};

const projects = [
  {
    title: "Data Pipeline Framework",
    description:
      "Framework modular para orquestación de pipelines ETL/ELT con soporte multi-cloud y monitoreo en tiempo real.",
    technologies: ["Python", "Apache Airflow", "AWS", "Docker"],
    github: "https://github.com",
  },
  {
    title: "ML Model Registry",
    description:
      "Sistema de versionado y despliegue de modelos ML con tracking de experimentos y A/B testing integrado.",
    technologies: ["MLflow", "Kubernetes", "FastAPI", "PostgreSQL"],
    github: "https://github.com",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Dashboard interactivo para visualización de métricas en tiempo real con alertas inteligentes.",
    technologies: ["React", "Apache Kafka", "ClickHouse", "Grafana"],
    github: "https://github.com",
  },
  {
    title: "Data Quality Monitor",
    description:
      "Plataforma de monitoreo de calidad de datos con detección automática de anomalías y linaje.",
    technologies: ["Great Expectations", "dbt", "Snowflake", "Airflow"],
    github: "https://github.com",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32 relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-96 bg-secondary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-1/4 h-64 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
              <Github className="w-4 h-4" />
              Proyectos Destacados
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Soluciones que{" "}
              <span className="gradient-text">transforman negocios</span>
            </h2>
          </div>

          {/* Featured Project */}
          <div className="mb-12">
            <div className="glass-card gradient-border p-6 md:p-8 rounded-2xl relative overflow-hidden group">
              {/* Featured badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-medium">
                <Sparkles className="w-3 h-3" />
                Featured
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">{featuredProject.stars}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm">{featuredProject.forks}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Ver Repositorio
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-border/50 bg-muted/30 hover:bg-muted/50"
                    >
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Visual element */}
                <div className="hidden md:block">
                  <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 overflow-hidden">
                    <div className="absolute inset-0 tech-grid opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Github className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">Preview del proyecto</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card p-6 rounded-2xl hover:bg-muted/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors">
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="View on GitHub"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border/50 bg-muted/30 hover:bg-muted/50"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                Ver todos los proyectos en GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
