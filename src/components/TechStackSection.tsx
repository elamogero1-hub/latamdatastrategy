import { Cloud, Database, Brain, BarChart3, Server, Workflow } from "lucide-react";

const cloudProviders = [
  { name: "AWS", logo: "/images/aws-logo.svg", gradient: "from-orange-500 to-yellow-500" },
  { name: "Google Cloud", logo: "/images/google-cloud-logo.svg", gradient: "from-blue-500 to-green-500" },
  { name: "Azure", logo: "/images/azure-logo.svg", gradient: "from-blue-600 to-cyan-500" },
];

const specialties = [
  { name: "Big Data", icon: Database, color: "text-blue-400" },
  { name: "Business Intelligence", icon: BarChart3, color: "text-green-400" },
  { name: "Cloud Computing", icon: Cloud, color: "text-cyan-400" },
  { name: "Machine Learning", icon: Brain, color: "text-purple-400" },
  { name: "Inteligencia Artificial", icon: Workflow, color: "text-pink-400" },
  { name: "Data Engineering", icon: Server, color: "text-orange-400" },
];

export const TechStackSection = () => {
  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Stack Tecnológico
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Certificaciones & </span>
            <span className="gradient-text">Tecnologías</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise en las principales plataformas cloud y herramientas de datos.
          </p>
        </div>

        {/* Cloud Providers */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Cloud Providers
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {cloudProviders.map((provider, index) => (
              <div
                key={provider.name}
                className="glass-card px-10 py-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-glow animate-fade-up group cursor-default flex flex-col items-center gap-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-16 w-16 relative flex items-center justify-center">
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className={`text-xl font-bold bg-gradient-to-r ${provider.gradient} bg-clip-text text-transparent`}>
                  {provider.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialties Grid */}
        <div>
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            Áreas de Especialización
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialties.map((specialty, index) => (
              <div
                key={specialty.name}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 hover:shadow-glow animate-fade-up group cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-primary/20 transition-colors">
                    <specialty.icon className={`w-8 h-8 ${specialty.color}`} />
                  </div>
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {specialty.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
