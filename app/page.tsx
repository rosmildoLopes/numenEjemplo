"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProcesoSection from "@/components/ProcesoSection";
import Servicios from "@/components/Servicios";
import Hero from "@/components/HeroDifuminado";
import Resultados from "@/components/Resultados";
import About from "@/components/About";

export default function HomePage() {

  return (
    <div className="font-sans text-texto">
      <main>
        <Hero />
        <Resultados />
        <Servicios/>
        <About/>
        <ProcesoSection />

      </main>

      <footer className=" text-white py-8 text-center text-sm">
        <p>&copy; 2025 Tu Agencia Digital. Todos los derechos reservados.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Política de Privacidad
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-gray-400 hover:text-white">
            Términos y Condiciones
          </a>
        </div>
      </footer>
    </div>
  );
}
