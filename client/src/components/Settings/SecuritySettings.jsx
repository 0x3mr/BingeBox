export default function SecuritySettings() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Security Settings</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg">
          <div>
            <p className="font-semibold">Change Password</p>
            <p className="text-sm text-gray-400 mt-1">
              Update your account password regularly
            </p>
          </div>
          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold transition">
            Change
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg">
          <div>
            <p className="font-semibold">Two-Factor Authentication</p>
            <p className="text-sm text-gray-400 mt-1">
              Enhance account security with 2FA
            </p>
          </div>
          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold transition">
            Enable
          </button>
        </div>
      </div>
    </section>
  );
}
