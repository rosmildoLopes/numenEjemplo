import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react'; 

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo o Nombre de la Empresa */}
        <div className="mb-6">
          <Link href="/">
            <span className="text-3xl font-extrabold text-background">Numen Publicidad</span>
          </Link>
        </div>

        {/* Enlaces de Navegación o Servicios */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm">
          <Link href="#servicios" className="text-background/80 hover:text-main transition-colors">Servicios</Link>
          <Link href="#nosotros" className="text-background/80 hover:text-main transition-colors">Sobre Nosotros</Link>
          <Link href="#faq" className="text-background/80 hover:text-main transition-colors">FAQ</Link>
          <Link href="#contacto" className="text-background/80 hover:text-main transition-colors">Contacto</Link>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="URL_FACEBOOK" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-main transition-colors">
            <Facebook size={24} />
          </a>
          <a href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-main transition-colors">
            <Instagram size={24} />
          </a>
          <a href="URL_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-main transition-colors">
            <Linkedin size={24} />
          </a>
        </div>

        {/* Información de Contacto */}
        <div className="mb-6 text-sm text-background/80">
          <p>Email: info@numenpublicidad.com</p>
          <p>Teléfono: +54 9 11 1234 5678</p>
          <p>Oficinas en Buenos Aires, Argentina y Santiago, Chile</p>
        </div>

        {/* Copyright y Enlaces Legales */}
        <p className="text-sm text-background/60 mb-4">
          &copy; {currentYear} Numen Publicidad. Todos los derechos reservados.
        </p>
        <div className="space-x-4 text-sm">
          <Link href="/politica-privacidad" className="text-background/60 hover:text-main transition-colors">
            Política de Privacidad
          </Link>
          <span className="text-background/40">|</span>
          <Link href="/terminos-condiciones" className="text-background/60 hover:text-main transition-colors">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
};