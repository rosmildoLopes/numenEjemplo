import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  Megaphone, 
  Search, 
  Smartphone, 
  PenTool, 
  Globe,
  ArrowRight 
} from "lucide-react";

const Servicios = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Marketing Digital",
      description: "Estrategias de marketing digital medibles y orientadas a resultados para maximizar tu ROI.",
      features: ["Analytics avanzado", "Segmentación precisa", "Optimización continua"]
    },
    {
      icon: Megaphone,
      title: "Publicidad Digital",
      description: "Campañas publicitarias en Google Ads, Facebook, Instagram y otras plataformas clave.",
      features: ["Google Ads", "Meta Ads", "LinkedIn Ads"]
    },
    {
      icon: Search,
      title: "SEO & SEM",
      description: "Posicionamiento orgánico y de pago para aumentar tu visibilidad en buscadores.",
      features: ["SEO técnico", "Contenido optimizado", "Link building"]
    },
    {
      icon: Smartphone,
     title: "Numen Bot",
      description: "Solución de vanguardia con IA para optimizar la interacción y eficiencia con tus clientes.",
      features: ["Respuestas instantáneas 24/7", "Eficiencia operativa", "Experiencia del cliente mejorada"]
    },
    {
      icon: PenTool,
      title: "Diseño Creativo",
      description: "Diseño gráfico y creativo que comunica tu mensaje de forma efectiva y memorable.",
      features: ["Branding", "Diseño web", "Creatividades publicitarias"]
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Sitios web optimizados para conversión y experiencia de usuario excepcional.",
      features: ["Responsive design", "UX/UI optimizado", "Performance"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-100/50 to-gray-100/80">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-main/10 rounded-full text-main text-sm font-medium mb-4">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
            Soluciones integrales de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-main to-verde p-3">
              marketing digital
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desarrollamos estrategias personalizadas que combinan creatividad, 
            tecnología y análisis de datos para impulsar el crecimiento de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover-lift border-0 shadow-md hover:shadow-lg bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-main to-verde rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-main transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-main rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-main group-hover:to-verde  group-hover:text-white transition duration-100"
                >
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-main to-verde rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            ¿Listo para transformar tu negocio?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos digitales.
          </p>
          <Button variant="hero" size="xl" className="bg-white text-main hover:text-verde hover:shadow-2xl hover:bg-white font-bold ">
            Solicitar Consulta Gratuita
            <ArrowRight className="ml-2 h-7 w-7" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Servicios;