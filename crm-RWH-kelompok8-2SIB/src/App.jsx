import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard'; // Pastikan file ini ada
import CustomerManagement from './pages/CustomerManagemenrt';
import FollowUpReminder from './pages/FollowUpRemainder';
import SalesPipeline from './pages/SalesPipeline';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/remainder" element={<FollowUpReminder />} />
        <Route path="/status" element={<SalesPipeline />} />
        {/* Tambahkan route lain jika ada */}
      </Route>
    </Routes>
  );
}

export default App;