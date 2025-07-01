const features = [
  {
    title: "Fácil de usar",
    description:
      "Con una interfaz intuitiva, puedes programar tu cita en cuestión de minutos.",
  },
  {
    title: "Horarios flexibles",
    description:
      "Selecciona entre una amplia variedad de horarios disponibles que se ajusten a tus necesidades.",
  },
  {
    title: "Gestiona tu reserva",
    description:
      "Puedes gestionar tu reserva en cualquier momento.",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="my-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-zinc-50 mb-6">
        ¿Por qué elegirnos?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-transparent border border-zinc-800 shadow-lg transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-cyan-900/40 backdrop-blur-md"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4 drop-shadow">
              {feature.title}
            </h3>
            <p className="text-zinc-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
