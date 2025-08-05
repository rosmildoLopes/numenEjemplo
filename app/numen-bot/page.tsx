import Head from 'next/head';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function NumenBot() {
  return (
    <>
      <Head>
        <title>Numen Bot | Numen Publicidad</title>
        <meta name="description" content="Solución de vanguardia con IA para optimizar la interacción y eficiencia con tus clientes." />
      </Head>

      <main className="bg-gradient-to-b from-gray-100/50 to-gray-100/80">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-main/10">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Numen Bot: La IA que revoluciona tu servicio al cliente
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Optimiza tus procesos, mejora la experiencia del usuario y opera 24/7 con nuestra solución de vanguardia impulsada por inteligencia artificial.
            </p>
            <Button size="lg" asChild>
              <Link href="/contacto">
                Implementar Numen Bot <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
              Ventajas de Numen Bot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Disponibilidad 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  Tu negocio nunca duerme. Numen Bot responde instantáneamente a las consultas de los clientes a cualquier hora del día.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Eficiencia Operativa</CardTitle>
                </CardHeader>
                <CardContent>
                  Automatiza tareas repetitivas y libera a tu equipo para que se enfoque en interacciones más complejas y estratégicas.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Experiencia del Cliente Mejorada</CardTitle>
                </CardHeader>
                <CardContent>
                  Ofrece respuestas rápidas y precisas, personalizadas según el historial y las preferencias de cada usuario.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="text-center bg-gradient-to-r from-main to-accent rounded-2xl p-8 md:p-12 text-white max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Lleva tu negocio al siguiente nivel con IA
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Descubre cómo Numen Bot puede optimizar tu servicio y aumentar la satisfacción de tus clientes.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link href="/contacto">
                Solicitar Demostración <ArrowRight className="ml-2 h-7 w-7" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}