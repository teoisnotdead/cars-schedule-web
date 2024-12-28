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
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate || new Date());
  const [availableHours, setAvailableHours] = useState<string[]>([]);
  const [selectedHour, setSelectedHour] = useState<string>(initialHour || "");
  const [isHoursLoading, setIsHoursLoading] = useState(false);

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


  const weekDays = getWeekDays(new Date());

  const formatDateForApi = (date: Date): string => {
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().split("T")[0];
  };

  const fetchAvailableHours = async (date: Date): Promise<void> => {
    const formattedDate = formatDateForApi(date);
    setIsHoursLoading(true);
    try {
      const response = await axios.get(
        `https://gye-cars-schedule.deno.dev/appointments/available-hours?date=${formattedDate}`
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

  const formatDate = (date: Date, formatType: "day" | "numeric"): string => {
    const options: Intl.DateTimeFormatOptions =
      formatType === "day" ? { weekday: "long" } : { day: "2-digit" };

    return date.toLocaleDateString("es-CL", options);
  };

  return (
    <div className="text-center">
      <DaySelector
        weekDays={weekDays}
        selectedDate={selectedDate}
        onDayClick={handleDayClick}
        isPastDay={(day) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const selectedDay = new Date(day);
          selectedDay.setHours(0, 0, 0, 0);
          return selectedDay < today;
        }}
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
