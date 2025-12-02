function MovieSidebar() {
  return (
    <aside className="w-full md:w-[416px] flex flex-col gap-6 p-6 md:p-10 bg-brand-surface rounded-lg border border-brand-border">
      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex items-center gap-1 w-full">
          <div className="w-5 h-5 text-grey-60">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M7 3v4m10-4v4M5 7h14v12H5z"
              />
            </svg>
          </div>
          <h3 className="flex-1 text-grey-60">Released Year</h3>
        </div>
        <p className="font-semibold text-absolutewhite">2014</p>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex items-center gap-1 w-full">
          <div className="w-5 h-5 text-grey-60">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M12 3l2.5 7.5H22l-6 4.5 2.5 7.5L12 18l-6.5 4.5L8 15 2 10.5h7.5z"
              />
            </svg>
          </div>
          <h3 className="flex-1 text-grey-60">Available Languages</h3>
        </div>
        <div className="flex flex-wrap gap-2.5 w-full">
          <span className="flex items-center px-3 py-1.5 bg-brand-background rounded-md border border-brand-border text-sm">
            Arabic
          </span>
          <span className="flex items-center px-3 py-1.5 bg-brand-background rounded-md border border-brand-border text-sm">
            English (Subtitles)
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex items-center gap-1 w-full">
          <div className="w-5 h-5 text-grey-60">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          </div>
          <h3 className="flex-1 text-grey-60">Ratings</h3>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex-1 flex flex-col gap-1 p-3.5 bg-brand-background rounded-lg border border-brand-border">
            <h4 className="font-semibold text-absolutewhite">IMDb</h4>
            <div className="flex items-center gap-1">
              <div className="flex gap-px">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-[13px] h-[13px] bg-brand-primary"
                  ></div>
                ))}
              </div>
              <span className="text-absolutewhite text-sm">8.1</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1 p-3.5 bg-brand-background rounded-lg border border-brand-border">
            <h4 className="font-semibold text-absolutewhite">BingeBox</h4>
            <div className="flex items-center gap-1">
              <div className="flex gap-px">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-[13px] h-[13px] bg-brand-primary"
                  ></div>
                ))}
              </div>
              <span className="text-absolutewhite text-sm">4</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        <div className="flex items-center gap-1 w-full">
          <div className="w-5 h-5 text-grey-60">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <h3 className="flex-1 text-grey-60">Gernes</h3>
        </div>
        <div className="flex gap-2.5">
          <span className="px-3 py-1.5 bg-brand-background rounded-md border border-brand-border text-sm">
            Thriller
          </span>
          <span className="px-3 py-1.5 bg-brand-background rounded-md border border-brand-border text-sm">
            Psychological
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="text-grey-60">Director</h3>
        <div className="flex items-center gap-2 p-3 w-full bg-brand-background rounded-lg border border-brand-border">
          <div className="w-[47px] h-[50px] bg-neutral-dark rounded"></div>
          <div className="flex-1">
            <h4 className="text-absolutewhite">Marwan Hamed</h4>
            <p className="text-grey-60 text-sm">From Egypt</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="text-grey-60">Music</h3>
        <div className="flex items-center gap-2 p-3 w-full bg-brand-background rounded-lg border border-brand-border">
          <div className="w-[47px] h-[50px] bg-neutral-dark rounded"></div>
          <div className="flex-1">
            <h4 className="text-absolutewhite">Hesham Nazih</h4>
            <p className="text-grey-60 text-sm">From Egypt</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default MovieSidebar;
