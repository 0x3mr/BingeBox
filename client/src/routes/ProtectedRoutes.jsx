import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Protected route for any logged-in user
export function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    // Redirect to /auth if not authenticated
    return <Navigate to="/auth" replace />;
  }
  return children;
}

// Admin-only route
export function AdminRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  if (!user || user.admin !== "yes") {
    // Redirect to home if not admin or not logged in
    return <Navigate to="/" replace />;
  }
  return children;
}
