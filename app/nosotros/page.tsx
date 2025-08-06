import Head from 'next/head';
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

// Importa los componentes que ya hemos creado
import { Team } from "@/components/Team";
import { Button } from '@/components/ui/button';
import { Mission } from '@/components/Mission';
import { Valores } from '@/components/Valores';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre Nosotros | Numen Publicidad</title>
        <meta name="description" content="Conoce la historia, la misión y al equipo detrás de Numen Publicidad. Somos un equipo de profesionales apasionados que impulsan el crecimiento digital." />
      </Head>

      <main className="bg-gradient-to-b from-gray-100/50 to-gray-100/80">
        {/* Hero Section para la página de Nosotros */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-main/10">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              La transformación digital es cultural, no tecnológica.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Más de 5 años impulsando la visión de nuestros clientes. Conoce la historia, la misión y al equipo detrás del éxito.
            </p>
            <Link href="#equipo" passHref>
              <Button size="lg" className="bg-main text-white hover:bg-main/90">
                Conoce a Numen Publicidad <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
            <Mission />
          </div>
        </section>

        <section className="py-20 bg-gray-100/50">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
            <Valores />
          </div>
        </section>

        <section id="equipo" className="py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
            <Team />
          </div>
        </section>


      </main>
    </>
  );
}