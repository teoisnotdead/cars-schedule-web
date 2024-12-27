import { useLocation } from "react-router-dom";

export const CancellationPage: React.FC = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <section className="text-center px-4 mt-14 md:mt-0">
      <h2 className="text-4xl font-extrabold mb-6 text-red-600">
        Cita Cancelada
      </h2>
      <div className="max-w-md mx-auto bg-zinc-800 p-6 rounded-lg shadow-md">
        <p className="text-lg text-white font-semibold mb-4">
          Tu cita ha sido cancelada exitosamente.
        </p>
        {state?.accessCode && (
          <p className="text-sm text-gray-400">
            Código de reserva: <span className="text-white">{state.accessCode}</span>
          </p>
        )}
        <p className="text-sm text-gray-400 mt-4">
          Si necesitas agendar otra cita, no dudes en hacerlo desde la página de
          inicio.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
        >
          Volver a Inicio
        </a>
      </div>
    </section>
  );
};
