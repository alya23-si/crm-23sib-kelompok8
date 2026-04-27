import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "../../assets/logosegar.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white pt-12">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-green-700">

        {/* Logo & Deskripsi */}
        <div>
          <img src={logo} alt="Segar Alami" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed text-green-100">
            UMKM Segar Alami menyediakan minuman sehat berbahan dasar kedelai
            seperti susu kedelai dan kembang tahu yang fresh, higienis, dan tanpa pengawet.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Menu</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li><a href="/" className="hover:text-white transition">Beranda</a></li>
            <li><a href="#produk" className="hover:text-white transition">Produk</a></li>
            <li><a href="#tentang" className="hover:text-white transition">Tentang Kami</a></li>
            <li><a href="#kontak" className="hover:text-white transition">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Kontak</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Pekanbaru, Riau
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> 08xxxxxxxxxx
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Ikuti Kami</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://wa.me/628xxxxxxxxxx" target="_blank">
              <FaWhatsapp className="hover:text-green-400 transition" />
            </a>
            <a href="#" target="_blank">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
            <a href="#" target="_blank">
              <FaYoutube className="hover:text-red-500 transition" />
            </a>
            <a href="#" target="_blank">
              <FaTiktok className="hover:text-gray-200 transition" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center py-4 text-sm text-green-200">
        &copy; {new Date().getFullYear()}{" "}
        <strong>Segar Alami</strong>. Semua hak dilindungi.
      </div>
    </footer>
  );
};

export default Footer;