import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Penjualan from './pages/Penjualan'; 
import Produk from './pages/Produk';
import Laporan from './pages/Laporan';
import Dashboard from './pages/Dashboard';
import CustomerManagement from './pages/CustomerManagemenrt';
import KinerjaSales from './pages/KinerjaSales'; 
import FollowUpReminder from './pages/FollowUpReminder'; 
import SalesPipeline from './pages/SalesPipeline'; 
import FormPendaftaranUmroh from './pages/FormPendaftaranUmroh';
import Prospek from './pages/Prospek';
import HelpCenter from './pages/HelpCenter';
import Destination from './pages/Destination';


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
        <Route path="/remainder" element={<FollowUpReminder />} /> 
          <Route path="/status" element={<SalesPipeline />} />
          <Route path="/DaftarUmroh" element={<FormPendaftaranUmroh />} />
          <Route path="/Prospek" element={<Prospek />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/Destination" element={<Destination />} />


      </Route>
    </Routes>
  );
}

export default App;
