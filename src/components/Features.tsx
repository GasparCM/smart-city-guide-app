
import { MapPin, Users, Calendar, CircleCheck, FileText, Language, Phone } from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-8 h-8 text-javea-blue" />,
    title: "Mapa interactivo",
    description: "Puntos turísticos, restaurantes, playas y servicios municipales geolocalizados y con filtros por categorías."
  },
  {
    icon: <div className="w-8 h-8 rounded-full bg-javea-blue flex items-center justify-center text-white font-semibold">AI</div>,
    title: "Chatbot con IA",
    description: "Asistente virtual basado en DeepSeek que resuelve dudas de los visitantes sobre el municipio, horarios y recomendaciones."
  },
  {
    icon: <Calendar className="w-8 h-8 text-javea-blue" />,
    title: "Calendario de eventos",
    description: "Agenda de eventos locales, festivos y actividades municipales con notificaciones y recordatorios."
  },
  {
    icon: <CircleCheck className="w-8 h-8 text-javea-blue" />,
    title: "Sistema de reservas",
    description: "Reserva de actividades y servicios municipales con pasarela de pago integrada con Stripe."
  },
  {
    icon: <FileText className="w-8 h-8 text-javea-blue" />,
    title: "Reportes de incidencias",
    description: "Sistema para que ciudadanos y visitantes informen de problemas o mejoras en el municipio."
  },
  {
    icon: <Language className="w-8 h-8 text-javea-blue" />,
    title: "Multilingüe",
    description: "Traducción automática a múltiples idiomas para atender a visitantes internacionales."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Funcionalidades clave</span>
          </h2>
          <p className="section-subtitle">
            Una plataforma completa para la gestión turística digital de tu municipio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 p-3 rounded-full bg-gray-100 w-fit group-hover:bg-javea-blue/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-white rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Necesitas una funcionalidad específica?</h3>
              <p className="text-gray-600">El sistema es modular y podemos adaptarlo a las necesidades concretas de tu municipio.</p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Consultar opciones
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
