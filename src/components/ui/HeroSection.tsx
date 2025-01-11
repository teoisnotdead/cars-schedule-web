import { useNavigate } from "react-router-dom";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-blue-900 text-white w-full py-12">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: 'url(/bg-hero.webp)',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Cambio de Aceite
        </h1>
        <p className="text-lg sm:text-xl text-zinc-200 mb-6 drop-shadow-lg">
          Reserva tu cita de cambio de aceite en línea con el mejor servicio.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded hover:bg-blue-600"
          onClick={() => navigate("/agendar")}
        >
          Reservar tu cambio de aceite
        </button>
      </div>
    </section>
  );
};