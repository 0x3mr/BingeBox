// Bottom banner/call-to-action section
function CallToAction() {
  return (
    <section className="w-full max-w-[1280px] mx-auto mb-[50px] px-6 md:px-8 mt-20 overflow-hidden rounded-xl border border-brand-border bg-[#10131A] py-14 flex flex-col md:flex-row items-center justify-between gap-8 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-t from-brand-primary/10 to-transparent pointer-events-none"></div>
      <div className="relative z-10 md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Start your free trial today!
        </h2>
        <p className="text-grey-60 max-w-[500px]">
          No commitments. Cancel anytime. Discover your next favorite series
          with BingeBox.
        </p>
      </div>
      <button className="z-10 py-3 px-6 bg-brand-primary text-black rounded-md font-semibold hover:bg-[#81D4FA] transition">
        Start Free Trial
      </button>
    </section>
  );
}

export default CallToAction;
