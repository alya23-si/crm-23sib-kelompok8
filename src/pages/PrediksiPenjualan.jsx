"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { bulan: 'Januari', total: 120 },
  { bulan: 'Februari', total: 150 },
  { bulan: 'Maret', total: 180 },
  { bulan: 'April', total: 90 },
  { bulan: 'Mei', total: 220 },
  { bulan: 'Juni', total: 300 }, // misalnya efek promosi umroh
];

export default function PrediksiPenjualan() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Informasi Penjualan</h1>
      <p className="mb-6 text-gray-600">Visualisasi tren penjualan berdasarkan data historis dan musim promo.</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bulan" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
