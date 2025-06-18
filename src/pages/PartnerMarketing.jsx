import React, { useState } from "react";
import { PlusCircle, Link2, Building2, Trash2, Pencil, X } from "lucide-react";

const PartnerMarketing = () => {
  const [partners, setPartners] = useState([
    { id: 1, name: "Traveloka", website: "https://www.traveloka.com" },
    { id: 2, name: "Tiket.com", website: "https://www.tiket.com" },
  ]);

  const [form, setForm] = useState({ name: "", website: "" });
  const [showModal, setShowModal] = useState(false);

  const handleAddPartner = () => {
    if (!form.name || !form.website) return;
    setPartners([...partners, { id: Date.now(), ...form }]);
    setForm({ name: "", website: "" });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setPartners(partners.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-700">Kemitraan & Partner RWH</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          <PlusCircle size={18} /> Tambah Partner
        </button>
      </div>

      {/* Modal Input */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X />
            </button>
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Tambah Partner Baru
            </h2>
            <div className="space-y-3">
              <input
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Nama Mitra"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                placeholder="Alamat Website (https://...)"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </div>
            <div className="flex justify-end mt-5 gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                onClick={handleAddPartner}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Daftar Partner */}
      <div className="grid md:grid-cols-2 gap-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2 text-lg font-semibold text-green-800">
                <Building2 size={20} /> {partner.name}
              </div>
              <div className="flex gap-3">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  <Link2 size={18} />
                </a>
                <button className="text-gray-400 hover:text-gray-600 cursor-not-allowed" disabled>
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => handleDelete(partner.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 truncate">{partner.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerMarketing;
