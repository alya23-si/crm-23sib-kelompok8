import React, { useState } from "react";
import { PlusCircle, Search } from "lucide-react";
import { Dialog } from "@headlessui/react";

const dummySegments = [
  {
    id: 1,
    name: "Pelanggan Setia",
    criteria: "Sering melakukan pemesanan dalam 6 bulan terakhir",
    count: 150,
  },
  {
    id: 2,
    name: "Pelanggan Baru",
    criteria: "Baru mendaftar dalam 30 hari terakhir",
    count: 87,
  },
  {
    id: 3,
    name: "Pelanggan Tidak Aktif",
    criteria: "Tidak ada aktivitas dalam 3 bulan terakhir",
    count: 60,
  },
];

const CustomerSegmentation = () => {
  const [segments, setSegments] = useState(dummySegments);
  const [isOpen, setIsOpen] = useState(false);
  const [newSegment, setNewSegment] = useState({ name: "", criteria: "" });

  const handleAdd = () => {
    const newId = segments.length + 1;
    setSegments([...segments, { ...newSegment, id: newId, count: 0 }]);
    setNewSegment({ name: "", criteria: "" });
    setIsOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Customer Segmentation
        </h1>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <PlusCircle size={18} /> Tambah Segmentasi
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 text-left">
            <tr>
              <th className="px-4 py-3">Segment</th>
              <th className="px-4 py-3">Kriteria</th>
              <th className="px-4 py-3">Jumlah Pelanggan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {segments.map((seg) => (
              <tr key={seg.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-medium text-gray-800">
                  {seg.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{seg.criteria}</td>
                <td className="px-4 py-3 text-gray-600">{seg.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup Form */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <Dialog.Title className="text-lg font-semibold mb-4">Tambah Segmentasi</Dialog.Title>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Nama Segment</label>
                <input
                  type="text"
                  value={newSegment.name}
                  onChange={(e) => setNewSegment({ ...newSegment, name: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Kriteria Segment</label>
                <textarea
                  value={newSegment.criteria}
                  onChange={(e) => setNewSegment({ ...newSegment, criteria: e.target.value })}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Batal
                </button>
                <button
                  onClick={handleAdd}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Simpan
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default CustomerSegmentation;
