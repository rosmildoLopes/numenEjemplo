import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Shield, LucideIcon } from "lucide-react";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Heart,
    title: "Pasión",
    description: "Nos apasiona la publicidad digital y el éxito de nuestros clientes"
  },
  {
    icon: Target,
    title: "Precisión",
    description: "Cada estrategia está diseñada para alcanzar objetivos específicos"
  },
  {
    icon: Lightbulb,
    title: "Creatividad",
    description: "Soluciones innovadoras que destacan en el mundo digital"
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Transparencia total en procesos y resultados"
  }
];

export function Valores() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl md:text-6xl text-center font-bold text-foreground mb-6">
            Nuestros{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-main to-accent">
              Valores
            </span>
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto">
        {values.map((value, index) => (
          <Card
            key={value.title}
            className="text-center hover-lift border-0 shadow-md bg-white/80 backdrop-blur-sm"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-main to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}