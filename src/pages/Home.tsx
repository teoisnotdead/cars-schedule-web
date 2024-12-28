import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center px-6 py-12">
      {/* Encabezado */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-zinc-50">
          <span className="text-blue-500">Cambia tu aceite</span>
        </h1>

        <p className="text-lg text-zinc-400 mt-4">
          Simplificamos la manera en la que programas tus citas. Elige una fecha,
          selecciona un horario, ¡y listo!
        </p>
      </header>


      {/* Llamado a la acción */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-zinc-50 mb-6">
          Agenda tu cita ahora
        </h2>
        <p className="text-zinc-400 mb-8">
          Haz clic en el botón de "Agendar" para iniciar el proceso.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          onClick={() => navigate("/agendar")}
        >
          Agendar Cita
        </button>
      </section>

      {/* Sección de características */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-zinc-50 mb-6">
          ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-zinc-800 rounded shadow-md">
            <h3 className="text-xl font-bold text-blue-500 mb-4">
              Fácil de usar
            </h3>
            <p className="text-zinc-400">
              Con una interfaz intuitiva, puedes programar tu cita en cuestión
              de minutos.
            </p>
          </div>
          <div className="p-6 bg-zinc-800 rounded shadow-md">
            <h3 className="text-xl font-bold text-blue-500 mb-4">
              Horarios flexibles
            </h3>
            <p className="text-zinc-400">
              Selecciona entre una amplia variedad de horarios disponibles que
              se ajusten a tus necesidades.
            </p>
          </div>
          <div className="p-6 bg-zinc-800 rounded shadow-md">
            <h3 className="text-xl font-bold text-blue-500 mb-4">
              Notificaciones
            </h3>
            <p className="text-zinc-400">
              Recibe recordatorios automáticos para que nunca olvides tus citas.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-zinc-50 mb-6">
          Nuestros Servicios
        </h2>
        <p className="text-zinc-400 mb-6">
          En Gye Cars ofrecemos servicios de alta calidad para mantener tu
          vehículo en óptimas condiciones. Algunos de nuestros servicios
          incluyen:
        </p>
        <ul className="text-zinc-400 list-disc list-inside mb-8">
          <li>Cambio de aceite y filtros</li>
          <li>Revisión de frenos</li>
          <li>Alineación y balanceo</li>
          <li>Diagnóstico computarizado</li>
          <li>Revisión general y mantenimiento preventivo</li>
        </ul>
        {/* <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
          onClick={() => navigate("/servicios")}
        >
          Ver todos los servicios
        </button> */}
      </section>

    </div>
  );
};
