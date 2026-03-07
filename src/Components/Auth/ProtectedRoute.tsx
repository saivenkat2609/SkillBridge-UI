import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute({role}: Readonly<{role?: string}>) {
  const { userData, isLoading } = useAuth();
  if (isLoading) return <div>Loading...</div>;
  if (!userData) {
    return <Navigate to="/login" />;
  }
  if(role && userData.role !== role){
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
