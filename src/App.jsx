import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import PrivateRoute from "./components/PrivateRoute";

// Public Pages
import HomeHero from "./pages/HomeHero";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Pelanggan Pages
import Dashboard from "./pages/Dashboard";
import FormPendaftaranUmroh from "./pages/FormPendaftaranUmroh";
import HelpCenter from "./pages/HelpCenter";
import Destination from "./pages/Destination";
import PapanInformasi from "./pages/PapanInformasi";

// Admin Pages
import Penjualan from "./pages/Penjualan";
import Laporan from "./pages/Laporan";
import CustomerManagement from "./pages/CustomerManagemenrt";
import FollowUpReminder from "./pages/FollowUpReminder";
import SalesPipeline from "./pages/SalesPipeline";
import Prospek from "./pages/Prospek";
import CampaignManagement from "./pages/CampaignManagement";
import EventBasedMarketing from "./pages/EventBasedMarket";
import PartnerMarketing from "./pages/PartnerMarketing";
import OnlineMarketing from "./pages/OnlineMarketing";
import CustomerSegmentation from "./pages/CustomerSegmentation";
import LoyaltyManagement from "./pages/LoyaltyManagement";
import PrediksiPenjualan from "./pages/PrediksiPenjualan";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomeHero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Pelanggan Only */}
      <Route element={<PrivateRoute allowedRoles={["pelanggan", "admin"]} />}>
      
         
          <Route path="/DaftarUmroh" element={<FormPendaftaranUmroh />} />
          <Route path="/HelpCenter" element={<HelpCenter />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/informasi" element={<PapanInformasi />} />
    
      </Route>

      {/* Admin Only */}
      <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
         <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/penjualan" element={<Penjualan />} />
          <Route path="/laporan" element={<Laporan />} />
          <Route path="/pelanggan" element={<CustomerManagement />} />
          <Route path="/remainder" element={<FollowUpReminder />} />
          <Route path="/status" element={<SalesPipeline />} />
          <Route path="/Prospek" element={<Prospek />} />
          <Route path="/campaigns" element={<CampaignManagement />} />
          <Route path="/event-marketing" element={<EventBasedMarketing />} />
          <Route path="/partner-marketing" element={<PartnerMarketing />} />
          <Route path="/online-marketing" element={<OnlineMarketing />} />
          <Route path="/customer-segmentation" element={<CustomerSegmentation />}/>
          <Route path="/loyalty-management" element={<LoyaltyManagement />} />
          <Route path="/prediksi" element={<PrediksiPenjualan />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
