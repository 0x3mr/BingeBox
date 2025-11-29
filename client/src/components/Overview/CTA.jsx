// CTA Component: Displays a prominent Call-to-Action banner encouraging a free trial.
function CTA() {
  return (
    <section className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 mb-20">
      <div className="bg-brand-primary/30 backdrop-blur-xl border border-brand-primary/50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center md:text-left shadow-2xl shadow-brand-primary/20">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Start your free trial today! 🚀
          </h2>
          <p className="text-white/80 max-w-lg">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of BingeBox.
          </p>
        </div>
        <a
          href="#"
          className="mt-6 md:mt-0 px-8 py-3 bg-brand-primary rounded-full font-bold text-black shadow-lg shadow-brand-primary/50 hover:bg-sky-500 transition whitespace-nowrap"
        >
          Start a Free Trial
        </a>
      </div>
    </section>
  );
}

export default CTA;
