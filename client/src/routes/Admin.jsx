import { useState, useEffect } from "react";

function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users from JSON server
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:4000/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
      alert("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const res = await fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      // Remove user from state list
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete user.");
    }
  };

  if (loading) {
    return <p className="text-white text-center mt-8">Loading users...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 pt-35">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Users</h1>

      {users.length === 0 ? (
        <p className="text-white/70">No users to show.</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10"
            >
              <div>
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {user.fullName || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p>
                  <span className="font-semibold">Premium:</span>{" "}
                  {user.premium || "no"}
                </p>
                <p>
                  <span className="font-semibold">Admin:</span>{" "}
                  {user.admin || "no"}
                </p>
              </div>
              <button
                onClick={() => handleDelete(user.id)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Admin;
