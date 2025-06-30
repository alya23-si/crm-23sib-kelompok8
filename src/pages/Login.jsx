import React, { useState } from "react";
import { supabase } from "../supabase";
import bcrypt from "bcryptjs";
import { useNavigate, Link } from "react-router-dom";
import logorwh from "../assets/logorwh.png";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("manajemen_pelanggan")
        .select("*")
        .eq("email", form.email)
        .single();

      if (error || !data) throw new Error("Email tidak ditemukan.");

      const isPasswordMatch =
        data.password === form.password || await bcrypt.compare(form.password, data.password);

      if (!isPasswordMatch) throw new Error("Kata sandi salah.");

      localStorage.setItem("pelanggan", JSON.stringify(data));

      const role = data.role || "pelanggan";
      navigate(role === "admin" ? "/dashboard" : "/");
    } catch (err) {
      setError(err.message || "Gagal login.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = async () => {
    setError("");
    setLoading(true);

    try {
      const { data: existing } = await supabase
        .from("manajemen_pelanggan")
        .select("id")
        .eq("email", "admin@rwh.com")
        .single();

      if (existing) {
        setError("Akun admin sudah tersedia.");
        setLoading(false);
        return;
      }

      const hashedPassword = await bcrypt.hash("admin123", 10);

      const { error: insertError } = await supabase.from("manajemen_pelanggan").insert([
        {
          nama: "Admin RWH",
          email: "admin@rwh.com",
          telepon: "081234567890",
          password: hashedPassword,
          role: "admin",
          status: "Aktif",
        },
      ]);

      if (insertError) throw insertError;

      alert("Akun admin berhasil dibuat!\nEmail: admin@rwh.com\nPassword: admin123");
    } catch (err) {
      setError(err.message || "Gagal membuat akun admin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-green-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-green-100">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logorwh} alt="Logo RWH" className="h-16" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-green-700 text-center mb-2">Masuk Akun</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Silakan login menggunakan email dan kata sandi Anda.
        </p>

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-10 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
              className="w-full pl-10 border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Belum punya akun?{" "}
          <Link to="/register" className="text-orange-600 font-semibold hover:underline">
            Daftar di sini
          </Link>
        </p>

        {/* Admin Create Button */}
        <div className="text-center mt-4">
          <button
            onClick={handleCreateAdmin}
            disabled={loading}
            className="text-xs text-blue-500 hover:underline"
          >
            Buat Akun Admin Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
