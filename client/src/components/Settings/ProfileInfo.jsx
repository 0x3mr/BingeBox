// Profile information section (avatar, personal details, bio)

export default function ProfileInfo() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Profile Information</h2>

      <div className="flex items-start gap-6 mb-8">
        <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center text-3xl font-bold">
          YI
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">Youssef Islam</h3>
          <p className="text-gray-400 mb-2">
            s-youssef.kamel@zewailcity.edu.eg
          </p>

          <span className="inline-block px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm rounded-full border border-brand-primary/50">
            Premium Member
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          ["First Name", "Youssef"],
          ["Last Name", "Islam"],
          ["Email Address", "s-youssef.kamel@zewailcity.edu.eg"],
          ["Phone Number", "+20 101770782"],
        ].map(([label, value]) => (
          <div key={label}>
            <label className="block text-sm font-semibold mb-2">{label}</label>
            <input
              type="text"
              defaultValue={value}
              className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
            />
          </div>
        ))}

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">Bio</label>
          <textarea
            rows="4"
            defaultValue="Movie enthusiast and binge-watcher. Love sci-fi and thriller genres!"
            className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition resize-none"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition font-semibold border border-white/10">
          Cancel
        </button>

        <button className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary rounded-lg font-bold transition">
          Save Changes
        </button>
      </div>
    </section>
  );
}
