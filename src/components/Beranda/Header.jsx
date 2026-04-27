import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logosegar.png";

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
      setUserName(parsed?.nama || "User");
      setUserRole(parsed?.role || "pelanggan"); // 🔥 ambil role
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("pelanggan");
    setIsLoggedIn(false);
    setUserRole("");
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b">
      
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Segar Alami" className="h-10" />
          <h1 className="text-lg font-bold text-green-700 hidden sm:block">
            Segar Alami
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 font-medium">
          <Link to="/" className="hover:text-green-600">Beranda</Link>
          <Link to="/produk" className="hover:text-green-600">Produk</Link>
          <Link to="/tentang" className="hover:text-green-600">Tentang</Link>
          <Link to="/kontak" className="hover:text-green-600">Kontak</Link>

          {/* 🔥 KHUSUS ADMIN */}
          {userRole === "admin" && (
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs font-semibold hover:bg-green-200 transition"
            >
              Dashboard
            </Link>
          )}

          {/* Login / User */}
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="px-4 py-2 border border-green-600 text-green-700 rounded-full hover:bg-green-50 transition"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-gray-600 text-sm">
                Halo, <strong>{userName}</strong>
              </span>
              <button
                onClick={handleLogout}
                className="text-xs px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full"
              >
                Logout
              </button>
            </div>
          )}

          {/* CTA */}
          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm shadow-md transition"
          >
            Pesan Sekarang
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 flex flex-col gap-3 text-gray-700 text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)}>Beranda</Link>
          <Link to="/produk" onClick={() => setMenuOpen(false)}>Produk</Link>
          <Link to="/tentang" onClick={() => setMenuOpen(false)}>Tentang</Link>
          <Link to="/kontak" onClick={() => setMenuOpen(false)}>Kontak</Link>

          {/* 🔥 ADMIN MOBILE */}
          {userRole === "admin" && (
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-green-700 font-semibold"
            >
              Dashboard
            </Link>
          )}

          {!isLoggedIn ? (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-center border border-green-600 text-green-700 py-2 rounded-full"
            >
              Login
            </Link>
          ) : (
            <>
              <span>Halo, {userName}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 rounded-full"
              >
                Logout
              </button>
            </>
          )}

          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            className="text-center bg-green-600 text-white py-2 rounded-full"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;