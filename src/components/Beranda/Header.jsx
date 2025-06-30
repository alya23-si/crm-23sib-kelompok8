// ... import tetap
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logorwh from "../../assets/logorwh.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("pelanggan");
    if (user) {
      const parsed = JSON.parse(user);
      setIsLoggedIn(true);
      setUserName(parsed?.nama || "Pengguna");
      setUserRole(parsed?.role || "pelanggan");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("pelanggan");
    setIsLoggedIn(false);
    setUserRole("");
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logorwh} alt="Logo RWH" className="h-10" />
          <h1 className="text-xl font-bold text-green-700 hidden sm:block">Riau Wisata Hati</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
          {userRole === "admin" && (
            <Link to="/dashboard" className="hover:text-orange-600 font-medium">Dashboard</Link>
          )}
          <Link to="/DaftarUmroh" className="hover:text-orange-600">Daftar Umroh</Link>
          <Link to="/Destination" className="hover:text-orange-600">Destinasi</Link>
          <Link to="/HelpCenter" className="hover:text-orange-600">Help Center</Link>
          <Link to="/informasi" className="hover:text-orange-600">Informasi</Link>
          <Link to="/katalog" className="hover:text-orange-600">Katalog Paket</Link>

          {!isLoggedIn ? (
            <Link to="/login" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-full">
              Masuk
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Halo, <strong>{userName}</strong></span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-xs"
              >
                Logout
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-orange-500"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
          {userRole === "admin" && (
            <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-orange-500">
              Dashboard
            </Link>
          )}
          <Link to="/DaftarUmroh" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-orange-500">
            Daftar Umroh
          </Link>
          <Link to="/Destination" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-orange-500">
            Destinasi
          </Link>
          <Link to="/HelpCenter" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-orange-500">
            Help Center
          </Link>
          <Link to="/informasi" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-orange-500">
            Informasi
          </Link>
          <Link to="/katalog" onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-orange-500">
            Katalog Paket
          </Link>

          {!isLoggedIn ? (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="inline-block mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-center w-full"
            >
              Masuk
            </Link>
          ) : (
            <div className="pt-2 border-t">
              <span className="block mb-2 text-gray-600">Halo, <strong>{userName}</strong></span>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
