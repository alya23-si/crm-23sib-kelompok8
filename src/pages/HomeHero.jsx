import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import produkImage from "../assets/logosegar.png";

const HomeHero = () => {
  const text1 = "Segar Alami";
  const text2 =
    "Nikmati susu kedelai dan kembang tahu dengan bahan alami tanpa pengawet — sehat, segar, dan cocok untuk aktivitas harian Anda.";

  const [displayText1, setDisplayText1] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [showImage, setShowImage] = useState(false);

  // Typing H1
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText1(text1.slice(0, i + 1));
      i++;
      if (i === text1.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Typing Deskripsi (delay setelah H1)
  useEffect(() => {
    if (displayText1.length === text1.length) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText2(text2.slice(0, i + 1));
        i++;
        if (i === text2.length) clearInterval(interval);
      }, 25);

      return () => clearInterval(interval);
    }
  }, [displayText1]);

  // Image pop-up
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* KIRI */}
        <div>

          {/* H1 Typing */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-green-800 to-green-400 bg-clip-text text-transparent">
              {displayText1}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Deskripsi Typing */}
          <p className="text-gray-600 text-lg mb-6 max-w-md leading-relaxed min-h-[80px]">
            {displayText2}
          </p>

          {/* Harga */}
          <p className="text-green-700 font-semibold mb-6">
            💰 Mulai dari Rp5.000 – Rp10.000
          </p>

          {/* CTA */}
          <a
            href="https://wa.me/628xxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium shadow-md transition"
          >
            <FaWhatsapp /> Pesan Sekarang
          </a>
        </div>

        {/* KANAN (IMAGE POP UP) */}
        <div className="flex justify-center md:justify-end">
          <img
            src={produkImage}
            alt="Produk Segar Alami"
            className={`w-[350px] md:w-[450px] object-contain transition-all duration-700 ease-out
              ${showImage ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            `}
          />
        </div>

      </div>
    </section>
  );
};

export default HomeHero;