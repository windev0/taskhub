import type { ReactNode } from "react";
// import NavComponent from "../components/nav";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
};


const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-gray-900 shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">TaskHub</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:underline">Accueil</Link>
          <Link to="/tasks" className="text-white hover:underline">Tâches</Link>
          <Link to="/contact" className="text-white hover:underline">Contacts</Link>
          <Link to="/about" className="text-white hover:underline">A propos</Link>
        </nav>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
};

export default MainLayout;
