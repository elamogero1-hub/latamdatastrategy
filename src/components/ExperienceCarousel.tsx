const companies = [
  { name: "AWS", color: "from-orange-500 to-yellow-500" },
  { name: "Google Cloud", color: "from-blue-500 to-green-500" },
  { name: "Microsoft", color: "from-blue-600 to-cyan-500" },
  { name: "Databricks", color: "from-red-500 to-orange-500" },
  { name: "Snowflake", color: "from-cyan-400 to-blue-500" },

  { name: "Deloitte", color: "from-green-500 to-emerald-600" },
  { name: "IBM", color: "from-blue-700 to-blue-500" },
];

// Duplicate for infinite scroll effect
const allCompanies = [...companies, ...companies];

export const ExperienceCarousel = () => {
  return (
    <section id="experiencia" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10 mb-12">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Experiencia en </span>
            <span className="gradient-text">Empresas Líderes</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Colaborando con organizaciones de clase mundial en proyectos de transformación digital.
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex animate-scroll-x">
          {allCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 mx-4 group"
            >
              <div className="glass-card px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-glow cursor-default">
                <div className={`text-2xl font-bold bg-gradient-to-r ${company.color} bg-clip-text text-transparent`}>
                  {company.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
