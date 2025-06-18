"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

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
  const [selectedArtikel, setSelectedArtikel] = useState(null);

  const filteredArtikel = artikelList.filter((a) => {
    const cocokJudul = a.judul.toLowerCase().includes(search.toLowerCase());
    const cocokKategori = filterKategori === "Semua" || a.kategori === filterKategori;
    return cocokJudul && cocokKategori;
  });

  const kategoriUnik = ["Semua", ...new Set(artikelList.map((a) => a.kategori))];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-2">Papan Informasi RWH</h1>
      <p className="text-gray-600 mb-6">
        Temukan panduan, kebijakan, dan prosedur layanan Riau Wisata Hati.
      </p>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari berdasarkan judul..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
        />
        <select
          value={filterKategori}
          onChange={(e) => setFilterKategori(e.target.value)}
          className="w-full md:w-1/3 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
        >
          {kategoriUnik.map((kategori) => (
            <option key={kategori} value={kategori}>
              {kategori}
            </option>
          ))}
        </select>
      </div>

      {/* Article Cards */}
      <div className="grid gap-4">
        {filteredArtikel.length > 0 ? (
          filteredArtikel.map((artikel) => (
            <div
              key={artikel.id}
              className="bg-white border border-green-100 p-5 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-green-800">{artikel.judul}</h2>
              <p className="text-gray-700 mt-2 text-sm line-clamp-2">
                {artikel.isi.length > 100 ? artikel.isi.slice(0, 100) + "..." : artikel.isi}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs px-3 py-1 bg-green-50 text-green-600 border border-green-200 rounded-full">
                  {artikel.kategori}
                </span>
                <button
                  onClick={() => setSelectedArtikel(artikel)}
                  className="text-sm text-green-600 hover:underline"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">
            Tidak ditemukan artikel dengan kata kunci tersebut.
          </p>
        )}
      </div>

      {/* Modal */}
      <Dialog
        open={selectedArtikel !== null}
        onClose={() => setSelectedArtikel(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-md w-full p-6 rounded-lg shadow-xl">
            <Dialog.Title className="text-xl font-semibold text-green-800 mb-3">
              {selectedArtikel?.judul}
            </Dialog.Title>
            <p className="text-gray-700 text-sm">{selectedArtikel?.isi}</p>
            <button
              onClick={() => setSelectedArtikel(null)}
              className="mt-5 text-sm text-green-600 hover:underline"
            >
              Tutup
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
