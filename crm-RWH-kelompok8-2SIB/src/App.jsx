import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
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