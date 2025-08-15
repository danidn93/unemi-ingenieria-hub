import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, CreditCard, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

interface ProgramDetails {
  modalidad: string;
  duracion: string;
  inversion: string;
  perfilIngreso: string;
}

interface Schedule {
  day: string;
  time: string;
}

interface PaymentMethod {
  type: string;
  details: string;
}

interface ProgramCardProps {
  title: string;
  banner: string;
  summary: string;
  details: ProgramDetails;
  schedules: Schedule[];
  payments: PaymentMethod[];
  whatsappUrl: string;
  programSlug: string;
}

export const ProgramCard = ({
  title,
  banner,
  summary,
  details,
  schedules,
  payments,
  whatsappUrl,
  programSlug
}: ProgramCardProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleProgramClick = () => {
    window.location.href = `/programa/${programSlug}`;
  };

  return (
    <Card className="shadow-card hover:shadow-unemi transition-all duration-300 bg-gradient-card border-border/50">
      <CardHeader className="pb-4">
        <div 
          className="w-full h-48 rounded-lg mb-4 bg-cover bg-center cursor-pointer group"
          style={{ backgroundImage: `url(${banner})` }}
          onClick={handleProgramClick}
        >
          <div className="w-full h-full bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold">Ver programa completo</span>
          </div>
        </div>
        <CardTitle 
          className="text-xl font-bold text-primary cursor-pointer hover:text-primary-light transition-colors"
          onClick={handleProgramClick}
        >
          {title}
        </CardTitle>
        <p className="text-muted-foreground leading-relaxed">{summary}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* DETALLES */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleSection('detalles')}
            className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <span className="font-semibold text-primary">DETALLES</span>
            {expandedSection === 'detalles' ? 
              <ChevronUp className="w-5 h-5" /> : 
              <ChevronDown className="w-5 h-5" />
            }
          </button>
          {expandedSection === 'detalles' && (
            <div className="px-4 pb-4 space-y-3 border-t bg-muted/20">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm"><strong>Modalidad:</strong> {details.modalidad}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm"><strong>Duración:</strong> {details.duracion}</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span className="text-sm"><strong>Inversión:</strong> {details.inversion}</span>
              </div>
              <div className="text-sm">
                <strong>Perfil de ingreso:</strong> {details.perfilIngreso}
              </div>
            </div>
          )}
        </div>

        {/* HORARIOS */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleSection('horarios')}
            className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <span className="font-semibold text-primary">HORARIOS</span>
            {expandedSection === 'horarios' ? 
              <ChevronUp className="w-5 h-5" /> : 
              <ChevronDown className="w-5 h-5" />
            }
          </button>
          {expandedSection === 'horarios' && (
            <div className="px-4 pb-4 border-t bg-muted/20">
              <div className="space-y-2">
                {schedules.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* PAGOS */}
        <div className="border rounded-lg">
          <button
            onClick={() => toggleSection('pagos')}
            className="w-full p-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <span className="font-semibold text-primary">PAGOS</span>
            {expandedSection === 'pagos' ? 
              <ChevronUp className="w-5 h-5" /> : 
              <ChevronDown className="w-5 h-5" />
            }
          </button>
          {expandedSection === 'pagos' && (
            <div className="px-4 pb-4 space-y-3 border-t bg-muted/20">
              {payments.map((payment, index) => (
                <div key={index} className="text-sm">
                  <strong>{payment.type}:</strong> {payment.details}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* WhatsApp Button */}
        <Button 
          onClick={() => window.open(whatsappUrl, '_blank')}
          className="w-full bg-green-600 hover:bg-green-700 text-white gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Consultar por WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};