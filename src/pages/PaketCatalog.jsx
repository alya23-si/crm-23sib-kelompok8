import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

const supabase = createClient(
  "https://uaqrzhdaqniaakxsrnny.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcXJ6aGRhcW5pYWFreHNybm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzUyMTYsImV4cCI6MjA2NjQxMTIxNn0.Uxz61nWFyXg2sny7lsVawsnLbZ-FjWM4xqVC1kl8KoQ"
);

const PaketCatalog = () => {
  const [paket, setPaket] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("paket").select("*");
      if (error) {
        console.error("Error fetching paket:", error);
        setErrorMsg("Gagal memuat data paket.");
      } else {
        setPaket(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const getColor = (type) => {
    switch (type) {
      case "umroh":
        return "bg-orange-100 text-orange-600";
      case "haji":
        return "bg-green-100 text-green-600";
      case "wisata":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x250?text=No+Image";
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-800">Katalog Paket Riau Wisata Hati</h1>

      {loading && <p className="text-center text-gray-500">Memuat paket...</p>}

      {errorMsg && (
        <p className="text-center text-red-500 font-medium mb-4">{errorMsg}</p>
      )}

      {!loading && !errorMsg && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paket.map((item) => (
            <div key={item.id} className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">
              <img
                src={item.img_url}
                alt={item.title}
                className="h-48 w-full object-cover"
                onError={handleImageError}
              />
              <div className="p-4">
                <div className={`inline-block px-3 py-1 mb-2 rounded-full text-xs font-medium ${getColor(item.type)}`}>
                  {item.type.toUpperCase()}
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-1">Durasi: {item.duration}</p>
                <p className="text-sm text-green-700 font-semibold mb-2">{item.price}</p>
                <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Optional: Back to home */}
      <div className="text-center mt-10">
        <Link to="/" className="text-orange-600 hover:underline text-sm">
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default PaketCatalog;
