// Connected devices list and remove actions

export default function ConnectedDevices() {
  return (
    <section className="bg-brand-surface border border-brand-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Connected Devices</h2>

      <div className="space-y-4">
        {/* Active Device */}
        <div className="flex items-center justify-between p-4 bg-brand-background border border-brand-primary/50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center border border-brand-primary/50"></div>
            <div>
              <p className="font-semibold text-absolutewhite">iPhone 13 Pro</p>
              <p className="text-sm text-textgray">
                Last active: 2 minutes ago
              </p>
            </div>
          </div>

          <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm rounded-full border border-brand-primary/50">
            Current Device
          </span>
        </div>

        {/* Other Devices */}
        <div className="flex items-center justify-between p-4 bg-brand-background border border-brand-border rounded-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center border border-brand-border"></div>
            <div>
              <p className="font-semibold text-absolutewhite">MacBook Pro</p>
              <p className="text-sm text-textgray">Last active: 1 hour ago</p>
            </div>
          </div>

          <button className="px-4 py-2 bg-brand-surface hover:bg-brand-background rounded-lg transition font-semibold border border-brand-border">
            Remove
          </button>
        </div>
      </div>
    </section>
  );
}
