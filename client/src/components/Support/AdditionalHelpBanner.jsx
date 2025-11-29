// Need Additional Help Banner Section
function AdditionalHelpBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
      <div className="bg-brand-surface/40 border border-brand-border/50 backdrop-blur-md rounded-2xl p-10 md:p-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Need Additional Help?
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Contact our support team for personalized assistance anytime,
          anywhere.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:support@bingebox.com"
            className="bg-brand-primary hover:bg-[#3A99D8] text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Email Support
          </a>
          <a
            href="tel:+1234567890"
            className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default AdditionalHelpBanner;
