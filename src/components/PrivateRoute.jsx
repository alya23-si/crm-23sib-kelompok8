import { Navigate, Outlet } from "react-router-dom";

// PrivateRoute menerima role yang dibutuhkan
const PrivateRoute = ({ allowedRoles }) => {
  const storedUser = localStorage.getItem("pelanggan");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Jika tidak login
  if (!user) return <Navigate to="/login" />;

  // Jika role user tidak termasuk yang diizinkan
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  // Akses diizinkan
  return <Outlet />;
};

export default PrivateRoute;
