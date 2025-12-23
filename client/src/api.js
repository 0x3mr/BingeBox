// Shared API base URL for frontend requests
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// Normalize asset URLs so paths like "/assets/..." work on GitHub Pages with base
export const assetUrl = (path) => {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = import.meta.env.BASE_URL || "/";
  const cleanedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanedPath}`;
};

