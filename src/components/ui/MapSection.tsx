import { MapImage } from "../MapImage";


export const MapSection: React.FC = () => {
  return (
    <section className="my-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-zinc-50 mb-6">
        Comunidades Habilitadas
      </h2>
      <p className="text-zinc-400 text-center mb-8 max-w-xl">
        Estas son las comunas de Santiago donde nuestro servicio está disponible.
      </p>
      <div className="w-full flex justify-center">
        <MapImage src="/Comunas_de_Santiago_Servicio.webp" alt="Mapa de Santiago con comunas habilitadas" />
      </div>
    </section>
  );
};
