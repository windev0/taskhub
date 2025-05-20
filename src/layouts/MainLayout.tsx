import type { ReactNode } from "react";
import NavComponent from "../components/nav";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <NavComponent />
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
};

export default MainLayout;
