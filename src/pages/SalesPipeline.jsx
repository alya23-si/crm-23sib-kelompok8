import { useState } from "react";
import {
  UserIcon,
  CalendarDaysIcon,
  CheckBadgeIcon,
  PaperAirplaneIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const stages = ["Prospek", "Booking", "Lunas", "Berangkat"];

const stageIcons = {
  Prospek: <UserIcon className="w-5 h-5 text-orange-500 mr-2" />,
  Booking: <CalendarDaysIcon className="w-5 h-5 text-yellow-500 mr-2" />,
  Lunas: <CheckBadgeIcon className="w-5 h-5 text-green-600 mr-2" />,
  Berangkat: <PaperAirplaneIcon className="w-5 h-5 text-purple-500 mr-2" />,
};

const colors = {
  Prospek: "from-orange-50 to-orange-100 border-orange-300",
  Booking: "from-yellow-50 to-yellow-100 border-yellow-300",
  Lunas: "from-green-50 to-green-100 border-green-400",
  Berangkat: "from-purple-50 to-purple-100 border-purple-400",
};

const SalesPipeline = () => {
  const [prospects, setProspects] = useState([
    { id: 1, name: "Ahmad F", contact: "081234567890", status: "Prospek" },
    { id: 2, name: "Budi S", contact: "081212345678", status: "Booking" },
    { id: 3, name: "Citra L", contact: "081298765432", status: "Lunas" },
    { id: 4, name: "Dian T", contact: "081234123412", status: "Berangkat" },
    { id: 5, name: "Eka W", contact: "081211122233", status: "Prospek" },
  ]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({ name: "", contact: "", status: "Prospek" });

  const handleAddProspect = () => {
    if (!formData.name || !formData.contact) return;
    setProspects([...prospects, { ...formData, id: Date.now() }]);
    setFormData({ name: "", contact: "", status: "Prospek" });
  };

  const filteredProspects = prospects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Sales Pipeline Jamaah Umroh</h1>

      <div className="mb-4 flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:w-1/2">
          <MagnifyingGlassIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Cari nama prospek..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-green-300 focus:outline-none"
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Nama Prospek"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-3 py-2 border rounded-lg w-full md:w-auto"
          />
          <input
            type="text"
            placeholder="No. Kontak"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="px-3 py-2 border rounded-lg w-full md:w-auto"
          />
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="px-3 py-2 border rounded-lg w-full md:w-auto"
          >
            {stages.map((stage) => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>
          <button
            onClick={handleAddProspect}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <PlusIcon className="w-4 h-4 mr-1" /> Tambah
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stages.map((stage) => {
          const filtered = filteredProspects.filter((p) => p.status === stage);
          return (
            <div
              key={stage}
              className={`border-l-4 ${colors[stage]} bg-gradient-to-b p-5 rounded-xl shadow hover:shadow-md transition-shadow`}
            >
              <div className="flex items-center mb-4">
                {stageIcons[stage]}
                <h3 className="text-lg font-semibold text-gray-800">{stage}</h3>
                <span className="ml-auto bg-white text-xs text-gray-700 px-2 py-0.5 rounded-full border">
                  {filtered.length}
                </span>
              </div>

              {filtered.length > 0 ? (
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {filtered.map((p) => (
                    <div
                      key={p.id}
                      className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 transition"
                    >
                      <p className="text-sm font-medium text-gray-800">{p.name}</p>
                      <p className="text-xs text-gray-500">{p.contact}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 mt-2 italic">Tidak ada data</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesPipeline;