import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaWhatsapp, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import rwhImage from "../assets/masjidNabawi.jpg";
import logorwh from "../assets/logorwh.png";

const HomeHero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState(""); // Tambahan
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
    navigate("/");
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-20 px-6 py-3 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <img src={logorwh} alt="RWH Logo" className="h-10" />
          <h1 className="text-lg font-semibold text-green-700 hidden md:inline">
            Riau Wisata Hati
          </h1>
        </div>
        <div className="text-sm text-gray-700">
          {isLoggedIn ? (
            <div className="flex gap-3 items-center">
              <span>
                Halo, <strong>{userName}</strong>
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs font-medium"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-orange-600 font-medium hover:underline"
            >
              Masuk
            </Link>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={rwhImage}
              alt="Jamaah Umroh RWH"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Konten */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              <span className="text-orange-500">RWH</span>{" "}
              <span className="text-gray-800">Travel Umroh</span>
            </h1>

            <p className="text-gray-700 mb-4 text-lg">
              Assalamualaikum <strong>{isLoggedIn ? userName : "Jamaah RWH"}</strong>, selamat datang di layanan umroh resmi dari{" "}
              <strong>PT Riau Wisata Hati</strong>.
            </p>

            <ul className="text-sm text-gray-700 space-y-1 mb-6">
              <li>✅ <strong>Akreditasi A</strong> – Tgl: 02-12-2022</li>
              <li>✅ Lembaga: <strong>PT Tirta Murni Sertifikasi</strong></li>
              <li>✅ SK No: <span className="text-green-600 font-semibold">167 Tahun 2016</span></li>
            </ul>

            {/* Tombol Sosial */}
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://wa.me/628117697985"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition shadow-sm"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white text-sm rounded-md transition shadow-sm">
                <FaTiktok /> TikTok
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm rounded-md transition shadow-sm">
                <FaInstagram /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition shadow-sm">
                <FaYoutube /> YouTube
              </a>
            </div>

            {/* Navigasi & Auth */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="inline-block mt-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md transition"
              >
                Masuk ke Akun
              </Link>
            ) : (
              <div className="mt-6 space-y-4">
                <p className="text-sm text-gray-600 font-semibold">Menu Cepat:</p>
                <div className="flex flex-wrap gap-3">
                  {userRole === "admin" && (
                    <Link
                      to="/dashboard"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to="/DaftarUmroh"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Daftar Umroh
                  </Link>
                  <Link
                    to="/HelpCenter"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Help Center
                  </Link>
                  <Link
                    to="/Destination"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Destinasi
                  </Link>
                  <Link
                    to="/informasi"
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm"
                  >
                    Informasi
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-6 px-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PT Riau Wisata Hati. Seluruh hak cipta dilindungi. |{" "}
        <a
          href="https://wa.me/628117697985"
          className="text-green-600 hover:underline"
        >
          Hubungi Kami
        </a>
      </footer>
    </>
  );
};

export default HomeHero;
