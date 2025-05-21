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
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>

      <div className="bg-white rounded-xl shadow p-6 overflow-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nama Produk</th>
              <th className="px-4 py-2">Kategori</th>
              <th className="px-4 py-2">Harga (USD)</th>
              <th className="px-4 py-2">Stok</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{prod.id}</td>
                <td className="px-4 py-2">{prod.name}</td>
                <td className="px-4 py-2">{prod.category}</td>
                <td className="px-4 py-2">${prod.price}</td>
                <td className="px-4 py-2">{prod.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produk;
