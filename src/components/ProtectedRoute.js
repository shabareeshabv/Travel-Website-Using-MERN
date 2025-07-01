// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    alert("Please login to access this page.");
    return <Navigate to="/Signup" />;
  }

  return children;
};

export default ProtectedRoute;
