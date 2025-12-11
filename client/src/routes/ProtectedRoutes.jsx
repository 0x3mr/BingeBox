import { Navigate } from "react-router-dom";

// Protected route for any logged-in user
export function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    // Redirect to /auth if no user
    return <Navigate to="/auth" replace />;
  }
  return children;
}

// Admin-only route
export function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.admin !== "yes") {
    // Redirect to home if not admin or not logged in
    return <Navigate to="/" replace />;
  }
  return children;
}
