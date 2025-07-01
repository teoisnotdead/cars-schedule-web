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
      className="p-3 sm:p-4 rounded-lg bg-zinc-900 text-cyan-200 focus:ring-2 focus:ring-cyan-400 shadow-md placeholder-zinc-500"
      value={userForm.name}
      onChange={onInputChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Correo electrónico"
      className="p-3 sm:p-4 rounded-lg bg-zinc-900 text-cyan-200 focus:ring-2 focus:ring-cyan-400 shadow-md placeholder-zinc-500"
      value={userForm.email}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="address"
      placeholder="Dirección"
      className="p-3 sm:p-4 rounded-lg bg-zinc-900 text-cyan-200 focus:ring-2 focus:ring-cyan-400 shadow-md placeholder-zinc-500"
      value={userForm.address}
      onChange={onInputChange}
      required
    />
    <input
      type="tel"
      name="phone"
      placeholder="Teléfono"
      className="p-3 sm:p-4 rounded-lg bg-zinc-900 text-cyan-200 focus:ring-2 focus:ring-cyan-400 shadow-md placeholder-zinc-500"
      value={userForm.phone}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="patente"
      placeholder="Patente"
      className="p-3 sm:p-4 rounded-lg bg-zinc-900 text-cyan-200 focus:ring-2 focus:ring-cyan-400 shadow-md placeholder-zinc-500"
      value={userForm.patente}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="brand"
      placeholder="Marca"
      className="p-3 sm:p-4 rounded-lg bg-zinc-900 text-cyan-200 focus:ring-2 focus:ring-cyan-400 shadow-md placeholder-zinc-500"
      value={userForm.brand}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="model"
      placeholder="Modelo"
      className="p-3 sm:p-4 rounded-lg bg-zinc-900 text-cyan-200 focus:ring-2 focus:ring-cyan-400 shadow-md placeholder-zinc-500"
      value={userForm.model}
      onChange={onInputChange}
      required
    />
    <input
      type="text"
      name="year"
      placeholder="Año"
      className="p-3 sm:p-4 rounded-lg bg-zinc-900 text-cyan-200 focus:ring-2 focus:ring-cyan-400 shadow-md placeholder-zinc-500"
      value={userForm.year}
      onChange={onInputChange}
      required
    />
    <button
      type="submit"
      className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:from-cyan-400 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:bg-cyan-900/40 disabled:cursor-not-allowed"
      disabled={!isFormValid || isLoading}
    >
      {isLoading ? (
        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 inline-block"></span>
      ) : (
        "Confirmar Cita"
      )}
    </button>
  </form>
);
