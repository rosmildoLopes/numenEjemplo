import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

// Definimos la interfaz de la herramienta y sus props
interface Tool {
  name: string;
  description: string;
  url: string;
  icon: React.ElementType; // El tipo de dato para el ícono es un componente de React
}

interface ToolCardProps {
  tool: Tool;
  index: number;
}

const ToolCard = ({ tool, index }: ToolCardProps) => {
  const IconComponent = tool.icon; // Guardamos el componente del ícono en una variable

  return (
    <Card
      className="group hover-lift border-0 shadow-md hover:shadow-md bg-white backdrop-blur-sm hover:shadow-accent transition duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-4">
        {/* Renderizamos el componente del ícono */}
        <div className="w-14 h-14 bg-gradient-to-br from-main to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-7 h-7 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-main transition-colors">
          {tool.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {tool.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="gradient"
          className="w-full group-hover:bg-gradient-to-r group-hover:from-main group-hover:to-accent group-hover:text-white transition duration-100"
          asChild
        >
          <Link href={tool.url} target="_blank">
            Visitar sitio
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ToolCard;