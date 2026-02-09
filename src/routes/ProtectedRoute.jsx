import { Navigate } from "react-router-dom";

/**
 * Simple protected route.
 * Redirects unauthorized users to /login.
 */
function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) return <Navigate to="/login" replace />;
  return children;
}

export default ProtectedRoute;
