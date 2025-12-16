function CTA() {
  return (
    <section className="w-full max-w-[1280px] mx-auto my-10 md:my-24 relative bg-brand-surface rounded-xl overflow-hidden border border-brand-border px-6 md:px-16 py-10 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-24">
      <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
      <div className="flex-1 flex flex-col gap-2.5 md:text-left">
        <h2 className="font-bold text-absolutewhite text-2xl md:text-[28px]">
          Start your free trial today!
        </h2>
        <p className="text-grey-60 text-sm">
          This is a clear and concise call to action that encourages users to
          sign up for a free trial of BingeBox.
        </p>
      </div>
      <a
        href="#"
        className="flex items-center justify-center px-5 py-3.5 bg-brand-primary rounded-lg"
      >
        <span className="font-semibold text-absolutewhite text-sm">
          Start a Free Trail
        </span>
      </a>
    </section>
  );
}

export default CTA;
