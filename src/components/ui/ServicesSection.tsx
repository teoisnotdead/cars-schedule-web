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
      <h2 className="text-2xl font-semibold text-zinc-50 mb-6">Servicios</h2>
      <p className="text-zinc-400 mb-6">
        Ofrecemos servicios de alta calidad para mantener tu vehículo en óptimas condiciones.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-zinc-800 rounded shadow-md border border-transparent transition duration-300 hover:bg-zinc-900 hover:border-zinc-200"
          >
            <h3 className="text-lg font-bold text-blue-500 mb-2">
              {service.title}
            </h3>
            <p className="text-zinc-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
