import { FaWhatsapp, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import rwhImage from "../assets/masjidNabawi.jpg";

const HomeHero = () => {
  return (
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
            Assalamualaikum <strong>Jamaah RWH</strong>, selamat datang di layanan umroh resmi dari{" "}
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
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
