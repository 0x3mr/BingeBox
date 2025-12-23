import { useSelector } from "react-redux";

export default function BillingSettings() {
  const { plan, status } = useSelector((state) => state.subscription);

  return (
    <section className="bg-brand-surface border border-brand-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Billing</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-brand-background border border-brand-border rounded-lg">
          <div>
            <p className="font-semibold text-absolutewhite">Payment Method</p>
            <p className="text-sm text-textgray mt-1">
              Update your credit card or PayPal
            </p>
          </div>
          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-absolutewhite rounded-lg font-bold transition">
            Update
          </button>
        </div>

        <div className="flex items-center justify-between p-4 bg-brand-background border border-brand-border rounded-lg">
          <div>
            <p className="font-semibold text-absolutewhite">Subscription Plan</p>
            <p className="text-sm text-textgray mt-1">
              {plan
                ? `Current: ${plan.name} (${status})`
                : "View or change your current plan"}
            </p>
          </div>
          <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-absolutewhite rounded-lg font-bold transition">
            Manage
          </button>
        </div>
      </div>
    </section>
  );
}
