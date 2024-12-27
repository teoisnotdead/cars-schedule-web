import { ReactNode } from "react";
import { NavMenu } from "./ui/NavMenu";

type LayoutProps = {
  children: ReactNode;
};

export const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-zinc-50">
      {/* Menú de navegación */}
      <header className="shadow-md">
        <NavMenu />
      </header>

      {/* Contenido principal */}
      <main className="flex-grow p-4 flex justify-center items-center">
        <div className="max-w-screen-lg w-full">{children}</div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-800 text-zinc-400 text-center py-4">
        © 2024 Gye Cars, Desarrollado por <a href="https://github.com/teoisnotdead" target="_blank" className="text-blue-500">TEODEV</a>
      </footer>
    </div>
  );
};