import Header from "$/components/Navigation/Header";
import Footer from "$/components/Navigation/Footer";

function Subscription() {
  return (
    <div className="m-0 h-full font-['Manrope'] bg-[#0B0E14] text-white min-w-[390px]">
      <div className="w-full min-h-screen flex flex-col">
        <div className="absolute inset-x-0 top-0 h-[112px] bg-black rounded-[1361px] filter blur-[100px] z-10"></div>

        <Header />

        <section className="w-full max-w-[1280px] pt-[100px] mx-auto px-6 md:px-8 mt-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose the plan that's right for you
          </h1>
          <p className="text-grey-60 max-w-[640px] mx-auto">
            Simple plans, flexible options. BingeBox brings your favorite movies
            and shows together, all in one place.
          </p>
        </section>

        <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 mt-14 grid gap-6 md:grid-cols-3">
          <article className="bg-[#121621] rounded-xl border border-brand-border p-8 flex flex-col gap-6 hover:border-brand-primary transition">
            <div>
              <h2 className="font-bold text-lg text-white mb-1">Basic Plan</h2>
              <p className="text-grey-60 text-sm">
                Access to essential movies and shows with great quality
                streaming.
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

          <article className="bg-[#121621] rounded-xl border border-brand-border p-8 flex flex-col gap-6 hover:border-brand-primary transition">
            <div>
              <h2 className="font-bold text-lg text-white mb-1">
                Premium Plan
              </h2>
              <p className="text-grey-60 text-sm">
                4K Ultra HD streaming, exclusive releases, and offline
                downloads.
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

        <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 mt-24">
          <div className="flex flex-col items-start mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Compare our plans and find the right one for you
            </h2>
            <p className="text-grey-60 max-w-[700px]">
              BingeBox offers three different plans to fit your needs: Basic,
              Standard, and Premium. Compare their features and pick what fits
              your viewing habits best.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[768px] w-full rounded-xl border border-brand-border overflow-hidden">
              <div className="flex bg-[#11141C] border-b border-brand-border">
                <div className="flex-1 p-4 md:p-6 font-semibold text-white">
                  Features
                </div>
                <div className="flex-1 p-4 md:p-6 border-l border-brand-border text-center font-semibold text-white">
                  Basic
                </div>
                <div className="flex-1 p-4 md:p-6 border-l border-brand-border text-center font-semibold text-white flex items-center justify-center gap-2">
                  Standard
                  <span className="bg-brand-primary/10 text-brand-primary text-xs px-2 py-0.5 rounded-md">
                    Popular
                  </span>
                </div>
                <div className="flex-1 p-4 md:p-6 border-l border-brand-border text-center font-semibold text-white">
                  Premium
                </div>
              </div>

              {[
                {
                  feature: "Price",
                  basic: "$9.99/Month",
                  standard: "$12.99/Month",
                  premium: "$14.99/Month",
                },
                {
                  feature: "Content",
                  basic:
                    "Access to a wide selection of movies and shows, including some new releases.",
                  standard:
                    "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
                  premium:
                    "Access to the widest selection of movies and shows, including all new releases and offline viewing.",
                },
                {
                  feature: "Devices",
                  basic: "Watch on one device",
                  standard: "Watch on two devices",
                  premium: "Watch on four devices",
                },
                {
                  feature: "Free Trial",
                  basic: "7 Days",
                  standard: "7 Days",
                  premium: "7 Days",
                },
                {
                  feature: "Cancel Anytime",
                  basic: "Yes",
                  standard: "Yes",
                  premium: "Yes",
                },
                {
                  feature: "HDR",
                  basic: "No",
                  standard: "Yes",
                  premium: "Yes",
                },
                {
                  feature: "Dolby Atmos",
                  basic: "No",
                  standard: "Yes",
                  premium: "Yes",
                },
                {
                  feature: "Ad-Free",
                  basic: "No",
                  standard: "Yes",
                  premium: "Yes",
                },
                {
                  feature: "Offline Viewing",
                  basic: "No",
                  standard: "Yes, for select titles.",
                  premium: "Yes, for all titles.",
                },
                {
                  feature: "Family Sharing",
                  basic: "No",
                  standard: "Yes, up to 5 family members.",
                  premium: "Yes, up to 6 family members.",
                },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className={`flex ${idx === 9 ? "border-t" : "border-b"} border-brand-border`}
                >
                  <div className="flex-1 p-4 text-grey-60">{row.feature}</div>
                  <div className="flex-1 p-4 border-l border-brand-border text-grey-60 text-sm">
                    {row.basic}
                  </div>
                  <div className="flex-1 p-4 border-l border-brand-border text-grey-60 text-sm">
                    {row.standard}
                  </div>
                  <div className="flex-1 p-4 border-l border-brand-border text-grey-60 text-sm">
                    {row.premium}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1280px] mx-auto mb-[50px] px-6 md:px-8 mt-20 overflow-hidden rounded-xl border border-brand-border bg-[#10131A] py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-linear-to-r from-brand-primary/10 to-transparent pointer-events-none"></div>
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

        <Footer />
      </div>
    </div>
  );
}

export default Subscription;
