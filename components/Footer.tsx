import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Importa los iconos de Font Awesome desde react-icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Logo de la Empresa */}
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo_Blanco.png" // Asume que tienes un logo en blanco para el fondo oscuro
              alt="Numen Publicidad Logo"
              width={180}
              height={60}
              className="w-36 md:w-48"
            />
          </Link>
        </div>

        {/* Enlaces de Navegación y Servicios */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm md:text-base">
          <Link href="/servicios" className="text-white/80 hover:text-main transition-colors">
            Servicios
          </Link>
          <Link href="/sobre-nosotros" className="text-white/80 hover:text-main transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/#faq" className="text-white/80 hover:text-main transition-colors">
            Preguntas Frecuentes
          </Link>
          <Link href="/contacto" className="text-white/80 hover:text-main transition-colors">
            Contacto
          </Link>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.facebook.com/numenpublicidad" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-main transition-colors">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.instagram.com/numenpublicidad" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-main transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/numenpublicidad" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-main transition-colors">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://twitter.com/numenpublicidad" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-main transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright y Enlaces Legales */}
        <div className="text-sm text-white/60">
          <p className="mb-2">
            &copy; {currentYear} Numen Publicidad. Todos los derechos reservados.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/politica-privacidad" className="hover:text-main transition-colors">
              Política de Privacidad
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/terminos-condiciones" className="hover:text-main transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}