// src/components/Footer.jsx (o .tsx)
import React from 'react';
// Si tienes íconos de redes sociales de lucide-react, impórtalos aquí
// import { Facebook, Instagram, Linkedin } from 'lucide-react'; 

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual dinámicamente

  return (
    <footer className="bg-foreground text-background py-12"> {/* Fondo oscuro, texto claro */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo o Nombre de la Empresa (Opcional, si tienes uno) */}
        {/* <div className="mb-6">
          <img src="/path/to/your/logo.svg" alt="Numen Publicidad Logo" className="h-10 mx-auto" />
        </div> */}

        {/* Enlaces de Navegación o Servicios (Opcional) */}
        {/* Si tienes un menú de navegación rápido, podrías ponerlo aquí */}
        {/* <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm">
          <a href="#servicios" className="hover:text-main transition-colors">Servicios</a>
          <a href="#proceso" className="hover:text-main transition-colors">Proceso</a>
          <a href="#faq" className="hover:text-main transition-colors">FAQ</a>
          <a href="#contacto" className="hover:text-main transition-colors">Contacto</a>
        </div> */}

        {/* Redes Sociales (Opcional) */}
        {/* <div className="flex justify-center space-x-6 mb-8">
          <a href="URL_FACEBOOK" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-main transition-colors">
            <Facebook size={24} />
          </a>
          <a href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-main transition-colors">
            <Instagram size={24} />
          </a>
          <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-main transition-colors">
            <Linkedin size={24} />
          </a>
        </div> */}

        {/* Información de Contacto (Opcional) */}
        <div className="mb-6 text-sm text-background/80">
          <p>Email: info@numenpublicidad.com</p> {/* Ejemplo */}
          <p>Teléfono: +54 9 11 1234 5678</p> {/* Ejemplo */}
          <p>Buenos Aires, Argentina</p>
          <p>Santiago, Chile</p>
        </div>

        {/* Copyright y Enlaces Legales */}
        <p className="text-sm text-background/60 mb-4">
          &copy; {currentYear} Numen Publicidad. Todos los derechos reservados.
        </p>
        <div className="space-x-4 text-sm">
          <a href="/politica-privacidad" className="text-background/60 hover:text-main transition-colors">
            Política de Privacidad
          </a>
          <span className="text-background/40">|</span>
          <a href="/terminos-condiciones" className="text-background/60 hover:text-main transition-colors">
            Términos y Condiciones
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;