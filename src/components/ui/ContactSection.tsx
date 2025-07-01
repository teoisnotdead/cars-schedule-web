const WHATSAPP_NUMBER = "56951922979"
const DEFAULT_MESSAGE = "¡Hola! Tengo algunas dudas y me gustaría recibir más información."

export const ContactSection: React.FC = () => {
  return (
    <section className="my-12 flex flex-col items-center text-center">
      <h2 className="text-3xl font-semibold text-cyan-300 mb-6 drop-shadow">¿Tienes dudas?</h2>
      <p className="text-lg text-zinc-300 mb-8 max-w-xl">
        Estamos aquí para ayudarte. Si tienes alguna consulta, no dudes en escribirnos.
      </p>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-green-500 via-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:from-green-400 hover:to-cyan-400 transition-all duration-200 flex items-center justify-center gap-2 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        ¡Escríbenos!
        <img
          src="/whatsapp-logo-variant.svg"
          alt="WhatsApp Logo"
          className="w-5 h-5 filter invert drop-shadow"
        />
      </a>
    </section>
  );
};
