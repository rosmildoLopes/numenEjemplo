import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp } from "lucide-react";

export function Mission() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 w-11/12 mx-auto">
      <Card className="hover-lift border-0 shadow-lg bg-gradient-to-br from-main to-accent text-white">
        <CardContent className="p-8">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
          <p className="text-white/90 leading-relaxed">
            Acompañar a las empresas en su proceso de transformación digital,
            desarrollando estrategias de marketing que generen resultados medibles
            y contribuyan al crecimiento sostenible de sus negocios.
          </p>
        </CardContent>
      </Card>

      <Card className="hover-lift border-0 shadow-lg bg-white/90 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="w-12 h-12 bg-gradient-to-br from-main to-accent rounded-xl flex items-center justify-center mb-6">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Nuestra Visión</h3>
          <p className="text-muted-foreground leading-relaxed">
            Ser la agencia de marketing digital de referencia, reconocida por
            nuestra capacidad de generar transformaciones culturales que impulsen
            el éxito empresarial en el ecosistema digital.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}