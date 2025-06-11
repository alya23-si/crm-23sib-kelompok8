import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Box,
  BarChart2,
  Settings,
  User,
  LogIn,
  UserPlus,
  Bell,
  ChartLine,
  ClipboardList,
  FileSearch,
  BookOpen,
  MapPin,
  Megaphone,
  CalendarCheck,
  Handshake,
  Globe,
  Gift,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: "Penjualan", icon: <ShoppingCart />, path: "/penjualan" },
  { name: 'Pelanggan', icon: <Users />, path: '/pelanggan' },
  { name: 'Kinerja Sales', icon: <User />, path: '/kinerja-sales' },
  { name: 'Remainder', icon: <Bell />, path: '/remainder' },
  { name: 'Status', icon: <ChartLine />, path: '/status' },
  { name: "Form Umroh", icon: <ClipboardList />, path: "/DaftarUmroh" },
  { name: "Manajemen Prospek", icon: <FileSearch />, path: "/Prospek" },

  { name: "Help Center", icon: <BookOpen />, path: "/HelpCenter" },
  { name: "Destination", icon: <MapPin />, path: "/Destination" },
 { name: 'Campaign Management', icon: <Megaphone />, path: '/campaigns' },
  { name: 'Event-Based Marketing', icon: <CalendarCheck />, path: '/event-marketing' },
  { name: 'Partner Marketing', icon: <Handshake />, path: '/partner-marketing' },
  { name: 'Online Marketing', icon: <Globe />, path: '/online-marketing' },
  { name: 'Customer Segmentation', icon: <Users />, path: '/customer-segmentation' },
  { name: 'Loyalty', icon: <Gift />, path: '/loyalty-management' },
];



const accountItems = [
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
]

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-purple-700">UMKM CRM</div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
