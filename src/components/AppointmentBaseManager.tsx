// Función para obtener el primer día disponible (excluyendo domingos)
const getFirstAvailableDay = (): Date => {
  const today = new Date();
  let currentDate = new Date(today);

  // Avanza hasta encontrar un día que no sea domingo
  while (currentDate.getDay() === 0) {
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return currentDate;
};

// Función para obtener los días de la semana excluyendo domingos
const getWeekDays = (date: Date): Date[] => {
  const days: Date[] = [];
  let currentDate = new Date(date);

  while (days.length < 7) {
    // Excluye los domingos
    if (currentDate.getDay() !== 0) {
      days.push(new Date(currentDate));
    }
    // Avanza al día siguiente
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
};

// Formatea la fecha para enviarla a la API
const formatDateForApi = (date: Date): string => {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().split("T")[0];
};

// Formatea la fecha para mostrarla en la UI
const formatDate = (date: Date, formatType: "day" | "dayMonth"): string => {
  const options: Intl.DateTimeFormatOptions =
    formatType === "day"
      ? { weekday: "long" }
      : { day: "2-digit", month: "long" };

  return date.toLocaleDateString("es-CL", options).replace("-", " de ");
};

import { useState, useEffect } from "react";
import axios from "axios";
import { DaySelector } from "../components/DaySelector";
import { AvailableHours } from "../components/AvailableHours";

interface AppointmentBaseManagerProps {
  onDateChange: (date: string) => void;
  onHourChange: (hour: string) => void;
  initialDate?: Date;
  initialHour?: string;
}

export const AppointmentBaseManager: React.FC<AppointmentBaseManagerProps> = ({
  onDateChange,
  onHourChange,
  initialDate,
  initialHour,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate || getFirstAvailableDay());
  const [availableHours, setAvailableHours] = useState<string[]>([]);
  const [selectedHour, setSelectedHour] = useState<string>(initialHour || "");
  const [isHoursLoading, setIsHoursLoading] = useState(false);

  const weekDays = getWeekDays(new Date());

  const fetchAvailableHours = async (date: Date): Promise<void> => {
    const formattedDate = formatDateForApi(date);
    setIsHoursLoading(true);
    try {
      const response = await axios.get(
        `https://gye-car-app-710312144426.southamerica-west1.run.app/appointments/available-hours?date=${formattedDate}`
      );
      setAvailableHours(response.data.data);
    } catch (error) {
      console.error("Error fetching available hours:", error);
    } finally {
      setIsHoursLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailableHours(selectedDate);
    onDateChange(formatDateForApi(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    if (selectedHour) {
      onHourChange(selectedHour);
    }
  }, [selectedHour]);

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
    setSelectedHour("");
  };

  return (
    <div className="text-center">
      <DaySelector
        weekDays={weekDays}
        selectedDate={selectedDate}
        onDayClick={handleDayClick}
        formatDate={formatDate}
      />

      <AvailableHours
        availableHours={availableHours}
        selectedHour={selectedHour}
        onHourClick={setSelectedHour}
        isLoading={isHoursLoading}
      />
    </div>
  );
};
