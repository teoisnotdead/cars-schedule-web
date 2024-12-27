import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const NavMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white font-bold text-lg">
              Gye Cars
            </NavLink>
          </div>
          {/* Links */}
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium uppercase ${
                  isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/agendar"
              className={({ isActive }) =>
                `text-sm font-medium uppercase ${
                  isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Agendar
            </NavLink>
            <NavLink
              to="/gestion-citas"
              className={({ isActive }) =>
                `text-sm font-medium uppercase ${
                  isActive ? "text-yellow-400" : "text-white hover:text-yellow-300"
                }`
              }
            >
              Gestión de Citas
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
