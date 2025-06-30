import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar dengan tinggi penuh */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
