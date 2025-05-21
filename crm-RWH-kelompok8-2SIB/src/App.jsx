import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Penjualan from './pages/Penjualan'; 
import Produk from './pages/Produk';
import Laporan from './pages/Laporan';// Pastikan file ini ada
import Dashboard from './pages/Dashboard'; // Pastikan file ini ada
import CustomerManagement from './pages/CustomerManagemenrt';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
       <Route path="/penjualan" element={<Penjualan />} />
       <Route path="/produk" element={<Produk />} />
       <Route path="/laporan" element={<Laporan />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        {/* Tambahkan route lain jika ada */}
      </Route>
    </Routes>
  );
}

export default App;