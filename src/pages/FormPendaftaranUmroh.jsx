// pages/FormPendaftaranUmroh.jsx
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import logorwh from "../assets/logorwh.png";

const supabase = createClient(
  "https://uaqrzhdaqniaakxsrnny.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcXJ6aGRhcW5pYWFreHNybm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzUyMTYsImV4cCI6MjA2NjQxMTIxNn0.Uxz61nWFyXg2sny7lsVawsnLbZ-FjWM4xqVC1kl8KoQ" // anon key
);

const FormPendaftaranUmroh = () => {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    nik: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    alamat: "",
    no_hp: "",
    email: "",
    no_paspor: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("pendaftaran_umroh")
      .insert([formData]);

    if (error) {
      setMessage("Gagal menyimpan data. Silakan coba lagi.");
      console.error(error);
    } else {
      setMessage("Pendaftaran berhasil!");
      setFormData({
        nama_lengkap: "",
        nik: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        alamat: "",
        no_hp: "",
        email: "",
        no_paspor: "",
      });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10 border border-green-100">
      <div className="flex items-center gap-4 mb-6">
        <img src={logorwh} alt="Logo RWH" className="h-12 w-auto" />
        <h1 className="text-3xl font-bold text-green-800">Formulir Pendaftaran Umroh</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Nama Lengkap", name: "nama_lengkap" },
            { label: "NIK", name: "nik" },
            { label: "Tempat Lahir", name: "tempat_lahir" },
            { label: "Tanggal Lahir", name: "tanggal_lahir", type: "date" },
            { label: "Jenis Kelamin", name: "jenis_kelamin", type: "select", options: ["Laki-laki", "Perempuan"] },
            { label: "No. HP", name: "no_hp" },
            { label: "Email", name: "email", type: "email" },
            { label: "No. Paspor", name: "no_paspor" },
          ].map(({ label, name, type = "text", options }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              {type === "select" ? (
                <select
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                  required
                >
                  <option value="">-- Pilih --</option>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                  required
                />
              )}
            </div>
          ))}

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Alamat</label>
            <textarea
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              rows={2}
              required
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md shadow"
          >
            {loading ? "Menyimpan..." : "Daftar Sekarang"}
          </button>
        </div>
        {message && <p className="mt-4 text-sm text-center text-green-700 font-medium">{message}</p>}
      </form>
    </div>
  );
};

export default FormPendaftaranUmroh;
