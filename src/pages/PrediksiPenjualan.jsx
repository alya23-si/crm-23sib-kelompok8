"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { bulan: "Januari", umroh: 120, wisata: 80 },
  { bulan: "Februari", umroh: 150, wisata: 90 },
  { bulan: "Maret", umroh: 180, wisata: 100 },
  { bulan: "April", umroh: 90, wisata: 60 },
  { bulan: "Mei", umroh: 220, wisata: 140 },
  { bulan: "Juni", umroh: 300, wisata: 200 }, // Efek promo
];

export default function PrediksiPenjualan() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-2">Prediksi Penjualan</h1>
      <p className="text-gray-600 mb-6">
        Visualisasi tren penjualan Umroh & Wisata Halal berdasarkan data historis dan musim promo oleh Riau Wisata Hati.
      </p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bulan" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="umroh"
            fill="#16a34a" // Tailwind green-700
            radius={[4, 4, 0, 0]}
            name="Umroh"
          />
          <Bar
            dataKey="wisata"
            fill="#f97316" // Tailwind orange-500 (warna khas RWH)
            radius={[4, 4, 0, 0]}
            name="Wisata Halal"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
