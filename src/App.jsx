import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Penjualan from './pages/Penjualan'; 
import Produk from './pages/Produk';
import Laporan from './pages/Laporan';
import Dashboard from './pages/Dashboard';
import CustomerManagement from './pages/CustomerManagemenrt';
import KinerjaSales from './pages/KinerjaSales'; 

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/penjualan" element={<Penjualan />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/kinerja-sales" element={<KinerjaSales />} /> 
      </Route>
    </Routes>
  );
}

export default App;
