"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background py-6 shadow-sm">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Image className="w-32 p-0" src='/logo_Negro.png' width={300} height={100} priority alt="logo numen publicidad color negro"/>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-500 hover:text-main font-medium">
            Inicio
          </Link>
          <Link
            href="#servicios-detalle"
            className="text-gray-500 hover:text-main font-medium"
          >
            Servicios
          </Link>
          <Link href="#" className="text-gray-500 hover:text-main font-medium">
            Academia
          </Link>
        </nav>

        <Link href="#contacto" className="">
          <Button variant='gradient' size='lg'>¡Impulsa Tu Negocio!</Button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-main focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden px-6 pt-4 space-y-4">
          <Link
            href="#servicios-detalle"
            className="block text-gray-500 hover:text-main font-medium"
          >
            Servicios
          </Link>
          <Link
            href="#proceso"
            className="block text-gray-500 hover:text-main font-medium"
          >
            Proceso
          </Link>
          <Link
            href="#testimonios"
            className="block text-gray-500 hover:text-main font-medium"
          >
            Testimonios
          </Link>
          <Link
            href="#contacto"
            className="block text-gray-500 hover:text-main font-medium"
          >
            Contacto
          </Link>
          <Link
            href="#contacto"
            className="block bg-main hover:bg-teal-700 text-white px-4 py-2 rounded-full font-bold shadow-md text-center"
          >
            ¡Impulsa Tu Negocio!
          </Link>
        </nav>
      )}
    </nav>
  );
}
