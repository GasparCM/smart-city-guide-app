
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, CirclePlus } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Círculo decorativo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-javea-blue/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">La guía turística inteligente</span> para tu municipio
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 md:pr-12">
              Una solución digital completa para ayuntamientos con vocación turística que conecta visitantes con lo mejor de tu destino.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary text-base">
                Solicita una demo
              </Button>
              <Button variant="outline" className="text-base border-javea-blue text-javea-blue hover:bg-javea-blue/5">
                Ver funcionalidades
              </Button>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-javea-blue mr-2" />
                <span className="text-gray-700">Puntos turísticos</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-javea-blue mr-2" />
                <span className="text-gray-700">Eventos locales</span>
              </div>
              <div className="flex items-center">
                <CirclePlus className="w-5 h-5 text-javea-blue mr-2" />
                <span className="text-gray-700">Chatbot IA</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Mockup del teléfono con la app */}
            <div className="relative h-[600px] animate-fade-in-right">
              {/* Frame del teléfono */}
              <div className="absolute inset-0 w-[300px] h-[600px] mx-auto bg-gray-900 rounded-[40px] shadow-2xl overflow-hidden">
                {/* Pantalla */}
                <div className="absolute inset-2 rounded-[36px] overflow-hidden bg-javea-blue/10">
                  {/* Contenido de la app */}
                  <div className="relative h-full bg-white">
                    {/* Barra superior */}
                    <div className="bg-javea-blue text-white p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">Javea2Live2</h3>
                        <MapPin className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Contenido de la app */}
                    <div className="p-4">
                      <div className="bg-white rounded-lg shadow-md p-3 mb-4">
                        <h4 className="font-semibold text-sm">Playa del Arenal</h4>
                        <p className="text-xs text-gray-500">Playa principal de arena fina</p>
                        <div className="mt-2 h-24 bg-blue-100 rounded-md flex items-center justify-center">
                          <span className="text-xs text-blue-500">Imagen de la playa</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-md p-3 mb-4">
                        <h4 className="font-semibold text-sm">Cabo de San Antonio</h4>
                        <p className="text-xs text-gray-500">Mirador con vistas panorámicas</p>
                        <div className="mt-2 h-24 bg-green-100 rounded-md flex items-center justify-center">
                          <span className="text-xs text-green-500">Imagen del mirador</span>
                        </div>
                      </div>
                      
                      <div className="bg-javea-turquoise/10 rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-javea-turquoise flex items-center justify-center text-white">
                            AI
                          </div>
                          <div className="ml-2">
                            <p className="text-xs">Asistente turístico</p>
                            <p className="text-xs text-gray-500">¿En qué puedo ayudarte?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Notch del teléfono */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-xl"></div>
              </div>
              
              {/* Elementos decorativos flotantes alrededor del teléfono */}
              <div className="absolute top-20 -right-4 w-24 h-24 bg-javea-turquoise/20 rounded-xl rotate-12"></div>
              <div className="absolute top-40 -left-8 w-16 h-16 bg-javea-blue/20 rounded-lg -rotate-12"></div>
              <div className="absolute bottom-32 -right-4 w-20 h-20 bg-javea-blue/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
