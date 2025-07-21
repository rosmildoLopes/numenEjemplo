import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  TrendingUp,
  Award,
  Heart,
  Zap,
  Shield
} from "lucide-react";

const About = () => {
  const values = [
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

const team = [
  {
    name: "Fernando Cerimedo",
    role: "Founder",
    experience: "Holding Group INC.", 
    specialty: "Strategy & Vision", 
    email: "fernando@numenpublicidad.com",
    location: "Buenos Aires, Argentina"
  },
  {
    name: "Natalia Basil",
    role: "Chief Business Officer",
    experience: "Holding Group INC.", 
    specialty: "Business Development", 
    email: "natalia@numenpublicidad.com",
    location: "Buenos Aires, Argentina"
  },
  {
    name: "Tomás Beltrame",
    role: "CEO Numen Publicidad",
    experience: "Leadership", 
    specialty: "Digital Advertising", 
    email: "tomas@numenpublicidad.com",
    location: "Santiago, Chile"
  },
  {
    name: "Javier Tellez-Girón Peón",
    role: "Country Manager",
    experience: "International Business", 
    specialty: "Market Expansion", 
    email: "chile@numenpublicidad.com", 
    location: "Chile" 
  }
];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-main/20 to-verde/20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-verde/10 rounded-full text-verde text-sm font-medium mb-4">
            Nuestro Equipo
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
            Somos profesionales
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-main to-verde">
              curiosos, creativos y apasionados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un equipo multidisciplinario que combina experiencia, creatividad y tecnología 
            para impulsar la transformación digital de tu empresa.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="hover-lift border-0 shadow-lg bg-gradient-to-br from-main to-verde text-white">
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
              <div className="w-12 h-12 bg-gradient-to-br from-main to-verde rounded-xl flex items-center justify-center mb-6">
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

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center hover-lift border-0 shadow-md bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-main to-verde rounded-2xl flex items-center justify-center mx-auto mb-4">
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

        {/* Team */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Conoce al Equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="group hover-lift border-0 shadow-md bg-white/80 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-2 bg-gradient-to-r from-main to-verde"></div>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-main to-verde rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-main font-medium mb-2">
                    {member.role}
                  </p>
                  <div className="flex justify-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {member.experience}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {member.specialty}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-main to-verde rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Números que nos respaldan
            </h3>
            <p className="text-white/90 text-lg">
              Más de 5 años construyendo el futuro digital de nuestros clientes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Clientes satisfechos" },
              { number: "500+", label: "Proyectos completados" },
              { number: "50+", label: "Empresas transformadas" },
              { number: "98%", label: "Tasa de retención" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 