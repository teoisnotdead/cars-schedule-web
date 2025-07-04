interface DaySelectorProps {
  weekDays: Date[];
  selectedDate: Date;
  onDayClick: (day: Date) => void;
  formatDate: (date: Date, formatType: "day" | "dayMonth") => string;
}

export const DaySelector: React.FC<DaySelectorProps> = ({
  weekDays,
  selectedDate,
  onDayClick,
  formatDate,
}) => (
  <nav
    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6"
    aria-label="Seleccionar día"
  >
    {weekDays.map((day) => (
      <button
        key={day.toISOString()}
        onClick={() => onDayClick(day)}
        className={`px-4 py-2 rounded-lg text-sm sm:text-base capitalize font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${selectedDate.toDateString() === day.toDateString()
            ? "bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 text-white scale-105"
            : "bg-zinc-800 text-cyan-200 hover:bg-cyan-900 hover:text-white hover:scale-105"
          }`}
      >
        <time dateTime={day.toISOString()} className="block font-bold">
          {formatDate(day, "day")}
        </time>
        <span className="normal-case">{formatDate(day, "dayMonth")}</span>
      </button>
    ))}
  </nav>
);
