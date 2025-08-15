import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, CreditCard, MessageCircle } from "lucide-react";

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
  const handleProgramClick = () => {
    window.location.href = `/programa/${programSlug}`;
  };

  return (
    <Card className="relative shadow-card hover:shadow-unemi transition-all duration-300 bg-gradient-card border-border/50">
      {/* Floating WhatsApp Icon */}
      <button
        onClick={() => window.open(whatsappUrl, '_blank')}
        className="absolute top-4 right-4 z-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Consultar por WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

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
          className="text-xl font-bold text-primary cursor-pointer hover:text-primary-light transition-colors pr-16"
          onClick={handleProgramClick}
        >
          {title}
        </CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {details.duracion}
          </span>
          <span className="flex items-center gap-1">
            <CreditCard className="w-4 h-4" />
            {details.inversion}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed">{summary}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <Tabs defaultValue="detalles" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="detalles">Detalles</TabsTrigger>
            <TabsTrigger value="horarios">Horarios</TabsTrigger>
            <TabsTrigger value="pagos">Pagos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="detalles" className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm"><strong>Modalidad:</strong> {details.modalidad}</span>
            </div>
            <div className="text-sm">
              <strong>Perfil de ingreso:</strong> {details.perfilIngreso}
            </div>
          </TabsContent>
          
          <TabsContent value="horarios" className="mt-4">
            <div className="space-y-2">
              {schedules.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center text-sm p-2 bg-muted/30 rounded">
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.time}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="pagos" className="mt-4 space-y-3">
            <div className="text-sm mb-3">
              <strong>Inversión:</strong> {details.inversion}
            </div>
            {payments.map((payment, index) => (
              <div key={index} className="text-sm p-2 bg-muted/30 rounded">
                <strong>{payment.type}:</strong> {payment.details}
              </div>
            ))}
          </TabsContent>
        </Tabs>

        <Button 
          onClick={handleProgramClick}
          className="w-full bg-primary hover:bg-primary/90 text-white gap-2"
        >
          Solicitar Información
        </Button>
      </CardContent>
    </Card>
  );
};