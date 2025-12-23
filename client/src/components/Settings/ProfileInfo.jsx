import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProfile } from "../../store/slices/profileSlice";
import { loginSuccess } from "../../store/slices/authSlice";
import { API_URL } from "../../api";

export default function ProfileInfo() {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.profile.profile);
  const currentUser = profile || authUser;
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bio: "",
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setFormData({
        fullName: currentUser.fullName || "",
        email: currentUser.email || "",
        bio: currentUser.bio || "",
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!currentUser) return;

    const updatedUser = { ...currentUser, ...formData };
    setIsSaving(true);

    try {
      // Update JSON server
      const res = await fetch(`${API_URL}/users/${currentUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (!res.ok) throw new Error("Failed to update user on server.");

      // Update localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));
      dispatch(setProfile(updatedUser));
      // also keep auth.user in sync so Header and other places update
      dispatch(loginSuccess({ user: updatedUser, token: null }));
      alert("Changes saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!currentUser) return <p className="text-textgray">No user data available.</p>;

  const initials = currentUser.fullName
    ? currentUser.fullName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "NA";

  return (
    <section className="bg-brand-surface border border-brand-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Profile Information</h2>

      <div className="flex items-start gap-6 mb-8">
        <div className="w-24 h-24 bg-brand-background rounded-full flex items-center justify-center text-3xl font-bold text-absolutewhite">
          {initials}
        </div>

        <div className="flex-1">
          {formData.fullName && <h3 className="text-xl font-semibold mb-1">{formData.fullName}</h3>}
        {formData.email && <p className="text-textgray mb-2">{formData.email}</p>}
        {currentUser.premium === "yes" && (
            <span className="inline-block px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm rounded-full border border-brand-primary/50">
              Premium Member
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formData.fullName && (
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-brand-background border border-brand-border rounded-lg px-4 py-3 text-absolutewhite focus:outline-none focus:border-brand-primary transition"
            />
          </div>
        )}

        {formData.email && (
          <div>
            <label className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-brand-background border border-brand-border rounded-lg px-4 py-3 text-absolutewhite focus:outline-none focus:border-brand-primary transition"
            />
          </div>
        )}

        {formData.bio && (
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">Bio</label>
            <textarea
              rows="4"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full bg-brand-background border border-brand-border rounded-lg px-4 py-3 text-absolutewhite focus:outline-none focus:border-brand-primary transition resize-none"
            ></textarea>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="px-6 py-3 bg-brand-background hover:bg-brand-surface rounded-lg transition font-semibold border border-brand-border">
          Cancel
        </button>

        <button
          onClick={handleSave}
          disabled={isSaving}
          className={`px-6 py-3 rounded-lg font-bold transition ${
            isSaving ? "bg-textgray cursor-not-allowed" : "bg-brand-primary hover:bg-brand-secondary"
          }`}
        >
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </section>
  );
}
