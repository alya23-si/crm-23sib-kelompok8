import React, { useState } from "react";
import { PlusCircle, Star, Users, Gift, X } from "lucide-react";

const dummyLoyalty = [
  {
    id: 1,
    program: "Poin Umroh",
    reward: "Diskon Rp500.000",
    criteria: "5x pemesanan paket",
    members: 124,
  },
  {
    id: 2,
    program: "Member Silver",
    reward: "Gratis Merchandise",
    criteria: "Total belanja Rp5.000.000",
    members: 76,
  },
  {
    id: 3,
    program: "Referral Reward",
    reward: "Voucher Travel Rp200.000",
    criteria: "Referensikan 3 orang",
    members: 98,
  },
];

const LoyaltyManagement = () => {
  const [loyalties, setLoyalties] = useState(dummyLoyalty);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    program: "",
    reward: "",
    criteria: "",
    members: 0,
  });

  const handleAdd = () => {
    setLoyalties([...loyalties, { ...formData, id: Date.now() }]);
    setFormData({ program: "", reward: "", criteria: "", members: 0 });
    setShowModal(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Star className="text-yellow-500" /> Loyalty Management
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Tambah Program
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {loyalties.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-5 border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-2">
              <Gift className="text-green-600" />
              <h2 className="text-lg font-semibold text-gray-700">{item.program}</h2>
            </div>
            <p className="text-sm text-gray-600 mb-1">
              🎁 <strong>Reward:</strong> {item.reward}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              📌 <strong>Kriteria:</strong> {item.criteria}
            </p>
            <p className="text-sm text-gray-600">
              <Users size={14} className="inline" /> {item.members} anggota
            </p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X />
            </button>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tambah Program Loyalty
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nama Program"
                className="w-full border rounded px-3 py-2"
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              />
              <input
                type="text"
                placeholder="Reward"
                className="w-full border rounded px-3 py-2"
                value={formData.reward}
                onChange={(e) => setFormData({ ...formData, reward: e.target.value })}
              />
              <input
                type="text"
                placeholder="Kriteria"
                className="w-full border rounded px-3 py-2"
                value={formData.criteria}
                onChange={(e) => setFormData({ ...formData, criteria: e.target.value })}
              />
              <input
                type="number"
                placeholder="Jumlah Member"
                className="w-full border rounded px-3 py-2"
                value={formData.members}
                onChange={(e) => setFormData({ ...formData, members: parseInt(e.target.value) })}
              />
              <button
                onClick={handleAdd}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoyaltyManagement;
