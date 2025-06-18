import React, { useState, useMemo } from "react";
import { PlusCircle, Pencil, Trash2, Filter, Download } from "lucide-react";
import { saveAs } from "file-saver";

const dummyCampaigns = [
  {
    id: 1,
    title: "Promo Liburan Akhir Tahun",
    channel: "Instagram",
    date: "2025-06-01",
  },
  {
    id: 2,
    title: "Diskon Spesial Umroh",
    channel: "Email",
    date: "2025-06-05",
  },
];

const CampaignManagement = () => {
  const [campaigns, setCampaigns] = useState(dummyCampaigns);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ id: null, title: "", channel: "", date: "" });
  const [filterChannel, setFilterChannel] = useState("");

  const openModal = (campaign = { id: null, title: "", channel: "", date: "" }) => {
    setFormData(campaign);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ id: null, title: "", channel: "", date: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setCampaigns(campaigns.map((c) => (c.id === formData.id ? formData : c)));
    } else {
      setCampaigns([...campaigns, { ...formData, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setCampaigns(campaigns.filter((c) => c.id !== id));
  };

  const filteredCampaigns = useMemo(() => {
    return filterChannel ? campaigns.filter((c) => c.channel.toLowerCase().includes(filterChannel.toLowerCase())) : campaigns;
  }, [campaigns, filterChannel]);

  const exportToCSV = () => {
    const headers = ["ID", "Judul", "Channel", "Tanggal"];
    const rows = campaigns.map((c) => [c.id, c.title, c.channel, c.date]);
    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "campaigns.csv");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800">Manajemen Kampanye</h1>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Filter by channel..."
            value={filterChannel}
            onChange={(e) => setFilterChannel(e.target.value)}
            className="px-3 py-2 border rounded-md text-sm"
          />
          <button
            onClick={exportToCSV}
            className="flex items-center gap-1 bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600"
          >
            <Download size={16} /> Export
          </button>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <PlusCircle size={18} /> Tambah Campaign
          </button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCampaigns.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md border border-green-100 p-4 flex flex-col gap-2"
          >
            <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            <p className="text-sm text-gray-600">📢 Channel: {item.channel}</p>
            <p className="text-sm text-gray-600">📅 Tanggal: {item.date}</p>
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => openModal(item)}
                className="text-orange-600 hover:underline text-sm flex items-center gap-1"
              >
                <Pencil size={16} /> Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-600 hover:underline text-sm flex items-center gap-1"
              >
                <Trash2 size={16} /> Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Tambah/Edit */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg border border-green-200">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              {formData.id ? "Edit Campaign" : "Tambah Campaign"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Judul Campaign</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Channel</label>
                <input
                  type="text"
                  name="channel"
                  value={formData.channel}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tanggal</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignManagement;