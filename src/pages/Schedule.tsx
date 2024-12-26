import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AvailableHoursResponse {
  data: string[];
}

interface UserForm {
  name: string;
  email: string;
  address: string;
  phone: string;
}

export const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [availableHours, setAvailableHours] = useState<string[]>([]);
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [userForm, setUserForm] = useState<UserForm>({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWeekDays = (date: Date): Date[] => {
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    startOfWeek.setDate(startOfWeek.getDate() + diff);

    return Array.from({ length: 7 }).map((_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(day.getDate() + i);
      return day;
    });
  };

  const weekDays = getWeekDays(new Date());

  const formatDate = (date: Date, formatType: "day" | "numeric"): string => {
    const options: Intl.DateTimeFormatOptions =
      formatType === "day" ? { weekday: "long" } : { day: "2-digit" };

    return date.toLocaleDateString("es-CL", options);
  };

  const formatDayAndMonth = (date: Date): { day: string; month: string } => {
    const day = date.toLocaleDateString("es-CL", { day: "2-digit" });
    const month = date.toLocaleDateString("es-CL", { month: "long" });
    return { day, month };
  };

  const handleDayClick = (day: Date) => {
    setSelectedDate(new Date(day.getTime()));
    setSelectedHour("");
  };

  const handleHourClick = (hour: string) => {
    setSelectedHour(hour);
  };

  const formatDateForApi = (date: Date): string => {
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().split("T")[0];
  };

  const fetchAvailableHours = async (date: Date): Promise<void> => {
    const formattedDate = formatDateForApi(date);
    try {
      const response = await axios.get<AvailableHoursResponse>(
        `https://gye-cars-schedule.deno.dev/appointments/available-hours?date=${formattedDate}`
      );
      setAvailableHours(response.data.data);
    } catch (error) {
      console.error("Error fetching available hours:", error);
    }
  };

  useEffect(() => {
    fetchAvailableHours(selectedDate);
  }, [selectedDate]);

  const isPastDay = (day: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return day < today;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = (): boolean => {
    return (
      userForm.name.trim() !== "" &&
      userForm.email.trim() !== "" &&
      userForm.address.trim() !== "" &&
      userForm.phone.trim() !== "" &&
      selectedHour !== ""
    );
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const payload = {
        user: userForm,
        date: formatDateForApi(selectedDate),
        time: selectedHour,
      };
      const response = await axios.post(
        "https://gye-cars-schedule.deno.dev/appointments",
        payload
      );

      navigate("/confirmacion", { state: response.data });
    } catch (error) {
      console.error("Error al confirmar la cita:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="text-center px-4 mt-14 md:mt-0">
      <h2 className="text-4xl font-extrabold mb-6">Agendar Cita</h2>

      <nav className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-6" aria-label="Seleccionar día">
        {weekDays.map((day) => (
          <button
            key={day.toISOString()}
            onClick={() => !isPastDay(day) && handleDayClick(day)}
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

      <article>
        <h3 className="text-xl font-semibold mb-4">
          Horas disponibles para el {formatDayAndMonth(selectedDate).day} de {formatDayAndMonth(selectedDate).month}
        </h3>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 mb-6" role="list">
          {availableHours.map((hour) => (
            <li key={hour}>
              <button
                onClick={() => handleHourClick(hour)}
                className={`px-4 py-2 rounded-md text-sm sm:text-base ${selectedHour === hour
                  ? "bg-green-600 text-white"
                  : "bg-zinc-700 text-white hover:bg-zinc-600"
                  }`}
              >
                {hour}
              </button>
            </li>
          ))}
        </ul>
      </article>

      <form
        className="flex flex-col gap-4 max-w-md mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
          value={userForm.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
          value={userForm.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
          value={userForm.address}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
          value={userForm.phone}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={!isFormValid() || isLoading}
        >
          {isLoading ? (
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 sm:w-5 sm:h-5 inline-block"></span>
          ) : (
            "Confirmar Cita"
          )}
        </button>
      </form>
    </section>
  );
};
