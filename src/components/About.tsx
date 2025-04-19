
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Imagen principal */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" 
                alt="Mapa interactivo de Jávea" 
                className="w-full h-auto"
              />
              
              {/* Overlay con elementos de UI */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Jávea / Xàbia</h3>
                <p className="text-white/90 mb-4">Descubre los encantos del Mediterráneo</p>
                
                <div className="flex space-x-2">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Playas</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Calas</span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">Naturaleza</span>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-javea-blue/5 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-javea-turquoise/5 rounded-full -z-10"></div>
            
            {/* Elemento de chatbot flotante */}
            <div className="absolute top-16 -right-8 bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-64 z-10 rotate-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-javea-blue/20 flex items-center justify-center text-javea-blue">
                  AI
                </div>
                <div>
                  <p className="text-sm font-medium">Asistente turístico</p>
                  <p className="text-xs text-gray-600 mt-1">El Montgó es una montaña de 753m que ofrece rutas de senderismo con vistas panorámicas.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="section-title">
              <span className="gradient-text">¿Qué es Javea2Live2?</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Javea2Live2 es una aplicación móvil turística completa, diseñada específicamente para municipios que desean ofrecer una experiencia digital de primer nivel a sus visitantes y residentes.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Desarrollada con tecnologías de vanguardia como Flutter y Supabase, es una solución <span className="font-medium">SaaS (Software as a Service)</span> escalable, segura y fácil de implementar que sitúa a tu municipio a la vanguardia de los destinos turísticos inteligentes.
            </p>
            
            <div className="bg-white p-5 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-semibold mb-3">La plataforma incluye:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-javea-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-javea-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Aplicación móvil personalizada para iOS y Android</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-javea-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-javea-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Panel de control para gestión municipal</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-javea-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-javea-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Asistente IA integrado con conocimiento local</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-javea-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-javea-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">Alojamiento en la nube y mantenimiento técnico</span>
                </li>
              </ul>
            </div>
            
            <Button className="btn-primary">
              Descubre más sobre la plataforma
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
