function MovieReviews({ reviews }) {
  return (
    <article className="flex flex-col items-center justify-center gap-8 p-6 md:p-10 w-full bg-brand-surface rounded-lg border border-brand-border">
      <div className="flex items-center gap-3.5 w-full">
        <h2 className="flex-1 text-grey-60">Reviews</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-[30px] bg-neutral-dark rounded-xl border border-brand-border"
          >
            <div className="flex items-center gap-10 w-full">
              <div className="flex-1">
                <h3 className="text-absolutewhite text-lg">
                  {review.reviewer}
                </h3>
                <p className="text-grey-60">{review.country}</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-brand-background rounded-[51px] border border-brand-border">
                <div className="flex gap-px">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-[13px] h-[13px] ${
                        i <= review.rating ? "bg-brand-primary" : "bg-grey-60"
                      }`}
                    ></div>
                  ))}
                </div>
                <span className="text-grey-60 text-sm">{review.rating}</span>
              </div>
            </div>
            <p className="text-grey-60">{review.text}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default MovieReviews;
