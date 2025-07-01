import { useNavigate } from "react-router-dom";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-blue-950 text-white w-full py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: 'url(/bg-hero.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/80 via-blue-950/60 to-cyan-900/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-2xl text-cyan-300">
          Cambio de Aceite
        </h1>
        <p className="text-lg sm:text-xl text-zinc-200 mb-8 drop-shadow-lg">
          Reserva tu cita de cambio de aceite en línea con el mejor servicio.
        </p>
        <button
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 text-white font-bold text-lg rounded-xl shadow-lg hover:scale-105 hover:from-cyan-400 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onClick={() => navigate("/agendar")}
        >
          Reservar tu cambio de aceite
        </button>
      </div>
    </section>
  );
};