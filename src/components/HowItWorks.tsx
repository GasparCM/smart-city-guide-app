
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Instalación rápida",
    description: "Implementación ágil en menos de 2 semanas, sin necesidad de grandes infraestructuras técnicas por parte del ayuntamiento."
  },
  {
    number: "02",
    title: "Personalización de marca",
    description: "Adaptamos la aplicación a la imagen de tu municipio: colores, logo, fotografías y contenidos específicos."
  },
  {
    number: "03",
    title: "Panel de control",
    description: "Un intuitivo panel para gestionar localizaciones, eventos, reservas e incidencias desde cualquier dispositivo."
  },
  {
    number: "04",
    title: "Soporte continuo",
    description: "Asistencia técnica permanente, actualizaciones periódicas y formación para el personal municipal."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-10">
              <h2 className="section-title">
                <span className="gradient-text">Cómo funciona</span> para el ayuntamiento
              </h2>
              <p className="text-xl text-gray-600">
                Un proceso simplificado para empezar a ofrecer servicios digitales turísticos de primera categoría
              </p>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-javea-blue/10 flex items-center justify-center text-javea-blue font-medium">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Button className="btn-primary">
                Ver demo de implementación
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative z-10">
              <h3 className="text-2xl font-bold mb-6">Panel administrativo</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Puntos de interés</h4>
                    <span className="text-sm bg-javea-blue/10 text-javea-blue px-2 py-1 rounded-full">45 activos</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-javea-blue h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Eventos programados</h4>
                    <span className="text-sm bg-javea-turquoise/10 text-javea-turquoise px-2 py-1 rounded-full">12 próximos</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-javea-turquoise h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium">Consultas al chatbot</h4>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">+248 esta semana</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {[40, 25, 35, 30, 45, 60, 50].map((height, i) => (
                      <div key={i} className="h-12 flex items-end">
                        <div 
                          className="w-full bg-gradient-to-t from-javea-blue to-javea-turquoise rounded-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Lun</span>
                    <span>Mar</span>
                    <span>Mié</span>
                    <span>Jue</span>
                    <span>Vie</span>
                    <span>Sáb</span>
                    <span>Dom</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute top-1/4 -right-8 w-32 h-32 bg-javea-blue/10 rounded-full -z-10"></div>
            <div className="absolute bottom-1/4 -left-8 w-24 h-24 bg-javea-turquoise/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 left-1/4 w-16 h-16 bg-javea-blue/5 rounded-lg -z-10 rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
