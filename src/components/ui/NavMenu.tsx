import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Inicio", path: "/" },
  { name: "Agendar", path: "/agendar" },
  { name: "Gestión de Citas", path: "/gestion-citas" },
];

export const NavMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-900/70 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <p className="hidden md:block"> Cambia tu aceite
                <span className="text-zinc-50 ml-2 mr-2">|</span>
              </p>
              <img
                src="/logo-dark.png"
                alt="Logo Cambia tu Aceite"
                className="hidden md:block h-10"
              />
              <img
                src="/logo-ico-dark.png"
                alt="Logo Cambia tu Aceite"
                className="md:hidden h-10"
              />
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase ${isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900/70 shadow-lg backdrop-blur-md">
            <div className="space-y-4 py-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block text-sm font-medium uppercase px-4 ${isActive
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-300"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
