export function Stats() {
  const stats = [
    { number: "200+", label: "Clientes satisfechos" },
    { number: "500+", label: "Proyectos completados" },
    { number: "50+", label: "Empresas transformadas" },
    { number: "98%", label: "Tasa de retención" }
  ];

  return (
    <div className="bg-gradient-to-r from-main to-accent  p-8 md:p-12 text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
            Numeros{" "}
            <span className="block text-white">
              que nos respaldan
            </span>
          </h2>
        <p className="text-white/90 text-lg">
          Más de 5 años construyendo el futuro digital de nuestros clientes
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
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
  );
}