export default function BillingSettings() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Billing</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg">
          <div>
            <p className="font-semibold">Payment Method</p>
            <p className="text-sm text-gray-400 mt-1">
              Update your credit card or PayPal
            </p>
          </div>
          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold transition">
            Update
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg">
          <div>
            <p className="font-semibold">Subscription Plan</p>
            <p className="text-sm text-gray-400 mt-1">
              View or change your current plan
            </p>
          </div>
          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold transition">
            Manage
          </button>
        </div>
      </div>
    </section>
  );
}
