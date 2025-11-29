// Account deletion + clear history actions

export default function DangerZone() {
  return (
    <section className="bg-white/5 border border-brand-primary/50 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-brand-primary">
        Danger Zone
      </h2>

      <div className="space-y-4">
        {/* Clear Watch History */}
        <div className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg">
          <div>
            <p className="font-semibold">Clear Watch History</p>
            <p className="text-sm text-gray-400 mt-1">
              Remove all your viewing history
            </p>
          </div>

          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition font-semibold border border-white/10">
            Clear History
          </button>
        </div>

        {/* Delete Account */}
        <div className="flex items-center justify-between p-4 bg-neutral-900 border border-brand-primary/50 rounded-lg">
          <div>
            <p className="font-semibold text-brand-primary">Delete Account</p>
            <p className="text-sm text-gray-400 mt-1">
              Permanently delete your account and all data
            </p>
          </div>

          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold transition">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}
