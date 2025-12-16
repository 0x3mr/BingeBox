function SeriesReviews({ reviews }) {
  return (
    <section className="mt-8 sm:mt-10 md:mt-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Reviews</h2>
        <button className="border border-brand-border bg-brand-surface px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-brand-background transition-colors text-sm sm:text-base w-full sm:w-auto">
          + Add Your Review
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {reviews &&
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-brand-surface border border-brand-border p-4 sm:p-5 md:p-6 rounded-xl hover:bg-brand-background hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition cursor-pointer"
            >
              <div className="flex justify-between mb-3 sm:mb-4">
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {review.reviewer}
                  </h3>
                  <p className="text-grey-60 text-xs sm:text-sm">
                    {review.country}
                  </p>
                </div>
                <div className="text-xs sm:text-sm flex items-center gap-2">
                  <span className="flex items-center gap-0.5 text-brand-primary">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </span>
                  <span className="text-grey-60">{review.rating}</span>
                </div>
              </div>
              <p className="text-grey-60 leading-relaxed text-sm sm:text-base">
                {review.text}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default SeriesReviews;
