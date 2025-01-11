const WHATSAPP_NUMBER = "56951922979"
const DEFAULT_MESSAGE = "¡Hola! Tengo algunas dudas y me gustaría recibir más información."

export const ContactSection: React.FC = () => {
  return (
    <section className="my-12 flex flex-col items-center text-center">
      <h2 className="text-3xl font-semibold text-zinc-50 mb-6">¿Tienes dudas?</h2>
      <p className="text-lg text-zinc-400 mb-8 max-w-xl">
        Estamos aquí para ayudarte. Si tienes alguna consulta, no dudes en escribirnos.
      </p>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2"
      >
        Chatea con nosotros en WhatsApp
        <img
          src="/whatsapp-logo-variant.svg"
          alt="WhatsApp Logo"
          className="w-5 h-5 filter invert"
        />
      </a>
    </section>
  );
};
