import logorwh from "../assets/logorwh.png";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart2,
  Settings,
  LogIn,
  UserPlus,
  Bell,
  ChartLine,
  ClipboardList,
  FileSearch,
  Info,
  Megaphone,
  CalendarCheck,
  Handshake,
  Globe,
  Gift,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const groupedMenuItems = [
  {
    label: "Utama",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
      { name: "Laporan", icon: BarChart2, path: "/laporan" },
      { name: "Prediksi Penjualan", icon: BarChart2, path: "/prediksi" },
    ],
  },
  {
    label: "Manajemen Jamaah",
    items: [
      { name: "Penjualan", icon: ShoppingCart, path: "/penjualan" },
      { name: "Pelanggan", icon: Users, path: "/pelanggan" },
      { name: "Reminder", icon: Bell, path: "/remainder" },
      { name: "Status", icon: ChartLine, path: "/status" },
      { name: "Data Pendaftar", icon: ClipboardList, path: "/pendaftar" },
      { name: "Manajemen Prospek", icon: FileSearch, path: "/Prospek" },
    ],
  },
  {
    label: "Marketing",
    items: [
      { name: "Campaign Management", icon: Megaphone, path: "/campaigns" },
      { name: "Event-Based Marketing", icon: CalendarCheck, path: "/event-marketing" },
      { name: "Partner Marketing", icon: Handshake, path: "/partner-marketing" },
      { name: "Online Marketing", icon: Globe, path: "/online-marketing" },
      { name: "Customer Segmentation", icon: Users, path: "/customer-segmentation" },
      { name: "Loyalty", icon: Gift, path: "/loyalty-management" },
    ],
  },
];

const accountItems = [
  { name: "Pengaturan Akun", icon: Settings, path: "/akun" },
  { name: "Sign In", icon: LogIn, path: "/login" },
  { name: "Sign Up", icon: UserPlus, path: "/register" },
];

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("pelanggan");
    if (stored) {
      const user = JSON.parse(stored);
      setUserRole(user?.role);
    }
  }, []);

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  // ❌ Jangan render sidebar jika bukan admin
  if (userRole !== "admin") return null;

  return (
    <aside
      className={`bg-white min-h-screen flex-shrink-0 shadow-md border-r transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo dan Collapse Button */}
      <div className="flex items-center justify-between px-4 mb-6">
        {!collapsed && (
          <img
            src={logorwh}
            alt="Riau Wisata Hati Logo"
            className="w-36 h-auto"
          />
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 text-gray-500 hover:text-green-600"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu untuk Admin */}
      {groupedMenuItems.map((group) => (
        <div key={group.label} className="mb-2">
          <button
            onClick={() => toggleDropdown(group.label)}
            className="flex items-center w-full gap-3 px-4 py-2 text-xs font-semibold uppercase text-gray-500 hover:text-orange-600 transition"
          >
            {!collapsed && (
              <>
                {group.label}
                {openDropdowns[group.label] ? (
                  <ChevronUp size={16} className="ml-auto" />
                ) : (
                  <ChevronDown size={16} className="ml-auto" />
                )}
              </>
            )}
          </button>
          {openDropdowns[group.label] && (
            <nav className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-3 px-6 py-2 rounded-lg transition-all hover:bg-orange-100 ${
                      isActive(item.path)
                        ? "bg-green-100 text-green-700 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    <Icon size={20} />
                    {!collapsed && <span>{item.name}</span>}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      ))}

      {/* Akun */}
      <div className="mt-6 text-xs font-semibold text-gray-500 px-4">
        {!collapsed && "AKUN"}
      </div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all hover:bg-orange-100 ${
                isActive(item.path)
                  ? "bg-green-100 text-green-700 font-semibold"
                  : "text-gray-700"
              }`}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
