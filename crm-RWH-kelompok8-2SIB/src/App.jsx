import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard'; // Pastikan file ini ada
import CustomerManagement from './pages/CustomerManagemenrt';
import FollowUpReminder from './pages/FollowUpRemainder';
import SalesPipeline from './pages/SalesPipeline';
import Dashboard from './pages/Dashboard';
import Penjualan from './pages/Penjualan'; 
import Produk from './pages/Produk';
import Laporan from './pages/Laporan';
import FormPendaftaranUmroh from './pages/FormPendaftaranUmroh';// Pastikan file ini ada
import Prospek from './pages/Prospek';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/remainder" element={<FollowUpReminder />} />
        <Route path="/status" element={<SalesPipeline />} />
        {/* Tambahkan route lain jika ada */}
       <Route path="/penjualan" element={<Penjualan />} />
       <Route path="/produk" element={<Produk />} />
       <Route path="/laporan" element={<Laporan />} />
      <Route path="/DaftarUmroh" element={<FormPendaftaranUmroh />} />
          <Route path="/Prospek" element={<Prospek />} />
      </Route>
    </Routes>
  );
}

export default App;