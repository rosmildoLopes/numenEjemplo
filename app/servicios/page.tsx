import Head from 'next/head';
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

import Servicios  from "@/components/Servicios"; 
import { Button } from '@/components/ui/button';

export default function ServiciosPage() {
  return (
    <>
      <Head>
        <title>Servicios | Numen Publicidad</title>
        <meta name="description" content="Descubre todas las soluciones de marketing digital, publicidad, diseño y desarrollo web que Numen Publicidad ofrece para tu negocio." />
      </Head>

      <main className="bg-gradient-to-b from-gray-100/50 to-gray-100/80">
        {/* Hero Section para la página de Servicios */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-main/10">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Soluciones Integrales para tu Crecimiento Digital
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              En Numen Publicidad, te ofrecemos un ecosistema completo de servicios de marketing digital, diseñados para transformar tu negocio y alcanzar tus objetivos más ambiciosos.
            </p>
            <Link href="#servicios-list" passHref>
              <Button size="lg" className="bg-main text-white hover:bg-main/90">
                Explorar Servicios <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* El componente principal de Servicios */}
        <div id="servicios-list">
          <Servicios />
        </div>

        {/* Sección de "Nuestro Proceso de Éxito" - Un elemento adicional y atractivo */}
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-main/10 rounded-full text-main text-sm font-medium mb-4">
                Cómo lo Hacemos
              </div>
              <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
                Nuestro Proceso de Éxito
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Cada proyecto es un viaje. Te guiamos a través de un proceso probado para asegurar que tu inversión se traduzca en resultados tangibles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Paso 1 */}
              <div className="text-center group hover-lift transition-transform duration-300 p-6 rounded-xl bg-white shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-main to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Análisis y Estrategia</h3>
                <p className="text-muted-foreground text-sm">
                  Estudiamos tu mercado, competencia y objetivos para diseñar un plan de acción detallado.
                </p>
              </div>
              {/* Paso 2 */}
              <div className="text-center group hover-lift transition-transform duration-300 p-6 rounded-xl bg-white shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-main to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Implementación y Creación</h3>
                <p className="text-muted-foreground text-sm">
                  Lanzamos las campañas y creamos los activos digitales necesarios con un enfoque creativo y técnico.
                </p>
              </div>
              {/* Paso 3 */}
              <div className="text-center group hover-lift transition-transform duration-300 p-6 rounded-xl bg-white shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-main to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Optimización Continua</h3>
                <p className="text-muted-foreground text-sm">
                  Monitoreamos el rendimiento en tiempo real y ajustamos las tácticas para mejorar los resultados constantemente.
                </p>
              </div>
              {/* Paso 4 */}
              <div className="text-center group hover-lift transition-transform duration-300 p-6 rounded-xl bg-white shadow-md border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-main to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-3xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Reporte y Crecimiento</h3>
                <p className="text-muted-foreground text-sm">
                  Te entregamos informes transparentes que demuestran el crecimiento y planificamos los siguientes pasos juntos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}