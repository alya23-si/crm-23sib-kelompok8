import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Penjualan = () => {
  const summary = [
    { label: "Total Penjualan", value: "Rp275.000.000", percent: "+15%", color: "green" },
    { label: "Pesanan Hari Ini", value: "7", percent: "+5%", color: "orange" },
    { label: "Paket Terjual", value: "15", percent: "+2%", color: "blue" },
    { label: "Pembatalan", value: "1", percent: "-1%", color: "red" },
  ];

  const barData = {
    labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    datasets: [
      {
        label: "Penjualan Harian (Rp)",
        data: [50000000, 45000000, 60000000, 35000000, 30000000, 25000000, 30000000],
        backgroundColor: "rgba(67, 160, 71, 0.7)", // green-600
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Tren Penjualan Paket Umroh/Haji Mingguan",
        color: "#43A047",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        ticks: { color: "#666" },
        grid: { color: "#eee" },
      },
      x: {
        ticks: { color: "#666" },
        grid: { display: false },
      },
    },
  };

  const transaksi = [
    { id: "#TRX001", tanggal: "2025-05-20", produk: "Paket Umroh Reguler 9 Hari", jumlah: 2, total: "Rp50.000.000" },
    { id: "#TRX002", tanggal: "2025-05-20", produk: "Paket Umroh Plus Turki", jumlah: 1, total: "Rp35.000.000" },
    { id: "#TRX003", tanggal: "2025-05-19", produk: "Paket Haji Khusus (ONH Plus)", jumlah: 1, total: "Rp100.000.000" },
    { id: "#TRX004", tanggal: "2025-05-18", produk: "Paket Umroh Ramadhan 12 Hari", jumlah: 3, total: "Rp90.000.000" },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold text-green-700">🕌 Ringkasan Penjualan Umroh & Haji</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summary.map(({ label, value, percent, color }) => (
          <div key={label} className="bg-white rounded-xl shadow p-5 border border-gray-100">
            <p className="text-sm text-gray-500">{label}</p>
            <h2 className={`text-2xl font-bold text-${color}-600 flex items-center gap-2`}>
              {value}
              <span className={`text-xs font-semibold text-${color}-500`}>{percent}</span>
            </h2>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <Bar options={barOptions} data={barData} />
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <h2 className="text-lg font-semibold mb-4 text-green-700">🧾 Transaksi Terakhir</h2>
        <div className="overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-green-50">
              <tr>
                <th className="px-4 py-2">ID Transaksi</th>
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Paket</th>
                <th className="px-4 py-2">Jumlah</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {transaksi.map((trx) => (
                <tr key={trx.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-700">{trx.id}</td>
                  <td className="px-4 py-2 text-gray-600">{trx.tanggal}</td>
                  <td className="px-4 py-2 text-gray-600">{trx.produk}</td>
                  <td className="px-4 py-2 text-gray-600">{trx.jumlah}</td>
                  <td className="px-4 py-2 text-gray-800 font-semibold">{trx.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Penjualan;
