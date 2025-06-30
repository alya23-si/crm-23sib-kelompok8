import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import bcrypt from "bcryptjs";
import logorwh from "../assets/logorwh.png";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

const Register = () => {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    telepon: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const hashedPassword = await bcrypt.hash(form.password, 10);

      const { error } = await supabase.from("manajemen_pelanggan").insert([
        {
          nama: form.nama,
          email: form.email,
          telepon: form.telepon,
          password: hashedPassword,
          status: "Aktif",
          role: "pelanggan", // ✅ Set default role pelanggan
        },
      ]);

      if (error) throw error;

      setSuccess("Pendaftaran berhasil. Silakan login.");
      setForm({ nama: "", email: "", password: "", telepon: "" });
    } catch (err) {
      setError(err.message || "Gagal mendaftar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-orange-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-green-100">
        <div className="flex justify-center mb-6">
          <img src={logorwh} alt="Logo RWH" className="h-16" />
        </div>
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-2">
          Daftar Akun
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Isi data lengkap untuk bergabung dengan Riau Wisata Hati.
        </p>

        {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-2 text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              value={form.nama}
              onChange={handleChange}
              required
              className="w-full pl-10 border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-10 border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="tel"
              name="telepon"
              placeholder="No. Telepon"
              value={form.telepon}
              onChange={handleChange}
              required
              className="w-full pl-10 border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Kata Sandi"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full pl-10 border rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
          >
            {loading ? "Mendaftarkan..." : "Daftar Sekarang"}
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
