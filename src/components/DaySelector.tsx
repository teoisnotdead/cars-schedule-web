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
        className={`px-4 py-2 rounded-md text-sm sm:text-base capitalize ${selectedDate.toDateString() === day.toDateString()
            ? "bg-blue-600 text-white"
            : "bg-zinc-700 text-white hover:bg-zinc-600"
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
