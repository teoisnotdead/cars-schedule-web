import { ReactNode } from "react";
import { NavMenu } from "./ui/NavMenu";

type LayoutProps = {
  children: ReactNode;
};

export const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-zinc-50">
      {/* Menú de navegación */}
      <header>
        <NavMenu />
      </header>

      {/* Contenido principal */}
      <main className="flex-grow mt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-800 text-zinc-400 text-center py-4">
        © 2024 www.cambiatuaceite.cl by Gye Car, Desarrollado por{" "}
        <a
          href="https://teodev.cl"
          target="_blank"
          className="text-blue-500"
          rel="noopener noreferrer"
        >
          TEODEV
        </a>
      </footer>
    </div>
  );
};
