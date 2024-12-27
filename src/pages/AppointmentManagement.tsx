import { useState } from "react";
import axios, { AxiosError } from "axios";
import { AppointmentBaseManager } from "../components/AppointmentBaseManager";
import { useNavigate } from "react-router-dom";

interface ApiError {
  message?: string;
}

export const AppointmentManagement: React.FC = () => {
  const [accessCode, setAccessCode] = useState("");
  const [selectedAction, setSelectedAction] = useState<"update" | "cancel" | "">("");
  const [selectedDate, setSelectedDate] = useState<string>(""); // Estado para la fecha seleccionada
  const [selectedHour, setSelectedHour] = useState<string>(""); // Estado para la hora seleccionada
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleActionChange = (action: "update" | "cancel") => {
    setSelectedAction(action);
    setErrorMessage("");
    setSuccessMessage("");
    setSelectedDate(""); // Resetear la fecha seleccionada
    setSelectedHour(""); // Resetear la hora seleccionada
  };

  const handleUpdateAppointment = async () => {
    if (!accessCode) {
      setErrorMessage("El código de reserva es obligatorio.");
      return;
    }

    if (!selectedDate || !selectedHour) {
      setErrorMessage("Por favor, selecciona una fecha y una hora.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    try {
      const payload = {
        accessCode,
        date: selectedDate,
        time: selectedHour,
      };
      const response = await axios.put(
        "https://gye-cars-schedule.deno.dev/appointments",
        payload
      );
      navigate("/confirmacion", { state: response.data });
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      setErrorMessage(
        axiosError.response?.data?.message || "Ocurrió un error al actualizar la cita."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelAppointment = async () => {
    if (!accessCode) {
      setErrorMessage("El código de reserva es obligatorio para cancelar la cita.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://gye-cars-schedule.deno.dev/appointments/cancel",
        { accessCode }
      );
      setSuccessMessage("Cita cancelada correctamente.");
      navigate("/cancelacion", { state: response.data });
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      setErrorMessage(
        axiosError.response?.data?.message || "Ocurrió un error al cancelar la cita."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (selectedAction === "update") {
      await handleUpdateAppointment();
    } else if (selectedAction === "cancel") {
      await handleCancelAppointment();
    }
  };

  return (
    <section className="text-center px-4 mt-14 md:mt-0">
      <h2 className="text-4xl font-extrabold mb-6">Gestión de Citas</h2>

      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-zinc-50">
            Código de reserva
          </label>
          <input
            type="text"
            className="w-full p-3 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Ingresa tu código de reserva"
            required
          />
          {errorMessage && !selectedAction && (
            <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
          )}
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => handleActionChange("update")}
            className={`px-6 py-3 rounded-md text-white font-semibold ${selectedAction === "update"
                ? "bg-blue-600"
                : "bg-zinc-700 hover:bg-zinc-600"
              }`}
          >
            Modificar Cita
          </button>
          <button
            type="button"
            onClick={() => handleActionChange("cancel")}
            className={`px-6 py-3 rounded-md text-white font-semibold ${selectedAction === "cancel"
                ? "bg-red-600"
                : "bg-zinc-700 hover:bg-zinc-600"
              }`}
          >
            Cancelar Cita
          </button>
        </div>

        {selectedAction === "update" && (
          <>
            <AppointmentBaseManager
              onDateChange={setSelectedDate}
              onHourChange={setSelectedHour}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-3 mt-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
              disabled={isLoading || !selectedDate || !selectedHour}
            >
              {isLoading ? "Procesando..." : "Confirmar Modificación"}
            </button>
          </>
        )}

        {selectedAction === "cancel" && (
          <button
            type="button"
            onClick={handleCancelAppointment}
            className="px-6 py-3 w-full bg-red-600 text-white font-bold rounded-md hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Procesando..." : "Confirmar Cancelación"}
          </button>
        )}

        {errorMessage && selectedAction !== "" && (
          <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
        )}

        {successMessage && (
          <p className="mt-4 text-sm text-green-500">{successMessage}</p>
        )}
      </div>
    </section>
  );
};
