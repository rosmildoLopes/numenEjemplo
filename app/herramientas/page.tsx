import React from "react";
import ToolCard from "@/components/ToolCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; 


import { FaEye, FaBullhorn } from 'react-icons/fa'; 

// Definimos la interfaz para los datos de las herramientas
interface Tool {
  name: string;
  description: string;
  url: string;
  icon: React.ElementType; 
}

const herramientasData: Tool[] = [
  {
    name: "EyesOver",
    description: "EyesOver es una plataforma de análisis de datos que te ayuda a monitorear y comprender el rendimiento de tus campañas digitales en tiempo real. Utiliza inteligencia artificial para identificar tendencias y generar insights accionables.",
    url: "https://www.eyesover.com/",
    icon: FaEye,
  },
  {
    name: "Campaign Nucleus",
    description: "Campaign Nucleus es una herramienta de gestión de campañas políticas que centraliza la comunicación, el voluntariado y la recaudación de fondos. Ofrece un conjunto de herramientas robustas para la planificación y ejecución de estrategias políticas.",
    url: "https://www.campaignnucleus.com/",
    icon: FaBullhorn,
  },
];

export default function Herramientas() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-mute min-h-screen">
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-main/10 rounded-full text-main text-sm font-medium mb-4">
            Nuestras Herramientas
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
            Tecnología de Vanguardia
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-main to-accent pb-5">
              para tu Éxito Digital
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Utilizamos las mejores herramientas del mercado para garantizar el éxito de tus proyectos y campañas.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16 w-11/12 mx-auto">
          {herramientasData.map((tool, index) => (
            <ToolCard key={index} tool={tool} index={index} />
          ))}
        </div>

        {/* CTA section */}
        <div className="w-11/12 mx-auto text-center bg-gradient-to-r md:mt-56 from-main to-accent rounded-2xl p-8 md:p-12 text-white hover:bg-gradient-to-r hover:from-accent hover:to-main transition duration-300">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>
          <Button
            variant="hero"
            size="xl"
            className="bg-white text-main hover:text-accent hover:shadow-2xl hover:bg-white font-bold"
            asChild
          >
            <Link href="/contacto">
              Solicitar Consulta Gratuita
              <ArrowRight className="ml-2 h-7 w-7" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}