import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Download, Phone, Mail, MapPin, Clock, CreditCard } from "lucide-react";
import { programsData } from "@/data/programsData";

export default function ProgramDetail() {
  const { programSlug } = useParams();
  const program = programsData.find(p => p.slug === programSlug);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Programa no encontrado</h1>
          <Button onClick={() => window.location.href = '/'}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Solicitud enviada. Nos pondremos en contacto contigo pronto.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={program.banner} 
              alt={program.title}
              className="w-full h-64 object-cover rounded-lg mb-8 shadow-hero"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{program.title}</h1>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm opacity-90">Duración</p>
                <p className="font-semibold">{program.details.duracion}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm opacity-90">Modalidad</p>
                <p className="font-semibold">{program.details.modalidad}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CreditCard className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm opacity-90">Inversión</p>
                <p className="font-semibold">{program.details.inversion}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Phone className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm opacity-90">Inicio</p>
                <p className="font-semibold">{program.startDate}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Registro Admisión</CardTitle>
              <p className="text-muted-foreground">Completa tus datos para iniciar el proceso de admisión</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombres</Label>
                    <Input id="firstName" placeholder="Ingresa tus nombres" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellidos</Label>
                    <Input id="lastName" placeholder="Ingresa tus apellidos" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="correo@ejemplo.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="0999999999" required />
                </div>
                <div>
                  <Label htmlFor="city">Ciudad</Label>
                  <Input id="city" placeholder="Tu ciudad de residencia" required />
                </div>
                <div>
                  <Label htmlFor="profession">Profesión actual</Label>
                  <Input id="profession" placeholder="Tu profesión o área de trabajo" required />
                </div>
                <div>
                  <Label htmlFor="motivation">¿Por qué quieres estudiar esta maestría?</Label>
                  <Textarea id="motivation" placeholder="Comparte tu motivación..." rows={4} />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Program Information */}
          <div className="space-y-8">
            {/* Carta del Decano */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Carta del Decano</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0"></div>
                  <div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Estimados estudiantes, es un honor presentarles nuestro programa de maestría, 
                      diseñado con los más altos estándares académicos y orientado hacia la excelencia 
                      profesional y la investigación aplicada.
                    </p>
                    <p className="text-sm font-semibold mt-3">Dr. Juan Pérez - Decano</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Perfil de Ingreso */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Perfil de Ingreso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{program.details.perfilIngreso}</p>
              </CardContent>
            </Card>

            {/* Perfil de Egreso */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Perfil de Egreso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{program.profileEgreso}</p>
              </CardContent>
            </Card>

            {/* Requisitos */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Requisitos de Admisión</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  {program.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Mecanismos de Titulación */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">Mecanismos de Titulación</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  {program.titulationMethods.map((method, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {method}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Historias Destacadas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {program.testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="font-semibold text-primary mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Staff */}
        <section className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-primary mb-2">Coordinador del Programa</h3>
                <p className="text-muted-foreground">{program.coordinator}</p>
              </CardContent>
            </Card>
            <Card className="shadow-card text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-primary mb-2">Director de la Escuela</h3>
                <p className="text-muted-foreground">{program.director}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
            <Button 
              onClick={() => window.open(program.brochureUrl, '_blank')}
              className="bg-gradient-primary hover:opacity-90 gap-2"
            >
              <Download className="w-4 h-4" />
              Descargar folleto completo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}