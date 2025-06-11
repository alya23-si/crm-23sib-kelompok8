import React, { useState } from "react";
import { PlusCircle, Link2, Building2, Trash2, Pencil } from "lucide-react";

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
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Partner Marketing</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Tambah Partner
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Tambah Partner Baru</h2>
            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="Nama Partner"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="w-full border p-2 rounded mb-3"
              placeholder="Website"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Batal
              </button>
              <button
                onClick={handleAddPartner}
                className="px-4 py-2 bg-blue-600 text-white rounded"
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
            className="p-4 bg-white rounded-lg shadow space-y-2 border"
          >
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Building2 className="text-blue-500" size={20} />
                {partner.name}
              </div>
              <div className="flex gap-2">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <Link2 size={18} />
                </a>
                <Pencil size={18} className="text-gray-500 cursor-pointer" />
                <Trash2
                  size={18}
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDelete(partner.id)}
                />
              </div>
            </div>
            <p className="text-sm text-gray-600">{partner.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerMarketing;
