interface MapImageProps {
  src: string
  alt?: string
}

export const MapImage: React.FC<MapImageProps> = ({ src, alt = "Mapa de RM" }) => {
  return (
    <div className="flex justify-center">
      <img
        src={src}
        alt={alt}
        className="w-full max-w-3xl rounded-lg shadow-white drop-shadow-lg"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};