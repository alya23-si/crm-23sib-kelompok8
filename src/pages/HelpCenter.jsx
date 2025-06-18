import React, { useState } from 'react';
import {
  Search,
  ClipboardList,
  Users,
  Globe2,
  DollarSign,
  Settings,
} from 'lucide-react';

const allCategories = [
  {
    name: 'Pendaftaran & Data Jamaah',
    icon: <ClipboardList className="w-6 h-6 text-green-600" />,
    articles: [
      'Cara input data pendaftaran jamaah baru',
      'Mengedit atau menghapus data jamaah',
      'Mengecek status kelengkapan data',
    ],
  },
  {
    name: 'Manajemen Paket Umroh',
    icon: <Globe2 className="w-6 h-6 text-green-600" />,
    articles: [
      'Menambah paket umroh baru',
      'Mengatur kuota dan jadwal keberangkatan',
      'Melihat detail fasilitas paket',
    ],
  },
  {
    name: 'Prospek & Follow-up Jamaah',
    icon: <Users className="w-6 h-6 text-green-600" />,
    articles: [
      'Membuat data prospek calon jamaah',
      'Menentukan status prospek (hot, warm, cold)',
      'Menjadwalkan reminder follow-up',
    ],
  },
  {
    name: 'Pembayaran & Laporan',
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    articles: [
      'Input pembayaran dan cek pelunasan',
      'Membuat laporan pembayaran per paket',
      'Export data transaksi ke Excel',
    ],
  },
  {
    name: 'Pengaturan & Aplikasi',
    icon: <Settings className="w-6 h-6 text-green-600" />,
    articles: [
      'Mengelola akun staf atau admin',
      'Mengatur notifikasi dan reminder',
      'Reset password pengguna',
    ],
  },
];

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = allCategories
    .map((cat) => {
      const filteredArticles = cat.articles.filter((article) =>
        article.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...cat, articles: filteredArticles };
    })
    .filter((cat) => cat.articles.length > 0);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-2">
        Pusat Bantuan Aplikasi RWH
      </h1>
      <p className="text-gray-600 mb-6">
        Temukan panduan penggunaan sistem Riau Wisata Hati untuk agen travel
        dan pengelolaan jamaah.
      </p>

      {/* Search bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Cari panduan, fitur, atau masalah umum..."
          className="w-full border border-green-300 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute top-3.5 left-3 w-5 h-5 text-green-500" />
      </div>

      {/* Filtered Results */}
      {filteredCategories.length === 0 ? (
        <p className="text-gray-500">Tidak ada artikel ditemukan.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm border border-green-100 rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                {cat.icon}
                <h2 className="text-lg font-semibold text-green-800">
                  {cat.name}
                </h2>
              </div>
              <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                {cat.articles.map((article, i) => (
                  <li key={i}>{article}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;
