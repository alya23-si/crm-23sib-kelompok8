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
      return "bg-yellow-200 text-yellow-800";
    case "Follow Up":
      return "bg-blue-200 text-blue-800";
    case "Sukses":
      return "bg-green-200 text-green-800";
    default:
      return "bg-gray-200 text-gray-700";
  }
};

const Prospek = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Manajemen Prospek</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          <PlusCircle size={18} />
          Tambah Prospek
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead className="bg-gray-100 text-left text-xs text-gray-600 uppercase">
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
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-gray-500" />
                    {item.name}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-gray-500" />
                    {item.phone}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-500" />
                    {item.email}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <a href="#" className="text-blue-600 hover:underline text-sm">Detail</a>
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
