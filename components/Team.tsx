import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  email: string;
  location: string;
}

const team: TeamMember[] = [
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

export function Team() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl md:text-6xl font-bold text-center text-foreground mb-6">
            Conocé{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-main to-accent">
              Nuestro equipo
            </span>
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto">
        {team.map((member, index) => (
          <Card
            key={member.name}
            className="group hover-lift border-0 shadow-md bg-white/80 backdrop-blur-sm overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="h-2 bg-gradient-to-r from-main to-accent"></div>
            <CardContent className="p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-main to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
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
  );
}