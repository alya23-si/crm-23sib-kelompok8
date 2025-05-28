import React from "react";

const Produk = () => {
  // Data dummy produk
  const products = [
    { id: 1, name: "Kamera Canon M50", category: "Elektronik", price: 600, stock: 15 },
    { id: 2, name: "Tripod Takara", category: "Aksesoris", price: 45, stock: 30 },
    { id: 3, name: "Lighting Softbox", category: "Lighting", price: 120, stock: 10 },
    { id: 4, name: "Mic Rode Wireless", category: "Audio", price: 280, stock: 8 },
    { id: 5, name: "Lensa Canon 50mm", category: "Elektronik", price: 350, stock: 12 },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Daftar Produk</h1>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm divide-y divide-gray-200">
          <thead className="bg-gray-100 text-left text-xs text-gray-600 uppercase">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nama Produk</th>
              <th className="px-4 py-2">Kategori</th>
              <th className="px-4 py-2">Harga (USD)</th>
              <th className="px-4 py-2">Stok</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {products.map((prod) => (
              <tr key={prod.id}>
                <td className="px-4 py-3">{prod.id}</td>
                <td className="px-4 py-3">{prod.name}</td>
                <td className="px-4 py-3">{prod.category}</td>
                <td className="px-4 py-3">${prod.price}</td>
                <td className="px-4 py-3">{prod.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produk;
