import Head from 'next/head';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DesarrolloWeb() {
  return (
    <>
      <Head>
        <title>Desarrollo Web | Numen Publicidad</title>
        <meta name="description" content="Sitios web optimizados para conversión y experiencia de usuario excepcional." />
      </Head>

      <main className="bg-gradient-to-b from-gray-100/50 to-gray-100/80">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-main/10">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Creamos experiencias digitales que convierten
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tu sitio web es el corazón de tu presencia online. Construimos plataformas digitales que no solo se ven increíbles, sino que están optimizadas para el rendimiento y la conversión.
            </p>
            <Button size="lg" asChild>
              <Link href="/contacto">
                Construir mi Sitio Web <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Un proceso de desarrollo enfocado en resultados
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Combinamos diseño estético con funcionalidad técnica para crear sitios web rápidos, seguros y diseñados para el éxito.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Diseño Responsivo</CardTitle>
                </CardHeader>
                <CardContent>
                  Tu sitio se verá y funcionará perfectamente en cualquier dispositivo, desde ordenadores de escritorio hasta móviles.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>UX/UI Optimizada</CardTitle>
                </CardHeader>
                <CardContent>
                  Cada elemento está pensado para ofrecer una experiencia de usuario fluida, que guíe a los visitantes a través del embudo de ventas.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Alto Rendimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  Construimos sitios web que cargan rápidamente, mejorando la retención de usuarios y el posicionamiento en buscadores.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="text-center bg-gradient-to-r from-main to-accent rounded-2xl p-8 md:p-12 text-white max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              ¿Listo para un sitio web que vende?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Transforma tu presencia digital con una plataforma que te ayude a alcanzar tus metas.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link href="/contacto">
                Empezar mi Proyecto Web <ArrowRight className="ml-2 h-7 w-7" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}