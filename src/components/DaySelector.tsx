interface DaySelectorProps {
  weekDays: Date[];
  selectedDate: Date;
  onDayClick: (day: Date) => void;
  isPastDay: (day: Date) => boolean;
  formatDate: (date: Date, formatType: "day" | "numeric") => string;
}

export const DaySelector: React.FC<DaySelectorProps> = ({
  weekDays,
  selectedDate,
  onDayClick,
  isPastDay,
  formatDate,
}) => (
  <nav
    className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6"
    aria-label="Seleccionar día"
  >
    {weekDays.map((day) => (
      <button
        key={day.toISOString()}
        onClick={() => !isPastDay(day) && onDayClick(day)}
        className={`px-4 py-2 rounded-md text-sm sm:text-base capitalize ${selectedDate.toDateString() === day.toDateString()
            ? "bg-blue-600 text-white"
            : isPastDay(day)
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-zinc-700 text-white hover:bg-zinc-600"
          }`}
        disabled={isPastDay(day)}
      >
        <time dateTime={day.toISOString()} className="block font-bold">
          {formatDate(day, "day")}
        </time>
        <span>{formatDate(day, "numeric")}</span>
      </button>
    ))}
  </nav>
);

