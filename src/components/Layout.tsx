import { ReactNode } from "react";
import { NavMenu } from "./ui/NavMenu";

type LayoutProps = {
  children: ReactNode;
};

export const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-950 via-zinc-900 to-blue-950 text-zinc-50">
      {/* Menú de navegación */}
      <header>
        <NavMenu />
      </header>

      {/* Contenido principal */}
      <main className="flex-grow mt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900/80 backdrop-blur-md text-zinc-400 text-center py-6 border-t border-zinc-800 shadow-inner">
        © 2024 www.cambiatuaceite.cl by Gye Car, Desarrollado por{" "}
        <a
          href="https://teodev.cl"
          target="_blank"
          className="text-cyan-400 hover:underline hover:text-cyan-300 transition"
          rel="noopener noreferrer"
        >
          TEODEV
        </a>
      </footer>
    </div>
  );
};
