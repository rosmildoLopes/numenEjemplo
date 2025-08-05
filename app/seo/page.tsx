import Head from 'next/head';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SeoSem() {
  return (
    <>
      <Head>
        <title>SEO & SEM | Numen Publicidad</title>
        <meta name="description" content="Posicionamiento orgánico y de pago para aumentar tu visibilidad en buscadores." />
      </Head>

      <main className="bg-gradient-to-b from-gray-100/50 to-gray-100/80">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-main/10">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Domina las búsquedas, capta a tu audiencia
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Combina la potencia del posicionamiento orgánico (SEO) y las campañas de pago (SEM) para asegurar que tu marca sea la primera que vean tus clientes potenciales.
            </p>
            <Button size="lg" asChild>
              <Link href="/contacto">
                Mejorar mi Posicionamiento <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Un enfoque dual para el éxito
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              No solo te ayudamos a aparecer, te ayudamos a ser relevante. Nuestra estrategia de SEO y SEM está diseñada para un crecimiento a largo plazo y resultados inmediatos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>SEO (Posicionamiento Orgánico)</CardTitle>
                </CardHeader>
                <CardContent>
                  Optimizamos tu sitio web para que los buscadores lo amen. Mejoramos el contenido, la estructura técnica y la autoridad para un flujo constante de tráfico gratuito.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>SEM (Anuncios en Buscadores)</CardTitle>
                </CardHeader>
                <CardContent>
                  Lanzamos campañas de Google Ads ultra-dirigidas para que tus anuncios lleguen a los usuarios correctos en el momento exacto en que están buscando tus productos o servicios.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="text-center bg-gradient-to-r from-main to-accent rounded-2xl p-8 md:p-12 text-white max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              ¿Listo para estar en la cima?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Empieza hoy mismo a generar tráfico de calidad y a convertir más visitantes en clientes.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link href="/contacto">
                Obtener mi Auditoría SEO <ArrowRight className="ml-2 h-7 w-7" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}