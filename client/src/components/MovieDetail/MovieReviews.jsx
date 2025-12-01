function MovieReviews() {
  const reviews = [
    {
      name: "Sarah",
      location: "From Egypt",
      rating: 4.5,
      filledStars: 5,
      text: "A masterful psychological thriller — Karim Abdel Aziz delivers one of his best performances, blending fear and empathy. The visuals and soundtrack make the movie deeply immersive.",
    },
    {
      name: "Ahmed",
      location: "From Egypt",
      rating: 5,
      filledStars: 4,
      text: 'Dark, mysterious, and unforgettable. "El Feel El Azrak" combines strong storytelling with deep symbolism about human psychology and the unseen world. A must-watch for thriller fans.',
    },
  ];

  return (
    <article className="flex flex-col items-center justify-center gap-8 p-6 md:p-10 w-full bg-brand-surface rounded-lg border border-brand-border">
      <div className="flex items-center gap-3.5 w-full">
        <h2 className="flex-1 text-grey-60">Reviews</h2>
        <button className="flex gap-1 p-3 bg-brand-background rounded-md border border-brand-border items-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="2"
              d="M12 5v14M5 12h14"
            />
          </svg>
          <span className="text-absolutewhite text-sm">Add Your Review</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-[30px] bg-neutral-dark rounded-xl border border-brand-border"
          >
            <div className="flex items-center gap-10 w-full">
              <div className="flex-1">
                <h3 className="text-absolutewhite text-lg">{review.name}</h3>
                <p className="text-grey-60">{review.location}</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-brand-background rounded-[51px] border border-brand-border">
                <div className="flex gap-px">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`w-[13px] h-[13px] ${
                        i <= review.filledStars
                          ? "bg-brand-primary"
                          : "bg-grey-60"
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
      <div className="flex items-center gap-2.5">
        <button className="w-14 h-14 rounded-full bg-brand-background border border-brand-border"></button>
        <div className="flex gap-1">
          <span className="block w-[23px] h-[4px] bg-brand-primary rounded-[100px]"></span>
          <span className="block w-[16px] h-[4px] bg-brand-border rounded-[100px]"></span>
          <span className="block w-[16px] h-[4px] bg-brand-border rounded-[100px]"></span>
        </div>
        <button className="w-14 h-14 rounded-full bg-brand-background border border-brand-border"></button>
      </div>
    </article>
  );
}

export default MovieReviews;

