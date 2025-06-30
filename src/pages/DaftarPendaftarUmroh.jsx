import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://uaqrzhdaqniaakxsrnny.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcXJ6aGRhcW5pYWFreHNybm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzUyMTYsImV4cCI6MjA2NjQxMTIxNn0.Uxz61nWFyXg2sny7lsVawsnLbZ-FjWM4xqVC1kl8KoQ"
);

const DaftarPendaftarUmroh = () => {
  const [data, setData] = useState([]);
  const [paketList, setPaketList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [adding, setAdding] = useState(false);
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    no_hp: "",
    paket_id: "",
  });

  const fetchData = async () => {
    setLoading(true);

    const { data: pendaftar, error } = await supabase
      .from("pendaftaran_umroh")
      .select("*, paket(title)");
    if (!error) setData(pendaftar);

    const { data: paketData } = await supabase
      .from("paket")
      .select("id, title");
    if (paketData) setPaketList(paketData);

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (p) => {
    setEditing(p.id);
    setFormData({
      nama_lengkap: p.nama_lengkap,
      email: p.email,
      no_hp: p.no_hp,
      paket_id: p.paket_id || "",
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus?")) {
      await supabase.from("pendaftaran_umroh").delete().eq("id", id);
      fetchData();
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("pendaftaran_umroh")
      .update(formData)
      .eq("id", editing);

    if (error) {
      alert("Gagal update data");
      console.error(error);
    } else {
      setEditing(null);
      fetchData();
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("pendaftaran_umroh").insert([formData]);

    if (error) {
      alert("Gagal menambah data");
      console.error(error);
    } else {
      setAdding(false);
      setFormData({ nama_lengkap: "", email: "", no_hp: "", paket_id: "" });
      fetchData();
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Daftar Pendaftar Umroh</h1>
        <button
          onClick={() => setAdding(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Tambah Pendaftar
        </button>
      </div>

      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2">Nama</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">No HP</th>
                <th className="px-4 py-2">Paket</th>
                <th className="px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p, idx) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2">{p.nama_lengkap}</td>
                  <td className="px-4 py-2">{p.email}</td>
                  <td className="px-4 py-2">{p.no_hp}</td>
                  <td className="px-4 py-2">{p.paket?.title || "-"}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEditClick(p)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-red-600 hover:underline"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <Modal
          title="Edit Data Pendaftar"
          onClose={() => setEditing(null)}
          onSubmit={handleUpdate}
          formData={formData}
          onChange={handleChange}
          paketList={paketList}
        />
      )}

      {adding && (
        <Modal
          title="Tambah Pendaftar"
          onClose={() => setAdding(false)}
          onSubmit={handleAdd}
          formData={formData}
          onChange={handleChange}
          paketList={paketList}
        />
      )}
    </div>
  );
};

const Modal = ({ title, onClose, onSubmit, formData, onChange, paketList }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 w-[400px]"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <div>
        <label className="block text-sm font-medium">Nama</label>
        <input
          type="text"
          name="nama_lengkap"
          value={formData.nama_lengkap}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">No HP</label>
        <input
          type="text"
          name="no_hp"
          value={formData.no_hp}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Paket Umroh</label>
        <select
          name="paket_id"
          value={formData.paket_id}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">-- Pilih Paket --</option>
          {paketList.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Batal
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Simpan
        </button>
      </div>
    </form>
  </div>
);

export default DaftarPendaftarUmroh;
