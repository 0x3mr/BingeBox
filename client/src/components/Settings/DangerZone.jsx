// Account deletion + clear history actions

export default function DangerZone() {
  return (
    <section className="bg-brand-surface border border-brand-primary/50 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-brand-primary">
        Danger Zone
      </h2>

      <div className="space-y-4">
        {/* Clear Watch History */}
        <div className="flex items-center justify-between p-4 bg-brand-background border border-brand-border rounded-lg">
          <div>
            <p className="font-semibold text-absolutewhite">Clear Watch History</p>
            <p className="text-sm text-textgray mt-1">
              Remove all your viewing history
            </p>
          </div>

          <button className="px-4 py-2 bg-brand-surface hover:bg-brand-background rounded-lg transition font-semibold border border-brand-border">
            Clear History
          </button>
        </div>

        {/* Delete Account */}
        <div className="flex items-center justify-between p-4 bg-brand-background border border-brand-primary/50 rounded-lg">
          <div>
            <p className="font-semibold text-brand-primary">Delete Account</p>
            <p className="text-sm text-textgray mt-1">
              Permanently delete your account and all data
            </p>
          </div>

          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-absolutewhite rounded-lg font-bold transition">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}
