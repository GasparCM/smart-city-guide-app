
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CircleCheck, Phone, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    municipality: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío (reemplazar con lógica real)
    setTimeout(() => {
      toast({
        title: "Solicitud enviada correctamente",
        description: "Nos pondremos en contacto contigo lo antes posible.",
        duration: 5000,
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        municipality: "",
        phone: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-javea-blue/5 to-javea-turquoise/5">
      <div className="container-section">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Convierte tu municipio</span> en un destino digital inteligente
          </h2>
          <p className="section-subtitle">
            Solicita información o una demostración personalizada para tu ayuntamiento
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Solicitar demo</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="municipality" className="block text-sm font-medium text-gray-700">
                      Municipio
                    </label>
                    <Input
                      id="municipality"
                      name="municipality"
                      value={formData.municipality}
                      onChange={handleChange}
                      placeholder="Nombre del municipio"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Teléfono (opcional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Tu teléfono"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensaje o consulta
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿Qué necesitas saber sobre Javea2Live2?"
                    rows={4}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar información"}
                </Button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold mb-6">¿Por qué elegir Javea2Live2?</h3>
              
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <CircleCheck className="w-6 h-6 text-javea-blue flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Solución SaaS lista para usar</h4>
                    <p className="text-gray-600">Sin necesidad de grandes inversiones en desarrollo o infraestructura tecnológica.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <CircleCheck className="w-6 h-6 text-javea-blue flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Tecnología de vanguardia</h4>
                    <p className="text-gray-600">IA avanzada, geolocalización precisa y diseño centrado en la experiencia del usuario.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <CircleCheck className="w-6 h-6 text-javea-blue flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Impulso al turismo local</h4>
                    <p className="text-gray-600">Mayor visibilidad de recursos turísticos y promoción efectiva de comercios y eventos.</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <CircleCheck className="w-6 h-6 text-javea-blue flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Soporte continuo</h4>
                    <p className="text-gray-600">Acompañamiento técnico, actualizaciones regulares y formación para tu equipo.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-javea-blue to-javea-turquoise p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Contacto directo</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+34 612 345 678</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>info@javea2live2.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
