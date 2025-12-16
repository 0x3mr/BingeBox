export default function SecuritySettings() {
  return (
    <section className="bg-brand-surface border border-brand-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Security Settings</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-brand-background border border-brand-border rounded-lg">
          <div>
            <p className="font-semibold text-absolutewhite">Change Password</p>
            <p className="text-sm text-textgray mt-1">
              Update your account password regularly
            </p>
          </div>
          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-absolutewhite rounded-lg font-bold transition">
            Change
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-brand-background border border-brand-border rounded-lg">
          <div>
            <p className="font-semibold text-absolutewhite">Two-Factor Authentication</p>
            <p className="text-sm text-textgray mt-1">
              Enhance account security with 2FA
            </p>
          </div>
          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-absolutewhite rounded-lg font-bold transition">
            Enable
          </button>
        </div>
      </div>
    </section>
  );
}
