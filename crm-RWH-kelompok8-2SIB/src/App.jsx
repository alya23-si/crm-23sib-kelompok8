import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Penjualan from './pages/Penjualan'; 
import Produk from './pages/Produk';
import Laporan from './pages/Laporan';// Pastikan file ini ada

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
       <Route path="/penjualan" element={<Penjualan />} />
       <Route path="/produk" element={<Produk />} />
       <Route path="/laporan" element={<Laporan />} />
      </Route>
    </Routes>
  );
}

export default App;