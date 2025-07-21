import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const Resultados = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: "+300%",
      label: "Incremento en ventas",
      description: "Promedio de crecimiento en ventas de nuestros clientes en el primer año"
    },
    {
      icon: Users,
      value: "+150%",
      label: "Aumento en tráfico web",
      description: "Incremento promedio en visitas web después de nuestras campañas"
    },
    {
      icon: Target,
      value: "95%",
      label: "Precisión en targeting",
      description: "Efectividad en alcanzar a la audiencia objetivo correcta"
    },
    {
      icon: Award,
      value: "4.8/5",
      label: "Satisfacción del cliente",
      description: "Puntuación promedio de satisfacción de nuestros clientes"
    }
  ];


  return (
    <section id="resultados" className="py-20 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-verde/10 rounded-full text-verde text-sm font-medium mb-4">
            Resultados Medibles
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
            &quot;Si no se puede medir,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-main to-verde">
              no es un objetivo&quot;
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Todo lo que hacemos lo medimos y optimizamos, acorde a los objetivos específicos 
            de tu empresa. Estos son algunos de nuestros resultados.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((metric, index) => (
            <Card 
              key={metric.label} 
              className="text-center hover-lift border-0 shadow-md bg-white/80 backdrop-blur-lg  hover:-translate-y-2 hover:border border-main hover:shadow-sm hover:shadow-verde duration-300 transition"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className="w-16 h-16 bg-gradient-to-br from-main to-verde rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-4xl font-bold text-main mb-2">
                  {metric.value}
                </CardTitle>
                <div className="text-lg font-semibold text-texto">
                  {metric.label}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Resultados;