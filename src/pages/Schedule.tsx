import { AppointmentBaseManager } from "../components/AppointmentBaseManager";
import { useNavigate } from "react-router-dom";
import { UserForm } from "../components/UserForm";
import { useState } from "react";
import axios from "axios";

export const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedHour, setSelectedHour] = useState<string>("");
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    patente: "",
    brand: "",
    model: "",
    year: "",
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
    setIsLoading(true);
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
      navigate("/confirmacion", { state: response.data });
    } catch (error) {
      console.error("Error al crear la cita:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="text-center max-w-5xl mx-auto px-6">
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
