
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { CircleCheck } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-javea-blue">Town<span className="text-javea-turquoise">sense</span></span>
        </a>

        {!isMobile ? (
          <nav className="flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-javea-blue transition-colors">
              ¿Qué es?
            </a>
            <a href="#features" className="text-gray-700 hover:text-javea-blue transition-colors">
              Funcionalidades
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-javea-blue transition-colors">
              Para ayuntamientos
            </a>
            <a href="#contact" className="flex items-center text-gray-700 hover:text-javea-blue transition-colors">
              <CircleCheck className="w-4 h-4 mr-1" />
              <span>Solicitar demo</span>
            </a>
            <Button className="bg-javea-blue hover:bg-javea-blue-dark">
              Contacto
            </Button>
          </nav>
        ) : (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Menú móvil */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 p-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4 pt-4">
            <a 
              href="#about" 
              className="text-gray-700 hover:text-javea-blue transition-colors p-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Qué es?
            </a>
            <a 
              href="#features" 
              className="text-gray-700 hover:text-javea-blue transition-colors p-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-700 hover:text-javea-blue transition-colors p-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Para ayuntamientos
            </a>
            <a 
              href="#contact" 
              className="flex items-center text-gray-700 hover:text-javea-blue transition-colors p-2 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <CircleCheck className="w-5 h-5 mr-2" />
              <span>Solicitar demo</span>
            </a>
            <Button 
              className="bg-javea-blue hover:bg-javea-blue-dark w-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
