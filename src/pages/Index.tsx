import { HeroCarousel } from "@/components/HeroCarousel";
import { ProgramCard } from "@/components/ProgramCard";
import { programsData } from "@/data/programsData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroCarousel />
      
      {/* Programs Section */}
      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nuestras Maestrías
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubre programas de posgrado diseñados para impulsar tu carrera profesional 
              con la más alta calidad académica y enfoque práctico.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {programsData.map((program) => (
              <ProgramCard
                key={program.slug}
                title={program.title}
                banner={program.banner}
                summary={program.summary}
                details={program.details}
                schedules={program.schedules}
                payments={program.payments}
                whatsappUrl={program.whatsappUrl}
                programSlug={program.slug}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Escuela de Ciencias e Ingeniería</h3>
          <p className="text-lg opacity-90 mb-6">Universidad Estatal de Milagro - UNEMI</p>
          <p className="opacity-80">
            Km 26 vía Milagro a Naranjito, Milagro - Ecuador<br />
            Teléfono: +593 4 2715081 | Email: info@unemi.edu.ec
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
