import { AppointmentBaseManager } from "../components/AppointmentBaseManager";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../components/UserForm";
import { useState } from "react";
import axios from "axios";

export const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const [selectedDate, setSelectedDate] = useState<string>(""); // Estado para la fecha seleccionada
  const [selectedHour, setSelectedHour] = useState<string>(""); // Estado para la hora seleccionada
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

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
      selectedDate !== "" &&
      selectedHour !== ""
    );
  };

  const handleCreateAppointment = async () => {
    setIsLoading(true); // Activar el estado de carga
    try {
      const payload = {
        date: selectedDate,
        time: selectedHour,
        user: userForm,
      };
      const response = await axios.post(
        "https://gye-cars-schedule.deno.dev/appointments",
        payload
      );
      navigate("/confirmacion", { state: response.data }); // Redirigir con los datos
    } catch (error) {
      console.error("Error al crear la cita:", error);
    } finally {
      setIsLoading(false); // Desactivar el estado de carga
    }
  };

  return (
    <section className="text-center px-4 mt-14 md:mt-0">
      <h2 className="text-4xl font-extrabold mb-6">Agendar Cita</h2>

      <AppointmentBaseManager
        onDateChange={setSelectedDate}
        onHourChange={setSelectedHour}
      />

      <UserForm
        userForm={userForm}
        onInputChange={handleInputChange}
        isFormValid={isFormValid()}
        isLoading={isLoading}
        onSubmit={(e) => {
          e.preventDefault();
          if (isFormValid()) {
            handleCreateAppointment();
          }
        }}
      />
    </section>
  );
};
