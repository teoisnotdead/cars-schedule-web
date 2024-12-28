interface UserFormProps {
  userForm: { name: string; email: string; address: string; phone: string; patente: string; brand: string; model: string; year: string; };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isFormValid: boolean;
  isLoading: boolean;
}

export const UserForm: React.FC<UserFormProps> = ({
  userForm,
  onInputChange,
  onSubmit,
  isFormValid,
  isLoading,
}) => (
  <form
    className="flex flex-col gap-4 max-w-md mx-auto mb-4"
    onSubmit={onSubmit}
  >
    <input
      type="text"
      name="name"
      placeholder="Nombre completo"
      className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
      value={userForm.name}
      onChange={onInputChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Correo electrónico"
      className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
      value={userForm.email}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="address"
      placeholder="Dirección"
      className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
      value={userForm.address}
      onChange={onInputChange}
      required
    />
    <input
      type="tel"
      name="phone"
      placeholder="Teléfono"
      className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
      value={userForm.phone}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="patente"
      placeholder="Patente"
      className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
      value={userForm.patente}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="brand"
      placeholder="Marca"
      className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
      value={userForm.brand}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="model"
      placeholder="Modelo"
      className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
      value={userForm.model}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="year"
      placeholder="Año"
      className="p-3 sm:p-4 rounded-md bg-zinc-800 text-white focus:ring-2 focus:ring-blue-500"
      value={userForm.year}
      onChange={onInputChange}
      required
    />
    <button
      type="submit"
      className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed"
      disabled={!isFormValid || isLoading}
    >
      {isLoading ? (
        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4 sm:w-5 sm:h-5 inline-block"></span>
      ) : (
        "Confirmar Cita"
      )}
    </button>
  </form>
);
