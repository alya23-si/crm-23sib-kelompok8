import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube, FaTiktok, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logorwh from "../../assets/logorwh.png";


const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-green-800">
        {/* Logo & Deskripsi */}
        <div>
          <img src={logorwh} alt="RWH Logo" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed">
            PT Riau Wisata Hati adalah biro perjalanan Umroh dan Haji resmi yang telah melayani ribuan jamaah dengan amanah dan profesional.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-400">Beranda</a></li>
            <li><a href="/DaftarUmroh" className="hover:text-orange-400">Pendaftaran Umroh</a></li>
            <li><a href="/Destination" className="hover:text-orange-400">Destinasi</a></li>
            <li><a href="/informasi" className="hover:text-orange-400">Informasi</a></li>
            <li><a href="/HelpCenter" className="hover:text-orange-400">Kontak Kami</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Kontak</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Jl. Soekarno Hatta No.123, Pekanbaru</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> 0811-7697-985</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@rwhumroh.com</li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Ikuti Kami</h4>
          <div className="flex gap-4 text-2xl">
            <a href="https://wa.me/628117697985" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-400 transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-500 transition" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-green-800 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} <strong>PT Riau Wisata Hati</strong>. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
