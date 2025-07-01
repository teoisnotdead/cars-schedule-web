interface AvailableHoursProps {
  availableHours: string[];
  selectedHour: string;
  onHourClick: (hour: string) => void;
  isLoading: boolean;
}

export const AvailableHours: React.FC<AvailableHoursProps> = ({
  availableHours,
  selectedHour,
  onHourClick,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-20">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-blue-500 border-blue-300"></div>
      </div>
    );
  }

  if (availableHours.length === 0) {
    return (
      <p className="text-gray-400 text-lg mb-6">No hay horas disponibles para este día.</p>
    );
  }

  return (
    <ul
      className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 mb-6"
      role="list"
    >
      {availableHours.map((hour) => (
        <li key={hour}>
          <button
            onClick={() => onHourClick(hour)}
            className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${selectedHour === hour
                ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 text-white scale-105"
                : "bg-zinc-800 text-cyan-200 hover:bg-cyan-900 hover:text-white hover:scale-105"
              }`}
          >
            {hour}
          </button>
        </li>
      ))}
    </ul>
  );
};
