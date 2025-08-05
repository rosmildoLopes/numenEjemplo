import Head from 'next/head';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DisenoCreativo() {
  return (
    <>
      <Head>
        <title>Diseño Creativo | Numen Publicidad</title>
        <meta name="description" content="Diseño gráfico y creativo que comunica tu mensaje de forma efectiva y memorable." />
      </Head>

      <main className="bg-gradient-to-b from-gray-100/50 to-gray-100/80">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-main/10">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              Diseño que enamora, marcas que perduran
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tu marca es tu historia. Creamos identidades visuales poderosas y creatividades impactantes que conectan con tu audiencia y te diferencian de la competencia.
            </p>
            <Button size="lg" asChild>
              <Link href="/contacto">
                Crear mi Identidad de Marca <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
              Nuestros Servicios de Diseño Creativo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Branding e Identidad Visual</CardTitle>
                </CardHeader>
                <CardContent>
                  Construimos desde cero la personalidad de tu marca, creando logotipos, paletas de colores y tipografías que reflejan tus valores.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Diseño Web y UX/UI</CardTitle>
                </CardHeader>
                <CardContent>
                  Diseñamos interfaces intuitivas y atractivas que no solo se ven bien, sino que guían a los usuarios hacia la conversión.
                </CardContent>
              </Card>
              <Card className="hover-lift border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Creatividades Publicitarias</CardTitle>
                </CardHeader>
                <CardContent>
                  Creamos anuncios visualmente impactantes para redes sociales y banners que captan la atención y maximizan el rendimiento de tus campañas.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="text-center bg-gradient-to-r from-main to-accent rounded-2xl p-8 md:p-12 text-white max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Haz que tu marca sea inolvidable
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Déjanos dar vida a tu visión con un diseño que hable por sí mismo.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link href="/contacto">
                Agenda tu Consultoría <ArrowRight className="ml-2 h-7 w-7" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}