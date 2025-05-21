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
    { label: "Total Penjualan", value: "$120,000", percent: "+10%", color: "green" },
    { label: "Pesanan Hari Ini", value: "250", percent: "+4%", color: "blue" },
    { label: "Produk Terjual", value: "3,452", percent: "-1%", color: "red" },
    { label: "Retur", value: "120", percent: "+2%", color: "yellow" },
  ];

  const barData = {
    labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    datasets: [
      {
        label: "Penjualan Harian ($)",
        data: [12000, 15000, 10000, 14000, 18000, 22000, 17000],
        backgroundColor: "rgba(16, 185, 129, 0.7)", // green-500
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Tren Penjualan Mingguan" },
    },
  };

  const transaksi = [
    { id: "#TRX001", tanggal: "2025-05-20", produk: "Kamera Canon M50", jumlah: 1, total: "$600" },
    { id: "#TRX002", tanggal: "2025-05-20", produk: "Tripod Takara", jumlah: 2, total: "$90" },
    { id: "#TRX003", tanggal: "2025-05-19", produk: "Lighting Softbox", jumlah: 1, total: "$120" },
    { id: "#TRX004", tanggal: "2025-05-18", produk: "Mic Rode Wireless", jumlah: 1, total: "$280" },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Ringkasan Penjualan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summary.map(({ label, value, percent, color }) => (
          <div key={label} className="bg-white rounded-xl shadow p-5">
            <p className="text-sm text-gray-500">{label}</p>
            <h2 className={`text-2xl font-bold text-${color}-600 flex items-center gap-2`}>
              {value}
              <span className={`text-xs font-semibold text-${color}-500`}>{percent}</span>
            </h2>
          </div>
        ))}
      </div>

      {/* Grafik Penjualan */}
      <div className="bg-white rounded-xl shadow p-6">
        <Bar options={barOptions} data={barData} />
      </div>

      {/* Tabel Transaksi Penjualan */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Transaksi Terakhir</h2>
        <div className="overflow-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">ID Transaksi</th>
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Produk</th>
                <th className="px-4 py-2">Jumlah</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {transaksi.map((trx) => (
                <tr key={trx.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">{trx.id}</td>
                  <td className="px-4 py-2">{trx.tanggal}</td>
                  <td className="px-4 py-2">{trx.produk}</td>
                  <td className="px-4 py-2">{trx.jumlah}</td>
                  <td className="px-4 py-2">{trx.total}</td>
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
