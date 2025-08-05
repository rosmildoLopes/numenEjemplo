import Head from 'next/head';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PublicidadDigital() {
  return (
    <>
      <Head>
        <title>Publicidad Digital | Numen Publicidad</title>
        <meta name="description" content="Campañas publicitarias en Google Ads, Facebook, Instagram y otras plataformas clave." />
      </Head>

      <main className="bg-gradient-to-b from-gray-100/50 to-gray-100/80">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-main/10">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Anuncios que convierten, no solo que se ven
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Maximiza tu alcance y atrae a tus clientes ideales con campañas de publicidad digital estratégicamente optimizadas en las plataformas más poderosas del mercado.
            </p>
            <Button size="lg" asChild>
              <Link href="/contacto">
                Lanzar mi Campaña <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
              Nuestras ventajas en Publicidad Digital
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Google Ads Expertos</CardTitle>
                </CardHeader>
                <CardContent>
                  Conquistamos los motores de búsqueda para que tus anuncios aparezcan cuando los clientes están listos para comprar.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Meta Ads (Facebook & Instagram)</CardTitle>
                </CardHeader>
                <CardContent>
                  Creamos segmentaciones ultra-precisas para impactar a tu audiencia donde pasan la mayor parte de su tiempo.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Informes Transparentes</CardTitle>
                </CardHeader>
                <CardContent>
                  Accede a reportes detallados y fáciles de entender que demuestran el rendimiento de tu inversión publicitaria.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="text-center bg-gradient-to-r from-main to-accent rounded-2xl p-8 md:p-12 text-white max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Impulsa tus ventas hoy mismo
            </h3>
            <p className="text-xl mb-8 text-white/90">
              No dejes tu presupuesto en manos del azar. Invierte en campañas que realmente funcionan.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link href="/contacto">
                Hablar con un Experto <ArrowRight className="ml-2 h-7 w-7" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}