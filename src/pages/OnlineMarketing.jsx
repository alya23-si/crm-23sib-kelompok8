import React, { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";
import { Dialog } from "@headlessui/react";

const OnlineMarketing = () => {
  const [strategies, setStrategies] = useState([
    { id: 1, channel: "Instagram", campaign: "Promo Umroh Akhir Tahun" },
    { id: 2, channel: "Facebook", campaign: "Diskon 20% Liburan Riau" },
    { id: 3, channel: "Google Ads", campaign: "Paket Wisata Halal" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ channel: "", campaign: "" });

  const handleAdd = () => {
    setStrategies([
      ...strategies,
      { id: Date.now(), channel: form.channel, campaign: form.campaign },
    ]);
    setForm({ channel: "", campaign: "" });
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    setStrategies(strategies.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-green-800">
          Strategi Online Marketing RWH
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          <PlusCircle size={18} /> Tambah Strategi
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow border border-green-100 p-4">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-green-50 text-green-800">
            <tr>
              <th className="px-4 py-2">Channel</th>
              <th className="px-4 py-2">Kampanye</th>
              <th className="px-4 py-2 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {strategies.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{item.channel}</td>
                <td className="px-4 py-3">{item.campaign}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <Dialog.Title className="text-lg font-bold text-green-700 mb-4">
              Tambah Strategi Marketing
            </Dialog.Title>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Channel (mis. Instagram, Google Ads)"
                value={form.channel}
                onChange={(e) => setForm({ ...form, channel: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
              />
              <input
                type="text"
                placeholder="Judul Kampanye"
                value={form.campaign}
                onChange={(e) => setForm({ ...form, campaign: e.target.value })}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border rounded-md"
              >
                Batal
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Simpan
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default OnlineMarketing;
