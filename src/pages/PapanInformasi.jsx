"use client";
import { useState } from "react";

const artikelList = [
  {
    id: 1,
    judul: "Cara Mendaftar Umroh di Riau Wisata Hati",
    isi: "Untuk mendaftar umroh, silakan isi formulir pendaftaran, lengkapi dokumen, dan lakukan pembayaran DP.",
    kategori: "Pendaftaran",
  },
  {
    id: 2,
    judul: "Apa Saja yang Perlu Dibawa Saat Umroh?",
    isi: "Beberapa hal penting: paspor, visa, pakaian ihram, perlengkapan pribadi, dan dokumen identitas.",
    kategori: "Persiapan",
  },
  {
    id: 3,
    judul: "Prosedur Keberangkatan Jamaah",
    isi: "Peserta berkumpul di Bandara SSK II Pekanbaru 3 jam sebelum keberangkatan. Tim kami akan memandu selama proses check-in.",
    kategori: "Keberangkatan",
  },
  {
    id: 4,
    judul: "Ketentuan Pembatalan dan Pengembalian Dana",
    isi: "Pembatalan bisa dilakukan H-30. Pengembalian dana sesuai syarat dan ketentuan yang berlaku.",
    kategori: "Kebijakan",
  },
];

export default function PapanInformasi() {
  const [search, setSearch] = useState("");
  const [filterKategori, setFilterKategori] = useState("Semua");

  const filteredArtikel = artikelList.filter((a) => {
    const cocokJudul = a.judul.toLowerCase().includes(search.toLowerCase());
    const cocokKategori = filterKategori === "Semua" || a.kategori === filterKategori;
    return cocokJudul && cocokKategori;
  });

  const kategoriUnik = ["Semua", ...new Set(artikelList.map((a) => a.kategori))];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Papan Informasi</h1>
      <p className="text-gray-600 mb-4">Temukan panduan dan informasi seputar layanan kami.</p>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari berdasarkan judul..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border border-gray-300 rounded-lg"
        />
        <select
          value={filterKategori}
          onChange={(e) => setFilterKategori(e.target.value)}
          className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg"
        >
          {kategoriUnik.map((kategori) => (
            <option key={kategori} value={kategori}>{kategori}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-4">
        {filteredArtikel.length > 0 ? (
          filteredArtikel.map((artikel) => (
            <div key={artikel.id} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-blue-600">{artikel.judul}</h2>
              <p className="text-sm text-gray-700 mt-2">{artikel.isi}</p>
              <span className="inline-block mt-3 text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                {artikel.kategori}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Tidak ditemukan artikel dengan kata kunci tersebut.</p>
        )}
      </div>
    </div>
  );
}
