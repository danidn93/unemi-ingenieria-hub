import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import engineeringLab from "@/assets/engineering-lab.jpg";
import automationSystems from "@/assets/automation-systems.jpg";
import chemistryLab from "@/assets/chemistry-lab.jpg";
import softwareDevelopment from "@/assets/software-development.jpg";

const carouselImages = [
  {
    src: engineeringLab,
    alt: "Laboratorio de Ingeniería",
    title: "Ingeniería Avanzada"
  },
  {
    src: automationSystems,
    alt: "Sistemas de Automatización",
    title: "Automatización Industrial"
  },
  {
    src: chemistryLab,
    alt: "Laboratorio de Química",
    title: "Investigación Química"
  },
  {
    src: softwareDevelopment,
    alt: "Desarrollo de Software",
    title: "Tecnología de Software"
  }
];

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1);
  };

  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs');
    programsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen bg-gradient-hero overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            La mejor versión
            <span className="block text-transparent bg-gradient-to-r from-white to-primary-light bg-clip-text">
              de ti
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Escuela de Ciencias e Ingeniería - UNEMI
          </p>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Desarrolla tu potencial profesional con nuestros programas de maestría 
            diseñados para líderes del futuro
          </p>
          <Button 
            onClick={scrollToPrograms}
            size="lg" 
            className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-hero"
          >
            Ver Maestrías
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};