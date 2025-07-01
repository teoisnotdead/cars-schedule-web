const services = [
  {
    title: "Cambio de aceite",
    description: "Mantenemos tu motor funcionando de manera eficiente.",
  },
  {
    title: "Cambio de filtros",
    description: "Mantenemos tu filtro funcionando de manera eficiente.",
  },
  {
    title: "Revisión de frenos",
    description: "Aseguramos que tus frenos estén en óptimas condiciones.",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="my-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-zinc-50 mb-6">Servicios</h2>
      <p className="text-zinc-400 mb-6">
        Ofrecemos servicios de alta calidad para mantener tu vehículo en óptimas condiciones.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-transparent border border-zinc-800 shadow-lg transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-900/40 backdrop-blur-md"
          >
            <h3 className="text-lg font-bold text-cyan-400 mb-2 drop-shadow">
              {service.title}
            </h3>
            <p className="text-zinc-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
