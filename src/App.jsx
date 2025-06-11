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
import CampaignManagement from './pages/CampaignManagement';
import EventBasedMarketing from './pages/EventBasedMarket';
import PartnerMarketing from "./pages/PartnerMarketing";
import OnlineMarketing from "./pages/OnlineMarketing";
import CustomerSegmentation from "./pages/CustomerSegmentation";
import LoyaltyManagement from "./pages/LoyaltyManagement";
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
        <Route path="/campaigns" element={<CampaignManagement />} />
        <Route path="/event-marketing" element={<EventBasedMarketing />} />
        <Route path="/partner-marketing" element={<PartnerMarketing />} />
        <Route path="/online-marketing" element={<OnlineMarketing />} />
        <Route path="/customer-segmentation" element={<CustomerSegmentation />} />
        <Route path="/loyalty-management" element={<LoyaltyManagement />} />

      </Route>
    </Routes>
  );
}

export default App;
