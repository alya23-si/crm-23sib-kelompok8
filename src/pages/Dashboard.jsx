import React from 'react'
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
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  const stats = [
    { label: "Pendapatan Hari Ini", value: "Rp53.000.000", percent: "+55%", color: "green" },
    { label: "Pengguna Hari Ini", value: "2.300", percent: "+3%", color: "orange" },
    { label: "Klien Baru", value: "+3.462", percent: "-2%", color: "red" },
    { label: "Total Penjualan", value: "Rp103.430.000", percent: "+5%", color: "green" },
  ]

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Penjualan (juta Rp)",
        data: [12, 19, 14, 17, 22, 30, 28, 26, 32, 35, 40, 45],
        backgroundColor: "rgba(251, 140, 0, 0.7)", // orange-500
        borderRadius: 6,
      },
    ],
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Penjualan Bulanan - 2024',
        color: '#FB8C00',
        font: { size: 18 }
      },
    },
    scales: {
      y: {
        ticks: { color: '#666' },
        grid: { color: '#eee' }
      },
      x: {
        ticks: { color: '#666' },
        grid: { display: false }
      }
    }
  }

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Jumlah Pelanggan",
        data: [50, 75, 120, 180, 220, 260, 300, 350, 400, 430, 460, 500],
        borderColor: "rgba(67, 160, 71, 1)", // green-600
        backgroundColor: "rgba(67, 160, 71, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#43A047"
      },
    ],
  }

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Pertumbuhan Pelanggan - 2024',
        color: '#43A047',
        font: { size: 18 }
      },
    },
    scales: {
      y: {
        ticks: { color: '#666' },
        grid: { color: '#eee' }
      },
      x: {
        ticks: { color: '#666' },
        grid: { display: false }
      }
    }
  }

  return (
    <div className="p-6 space-y-8">
      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, percent, color }) => (
          <div key={label} className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
            <p className="text-sm text-gray-500">{label}</p>
            <h2 className={`text-2xl font-bold text-${color}-600`}>
              {value}
              <span className={`ml-2 text-sm font-semibold text-${color}-500`}>
                {percent}
              </span>
            </h2>
          </div>
        ))}
      </div>

      {/* Grafik Penjualan */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <Bar options={barOptions} data={barData} />
      </div>

      {/* Grafik Pelanggan */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
        <Line options={lineOptions} data={lineData} />
      </div>
    </div>
  )
}

export default Dashboard
