// Grid of three plan cards (Basic, Standard, Premium)
function PricingCards() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 mt-14 grid gap-6 md:grid-cols-3">
      {/* Basic Plan Card */}
      <article className="bg-[#121621] rounded-xl border border-brand-border p-8 flex flex-col gap-6 hover:border-brand-primary transition">
        <div>
          <h2 className="font-bold text-lg text-white mb-1">Basic Plan</h2>
          <p className="text-grey-60 text-sm">
            Access to essential movies and shows with great quality streaming.
          </p>
        </div>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-semibold">$9.99</span>
          <span className="text-grey-60">/month</span>
        </div>
        <button className="mt-auto py-3 bg-brand-primary text-black font-semibold rounded-md hover:bg-[#81D4FA] transition">
          Choose Plan
        </button>
      </article>

      {/* Standard Plan Card (Popular) */}
      <article className="bg-[#151924] rounded-xl border border-brand-border p-8 flex flex-col gap-6 shadow-[0_0_15px_rgba(79,195,247,0.08)] hover:shadow-[0_0_20px_rgba(79,195,247,0.15)] hover:border-brand-primary transition">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg text-white">Standard Plan</h2>
          <span className="bg-brand-primary/10 text-brand-primary text-xs px-2 py-1 rounded-full">
            Popular
          </span>
        </div>
        <p className="text-grey-60 text-sm">
          Enjoy HD streaming on multiple devices and early access to new
          releases.
        </p>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-semibold">$12.99</span>
          <span className="text-grey-60">/month</span>
        </div>
        <button className="mt-auto py-3 bg-brand-primary text-black font-semibold rounded-md hover:bg-[#81D4FA] transition">
          Choose Plan
        </button>
      </article>

      {/* Premium Plan Card */}
      <article className="bg-[#121621] rounded-xl border border-brand-border p-8 flex flex-col gap-6 hover:border-brand-primary transition">
        <div>
          <h2 className="font-bold text-lg text-white mb-1">Premium Plan</h2>
          <p className="text-grey-60 text-sm">
            4K Ultra HD streaming, exclusive releases, and offline downloads.
          </p>
        </div>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-semibold">$14.99</span>
          <span className="text-grey-60">/month</span>
        </div>
        <button className="mt-auto py-3 bg-brand-primary text-black font-semibold rounded-md hover:bg-[#81D4FA] transition">
          Choose Plan
        </button>
      </article>
    </section>
  );
}

export default PricingCards;
