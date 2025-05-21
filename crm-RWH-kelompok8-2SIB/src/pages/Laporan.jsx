import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Laporan = () => {
  // Data grafik pendapatan (line)
  const pendapatanData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Pendapatan (juta IDR)",
        data: [20, 28, 35, 40, 48, 55, 60, 68, 75, 80, 90, 100],
        borderColor: "#4f46e5", // indigo-600
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const pendapatanOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Grafik Pendapatan Tahunan",
      },
      legend: {
        position: "top",
      },
    },
  };

  // Data grafik penjualan (bar)
  const penjualanData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Penjualan",
        data: [100, 130, 150, 180, 200, 220, 250, 270, 290, 310, 340, 370],
        backgroundColor: "rgba(34, 197, 94, 0.7)", // green-500
      },
    ],
  };

  const penjualanOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Grafik Jumlah Penjualan Bulanan",
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Laporan Bisnis</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grafik Pendapatan */}
        <div className="bg-white rounded-xl shadow p-6">
          <Line data={pendapatanData} options={pendapatanOptions} />
        </div>

        {/* Grafik Penjualan */}
        <div className="bg-white rounded-xl shadow p-6">
          <Bar data={penjualanData} options={penjualanOptions} />
        </div>
      </div>

      {/* Ringkasan laporan */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Ringkasan</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>📈 Total Pendapatan Tahun Ini: <strong>Rp 1 Miliar</strong></li>
          <li>🛒 Total Transaksi: <strong>4.200</strong></li>
          <li>👥 Pelanggan Baru: <strong>1.250</strong></li>
          <li>⭐ Rata-rata Ulasan Produk: <strong>4.5/5</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default Laporan;
