import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa";
import logorwh from "../assets/logorwh.png";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-12">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <img src={logorwh} alt="Riau Wisata Hati" className="h-12 mb-4" />
          <p className="text-sm">
            Riau Wisata Hati adalah biro perjalanan ibadah Umroh dan Haji
            terpercaya yang mengutamakan kenyamanan dan spiritualitas jamaah.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-400">Beranda</a></li>
            <li><a href="/DaftarUmroh" className="hover:text-orange-400">Pendaftaran Umroh</a></li>
            <li><a href="/informasi" className="hover:text-orange-400">Informasi</a></li>
            <li><a href="/HelpCenter" className="hover:text-orange-400">Kontak Kami</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-400" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-500" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-green-800 text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Riau Wisata Hati. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
