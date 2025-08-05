import Head from 'next/head';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function MarketingDigital() {
  return (
    <>
      <Head>
        <title>Marketing Digital | Numen Publicidad</title>
        <meta name="description" content="Estrategias de marketing digital medibles y orientadas a resultados para maximizar tu ROI." />
      </Head>

      <main className="bg-gradient-to-b from-gray-100/50 to-gray-100/80">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-main/10">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Transforma tu negocio con <span className="block text-transparent bg-clip-text bg-gradient-to-r from-main to-accent">Marketing Digital Estratégico</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dejamos atrás las conjeturas. Creamos estrategias de marketing digital basadas en datos que no solo aumentan tu visibilidad, sino que impulsan un crecimiento real y medible.
            </p>
            <Button size="lg" asChild>
              <Link href="/contacto">
                Comenzar mi Estrategia <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              ¿Por qué elegir nuestro servicio de Marketing Digital?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              En un mercado saturado, necesitas más que solo una presencia online. Necesitas una estrategia inteligente que se adapte y optimice constantemente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Enfoque en ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  Nos centramos en las métricas que importan: conversiones, clientes potenciales y retorno de inversión, no solo clics.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Análisis de Datos Avanzado</CardTitle>
                </CardHeader>
                <CardContent>
                  Utilizamos herramientas de vanguardia para analizar el comportamiento del usuario y tomar decisiones informadas.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Estrategias Personalizadas</CardTitle>
                </CardHeader>
                <CardContent>
                  Cada negocio es único. Diseñamos un plan a medida que se alinea con tus objetivos y tu público objetivo.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      
        {/* Call to Action */}
        <section className="py-20">
          <div className="text-center bg-gradient-to-r from-main to-accent rounded-2xl p-8 md:p-12 text-white max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              ¿Listo para crecer?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Permítenos diseñar la estrategia que tu negocio necesita para dominar el mercado digital.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link href="/contacto">
                Solicitar Consulta Gratuita <ArrowRight className="ml-2 h-7 w-7" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}