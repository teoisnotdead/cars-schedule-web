import { useLocation, Link, useNavigate } from "react-router-dom";

export const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location || {};
  const { user, car, date, time } = state?.data || {};
  const { name, email, address, phone } = user || {};
  const { patente, brand, model, year } = car || {};

  console.log('state', state);

  if (!state) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-3xl font-bold text-red-500">
          No hay datos de la cita disponibles.
        </h1>
        <button
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          onClick={() => navigate("/")}
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <section className="text-center py-10 px-4">
      <h2 className="text-4xl font-bold mb-4">Cita Confirmada</h2>
      <p className="text-lg mb-6">
        Gracias por usar nuestro servicio. Tu cita ha sido creada exitosamente.
      </p>

      <article className="bg-zinc-700 p-6 rounded-lg mb-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Detalles de la Cita</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <p>
            <span className="font-bold">Nombre:</span> {name}
          </p>
          <p>
            <span className="font-bold">Correo:</span> {email}
          </p>
          <p>
            <span className="font-bold">Dirección:</span> {address}
          </p>
          <p>
            <span className="font-bold">Teléfono:</span> {phone}
          </p>
          <p>
            <span className="font-bold">Fecha:</span> {date}
          </p>
          <p>
            <span className="font-bold">Hora:</span> {time}
          </p>
          <p>
            <span className="font-bold">Patente:</span> {patente}
          </p>
          <p>
            <span className="font-bold">Marca:</span> {brand}
          </p>
          <p>
            <span className="font-bold">Modelo:</span> {model}
          </p>
          <p>
            <span className="font-bold">Año:</span> {year}
          </p>
        </div>
      </article>

      <p className="mb-6">Si necesitas ayuda, por favor contáctanos.</p>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
      >
        Volver al inicio
      </Link>
    </section>
  );
};
