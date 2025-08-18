"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion"; // Importamos Framer Motion para animaciones

// Definimos la interfaz para los elementos del menú
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Herramientas", href: "/herramientas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "FAQ", href: "/#faq" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm transition-colors duration-300 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            className="w-32 h-auto p-0"
            src="/logo_Negro.png"
            width={300}
            height={100}
            priority
            alt="logo numen publicidad color negro"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-main font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/#contacto" passHref>
            <Button variant="gradient" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              ¡Impulsa Tu Negocio!
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="/#contacto" passHref>
            <Button variant="gradient" size="sm" className="px-3 py-1.5 text-sm shadow-md">
              <span className="sr-only">Contacto</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <button
            className="text-foreground focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-label="Cerrar menú" />
            ) : (
              <Menu className="h-6 w-6" aria-label="Abrir menú" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 pt-2 border-t border-gray-200"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-lg text-foreground hover:text-main font-medium transition-colors p-2 -ml-2 rounded-md"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#contacto" passHref>
                  <Button
                    variant="gradient"
                    className="w-full mt-2"
                    onClick={closeMenu}
                  >
                    ¡Impulsa Tu Negocio!
                  </Button>
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </nav>
  );
}