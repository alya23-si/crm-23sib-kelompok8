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
  const pendapatanData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Pendapatan (juta IDR)",
        data: [20, 28, 35, 40, 48, 55, 60, 68, 75, 80, 90, 100],
        borderColor: "#43A047", // green
        backgroundColor: "rgba(67, 160, 71, 0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#43A047"
      },
    ],
  };

  const pendapatanOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Grafik Pendapatan Tahunan",
        color: "#43A047",
        font: { size: 18 }
      },
      legend: {
        position: "top",
        labels: {
          color: "#444"
        }
      },
    },
    scales: {
      y: {
        ticks: { color: "#666" },
        grid: { color: "#eee" }
      },
      x: {
        ticks: { color: "#666" },
        grid: { display: false }
      }
    }
  };

  const penjualanData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Penjualan",
        data: [100, 130, 150, 180, 200, 220, 250, 270, 290, 310, 340, 370],
        backgroundColor: "rgba(251, 140, 0, 0.7)", // orange-500
        borderRadius: 6,
      },
    ],
  };

  const penjualanOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Grafik Jumlah Penjualan Bulanan",
        color: "#FB8C00",
        font: { size: 18 }
      },
      legend: {
        position: "top",
        labels: {
          color: "#444"
        }
      },
    },
    scales: {
      y: {
        ticks: { color: "#666" },
        grid: { color: "#eee" }
      },
      x: {
        ticks: { color: "#666" },
        grid: { display: false }
      }
    }
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-green-700">📊 Laporan Bisnis RWH</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grafik Pendapatan */}
        <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
          <Line data={pendapatanData} options={pendapatanOptions} />
        </div>

        {/* Grafik Penjualan */}
        <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
          <Bar data={penjualanData} options={penjualanOptions} />
        </div>
      </div>

      {/* Ringkasan laporan */}
      <div className="bg-white rounded-xl shadow border border-gray-100 p-6">
        <h2 className="text-lg font-semibold mb-4 text-green-700">🧾 Ringkasan Kinerja</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><span className="text-green-600 font-medium">✔</span> Total Pendapatan Tahun Ini: <strong>Rp 1.000.000.000</strong></li>
          <li><span className="text-orange-500 font-medium">🛍</span> Total Transaksi: <strong>4.200</strong></li>
          <li><span className="text-blue-500 font-medium">👤</span> Pelanggan Baru: <strong>1.250</strong></li>
          <li><span className="text-yellow-500 font-medium">⭐</span> Rata-rata Ulasan Produk: <strong>4.5 / 5</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default Laporan;
