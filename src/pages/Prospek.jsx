import React from "react";
import { PlusCircle, User, Phone, Mail } from "lucide-react";

const dummyProspects = [
  {
    id: 1,
    name: "Ahmad Yusuf",
    phone: "0812-3456-7890",
    email: "ahmad@example.com",
    status: "Baru",
  },
  {
    id: 2,
    name: "Siti Aminah",
    phone: "0856-9876-5432",
    email: "siti@example.com",
    status: "Follow Up",
  },
  {
    id: 3,
    name: "Budi Santoso",
    phone: "0821-5555-1111",
    email: "budi@example.com",
    status: "Sukses",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Baru":
      return "bg-orange-100 text-orange-600";
    case "Follow Up":
      return "bg-yellow-100 text-yellow-700";
    case "Sukses":
      return "bg-green-100 text-green-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const Prospek = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">Manajemen Prospek Jamaah</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
          <PlusCircle size={18} />
          Tambah Prospek
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow border border-green-100">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead className="bg-green-50 text-left text-xs text-green-800 uppercase">
            <tr>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Telepon</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {dummyProspects.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <User size={14} className="text-green-600" />
                    {item.name}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone size={14} className="text-green-600" />
                    {item.phone}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail size={14} className="text-green-600" />
                    {item.email}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <a href="#" className="text-orange-500 hover:underline text-sm">Detail</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Prospek;
