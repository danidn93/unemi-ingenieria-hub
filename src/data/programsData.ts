export interface Program {
  slug: string;
  title: string;
  banner: string;
  summary: string;
  details: {
    modalidad: string;
    duracion: string;
    inversion: string;
    perfilIngreso: string;
  };
  schedules: {
    day: string;
    time: string;
  }[];
  payments: {
    type: string;
    details: string;
  }[];
  whatsappUrl: string;
  startDate: string;
  profileEgreso: string;
  requirements: string[];
  titulationMethods: string[];
  testimonials: {
    name: string;
    quote: string;
  }[];
  coordinator: string;
  director: string;
  brochureUrl: string;
}

export const programsData: Program[] = [
  {
    slug: "mantenimiento-industrial",
    title: "Maestría en Mantenimiento Industrial",
    banner: "/api/placeholder/800/400",
    summary: "Forma especialistas en mantenimiento industrial con enfoque en optimización de procesos, gestión de activos y tecnologías emergentes para la industria 4.0.",
    details: {
      modalidad: "Presencial",
      duracion: "18 meses",
      inversion: "$3,500",
      perfilIngreso: "Ingenieros en áreas afines con experiencia en procesos industriales y mantenimiento de equipos."
    },
    schedules: [
      { day: "Viernes", time: "18:00 - 22:00" },
      { day: "Sábado", time: "08:00 - 17:00" }
    ],
    payments: [
      { type: "Transferencia bancaria", details: "Cuenta Banco Pichincha 2100123456" },
      { type: "Depósito directo", details: "Ventanillas autorizadas nivel nacional" },
      { type: "Tarjeta de crédito", details: "Visa, Mastercard - hasta 12 meses sin intereses" }
    ],
    whatsappUrl: "https://wa.me/593967979822?text=Busco%20información%20de%20la%20maestría%20en%20Mantenimiento%20Industrial",
    startDate: "Abril 2024",
    profileEgreso: "Profesionales capacitados para liderar proyectos de mantenimiento predictivo, gestionar sistemas de confiabilidad operacional y implementar estrategias de mantenimiento basadas en datos.",
    requirements: [
      "Título de tercer nivel en Ingeniería",
      "Experiencia laboral mínima de 2 años",
      "Certificado de inglés nivel B1",
      "Carta de motivación",
      "Referencias profesionales (2)"
    ],
    titulationMethods: [
      "Proyecto de investigación aplicada",
      "Tesis de grado",
      "Examen complexivo"
    ],
    testimonials: [
      {
        name: "Carlos Mendoza",
        quote: "La maestría me permitió implementar sistemas de mantenimiento predictivo que redujeron costos en un 30%."
      },
      {
        name: "Ana Rodríguez",
        quote: "Excelente programa que combina teoría y práctica en el campo del mantenimiento industrial."
      },
      {
        name: "Luis García",
        quote: "Los conocimientos adquiridos me ayudaron a liderar la transformación digital en mi empresa."
      }
    ],
    coordinator: "Ing. Roberto Silva, PhD",
    director: "Dr. María Fernández",
    brochureUrl: "#"
  },
  {
    slug: "tecnologias-informacion",
    title: "Maestría en Tecnologías de la Información",
    banner: "/api/placeholder/800/400",
    summary: "Desarrolla competencias avanzadas en gestión de tecnologías de información, ciberseguridad, analítica de datos y transformación digital empresarial.",
    details: {
      modalidad: "Semipresencial",
      duracion: "20 meses",
      inversion: "$4,200",
      perfilIngreso: "Profesionales en informática, sistemas, telecomunicaciones o áreas afines con experiencia en TI."
    },
    schedules: [
      { day: "Jueves", time: "18:30 - 22:00" },
      { day: "Sábado", time: "08:00 - 16:00" }
    ],
    payments: [
      { type: "Transferencia bancaria", details: "Cuenta Banco del Pacífico 4567890123" },
      { type: "Depósito directo", details: "Agencias autorizadas a nivel nacional" },
      { type: "Tarjeta de crédito", details: "Todas las tarjetas - financiamiento hasta 18 meses" }
    ],
    whatsappUrl: "https://wa.me/593967979822?text=Busco%20información%20de%20la%20maestría%20en%20Tecnologías%20de%20la%20Información",
    startDate: "Mayo 2024",
    profileEgreso: "Especialistas en arquitectura de sistemas, gestión de proyectos TI, seguridad informática y análisis de big data para la toma de decisiones estratégicas.",
    requirements: [
      "Título universitario en áreas de TI",
      "Experiencia laboral mínima de 3 años",
      "Conocimientos básicos de programación",
      "Portafolio de proyectos tecnológicos",
      "Entrevista técnica"
    ],
    titulationMethods: [
      "Desarrollo de software aplicado",
      "Investigación en tecnologías emergentes",
      "Consultoría tecnológica empresarial"
    ],
    testimonials: [
      {
        name: "Diego Morales",
        quote: "El programa me dio las herramientas para liderar la transformación digital en mi organización."
      },
      {
        name: "Patricia Luna",
        quote: "Excelente enfoque en tecnologías emergentes y metodologías ágiles."
      },
      {
        name: "Andrés Vega",
        quote: "La combinación de teoría y práctica es excepcional, especialmente en ciberseguridad."
      }
    ],
    coordinator: "Ing. Carlos Herrera, MSc",
    director: "Dr. María Fernández",
    brochureUrl: "#"
  },
  {
    slug: "quimica",
    title: "Maestría en Química",
    banner: "/api/placeholder/800/400",
    summary: "Programa de investigación avanzada en química analítica, orgánica e inorgánica con aplicaciones en industria farmacéutica, alimentaria y de materiales.",
    details: {
      modalidad: "Presencial",
      duracion: "24 meses",
      inversion: "$3,800",
      perfilIngreso: "Químicos, ingenieros químicos o profesionales en ciencias exactas con sólida formación en química."
    },
    schedules: [
      { day: "Lunes", time: "14:00 - 18:00" },
      { day: "Miércoles", time: "14:00 - 18:00" },
      { day: "Viernes", time: "14:00 - 18:00" }
    ],
    payments: [
      { type: "Transferencia bancaria", details: "Cuenta Banco Internacional 7890123456" },
      { type: "Depósito directo", details: "Red de agencias bancarias" },
      { type: "Tarjeta de crédito", details: "Diners, Visa, Mastercard - planes de financiamiento" }
    ],
    whatsappUrl: "https://wa.me/593967979822?text=Busco%20información%20de%20la%20maestría%20en%20Química",
    startDate: "Agosto 2024",
    profileEgreso: "Investigadores y profesionales especializados en análisis químico avanzado, síntesis de compuestos y desarrollo de nuevos materiales con aplicaciones industriales.",
    requirements: [
      "Título en Química o Ingeniería Química",
      "Promedio mínimo de 8.0/10",
      "Experiencia en laboratorio químico",
      "Propuesta de investigación",
      "Examen de conocimientos básicos"
    ],
    titulationMethods: [
      "Tesis de investigación experimental",
      "Artículo científico en revista indexada",
      "Proyecto de innovación industrial"
    ],
    testimonials: [
      {
        name: "Dr. Fernando Castillo",
        quote: "La maestría me permitió desarrollar nuevos materiales biocompatibles para aplicaciones médicas."
      },
      {
        name: "Química. Sara Jiménez",
        quote: "Excelente infraestructura de laboratorios y acompañamiento docente de primer nivel."
      },
      {
        name: "Ing. Manuel Torres",
        quote: "Los conocimientos adquiridos revolucionaron nuestros procesos de control de calidad."
      }
    ],
    coordinator: "Dr. Elena Vargas, PhD",
    director: "Dr. María Fernández",
    brochureUrl: "#"
  },
  {
    slug: "ingenieria-software",
    title: "Maestría en Ingeniería en Software",
    banner: "/api/placeholder/800/400",
    summary: "Formación especializada en arquitectura de software, metodologías ágiles, DevOps y desarrollo de aplicaciones empresariales con tecnologías de vanguardia.",
    details: {
      modalidad: "Virtual",
      duracion: "18 meses",
      inversion: "$3,900",
      perfilIngreso: "Ingenieros en software, sistemas, informática o desarrolladores con experiencia comprobada en programación."
    },
    schedules: [
      { day: "Martes", time: "19:00 - 22:00" },
      { day: "Jueves", time: "19:00 - 22:00" },
      { day: "Sábado", time: "09:00 - 13:00" }
    ],
    payments: [
      { type: "Transferencia bancaria", details: "Cuenta Banco Guayaquil 3456789012" },
      { type: "Depósito directo", details: "Sucursales bancarias nacionales" },
      { type: "Tarjeta de crédito", details: "Todas las tarjetas - diferidos hasta 24 meses" }
    ],
    whatsappUrl: "https://wa.me/593967979822?text=Busco%20información%20de%20la%20maestría%20en%20Ingeniería%20en%20Software",
    startDate: "Septiembre 2024",
    profileEgreso: "Arquitectos de software especializados en diseño de sistemas escalables, implementación de metodologías ágiles y liderazgo de equipos de desarrollo tecnológico.",
    requirements: [
      "Título en Ingeniería de Software o afines",
      "Experiencia mínima de 2 años en desarrollo",
      "Portafolio de proyectos de software",
      "Conocimiento en al menos 2 lenguajes de programación",
      "Certificación técnica (deseable)"
    ],
    titulationMethods: [
      "Desarrollo de aplicación empresarial",
      "Investigación en ingeniería de software",
      "Implementación de framework tecnológico"
    ],
    testimonials: [
      {
        name: "Ing. Alejandro Ruiz",
        quote: "El programa me capacitó para liderar equipos de desarrollo ágil y arquitecturas de microservicios."
      },
      {
        name: "María José Pérez",
        quote: "Excelente formación en DevOps y metodologías modernas de desarrollo de software."
      },
      {
        name: "Ing. Roberto Sánchez",
        quote: "La maestría me abrió puertas en consultoría tecnológica y desarrollo de productos digitales."
      }
    ],
    coordinator: "Ing. Andrea Moreno, MSc",
    director: "Dr. María Fernández",
    brochureUrl: "#"
  }
];