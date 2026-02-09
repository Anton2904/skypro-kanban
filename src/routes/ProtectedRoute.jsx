import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * Simple protected route.
 * Redirects unauthorized users to /login.
 */
function ProtectedRoute({ isAuth, children }) {
  const auth = useAuth();
  const allowed = typeof isAuth === "boolean" ? isAuth : auth.isAuth;
  if (!allowed) return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRoute;
