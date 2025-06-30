import { Search, User, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("pelanggan");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user?.nama || "Pengguna");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("pelanggan");
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm border-b sticky top-0 z-10">
      {/* Breadcrumb / Page Info */}
      <div className="text-sm text-gray-500">
        Pages / <span className="text-green-700 font-semibold">Dashboard</span>
      </div>

      {/* Search & Account */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Cari destinasi, umroh..."
            className="px-4 py-2 pl-10 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">{userName}</span>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 transition"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Keluar</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
