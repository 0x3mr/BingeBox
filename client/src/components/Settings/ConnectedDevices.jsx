// Connected devices list and remove actions

export default function ConnectedDevices() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Connected Devices</h2>

      <div className="space-y-4">
        {/* Active Device */}
        <div className="flex items-center justify-between p-4 bg-neutral-900 border border-brand-primary/50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center border border-brand-primary/50"></div>
            <div>
              <p className="font-semibold">iPhone 13 Pro</p>
              <p className="text-sm text-gray-400">
                Last active: 2 minutes ago
              </p>
            </div>
          </div>

          <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm rounded-full border border-brand-primary/50">
            Current Device
          </span>
        </div>

        {/* Other Devices */}
        <div className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center border border-white/10"></div>
            <div>
              <p className="font-semibold">MacBook Pro</p>
              <p className="text-sm text-gray-400">Last active: 1 hour ago</p>
            </div>
          </div>

          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition font-semibold border border-white/10">
            Remove
          </button>
        </div>
      </div>
    </section>
  );
}
