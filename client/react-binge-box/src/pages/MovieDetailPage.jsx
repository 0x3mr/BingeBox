import Header from '../components/Header';
import Footer from '../components/Footer';
import movieHero from '../assets/movie/61433093511.png';
import cast1 from '../assets/movie/640x-d40dc2f30654100e8491d77ad64db513237c6a07b21d3ce6e4996e8b44c396ea.jpg';
import cast2 from '../assets/movie/Nelly-1-jpg.webp';
import cast3 from '../assets/movie/1703597867.webp';
import cast4 from '../assets/movie/images.webp';

function MovieDetailPage() {
  return (
    <div className="bg-brand-background text-absolutewhite font-inter min-w-[390px]">
      <div className="w-full min-h-screen relative pt-[130px]">
        <div className="absolute inset-x-0 top-0 h-[112px] bg-brand-surface rounded-[1361px] filter blur-[100px] z-10"></div>

        <Header />

        <section
          className="w-full max-w-[1280px] h-[468px] md:h-[709px] mx-auto mt-[20px] rounded-xl overflow-hidden relative flex flex-col items-center justify-end gap-5 md:gap-6 pt-6 md:pt-10 pb-4 px-6 md:px-10 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 100%), url(${movieHero})`,
          }}
        >
          <div
            className="absolute inset-0 p-px rounded-xl"
            style={{
              background: 'linear-gradient(180deg, rgba(51, 65, 85, 1) 0%, rgba(51, 65, 85, 0) 100%)',
            }}
          ></div>
          <header className="items-center gap-1 md:gap-0.5 px-4 md:px-[100px] w-full flex flex-col">
            <h1 className="font-bold text-absolutewhite text-2xl md:text-3xl text-center">
              The Blue Elephant
            </h1>
            <p className="text-grey-60 text-center text-sm">
              Dr. Yehia, a psychiatrist at El-Abbasiya Hospital, returns to work
              after a long absence only to find his first case involves a close
              friend accused of murder. As Yehia investigates, he uncovers a world
              of hallucinations, mystery, and dark secrets that challenge his mind
              and beliefs.
            </p>
          </header>
          <div className="inline-flex items-center gap-3 md:gap-5 relative z-1">
            <button
              type="button"
              className="box-border gap-2 md:gap-2.5 px-5 py-3.5 bg-brand-primary rounded-lg inline-flex items-center cursor-pointer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="font-semibold text-absolutewhite text-sm">Play Now</span>
            </button>
            <div className="flex items-center gap-2">
              <button className="w-12 h-12 rounded-lg bg-black-10 border border-brand-border flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#ffffff"
                    d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-lg bg-black-10 border border-brand-border flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.113 11.323H3.5V5.6l3.02-4.297a1.303 1.303 0 0 1 2.356.93L8.65 3.861h1.99c.87 0 2.611.87 2.611 2.61s-1.75 5.722-3.601 5.722c-2.437 0-4.521-.58-5.536-.87M.75 5.375C.75 4.615 1.366 4 2.125 4v0c.76 0 1.375.616 1.375 1.375v5.75c0 .76-.616 1.375-1.375 1.375v0c-.76 0-1.375-.616-1.375-1.375z"
                  />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-lg bg-black-10 border border-brand-border flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 480 472" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#ffffff"
                    d="M5 237q0 35 26.5 60.5T95 323h43q14 0 21 10l43 66q18 30 57 30h43q18 0 31.5-12.5T347 387V45q0-17-13-29.5T302 3h-43q-39 0-57 30l-43 66q-7 10-21 10H95q-37 0-63.5 25.5T5 195v42zm43-42q0-18 13.5-30.5T95 152h43q36 0 57-30l43-66q7-11 21-11h45v342h-45q-14 0-21-11l-43-66q-16-30-57-30H95q-20 0-33.5-12.5T48 237v-42zm363 85V152q0-21-22-21q-21 0-21 21v128q0 21 21 21q22 0 22-21zm42-213q-21 0-21 21v256q0 21 21 21q22 0 22-21V88q0-21-22-21z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1286px] mx-auto mt-[30px] md:mt-[80px] flex flex-col md:flex-row gap-5 px-4 md:px-6 lg:px-8">
          <div className="flex-1 flex flex-col md:items-end gap-5">
            <article className="flex flex-col gap-2.5 p-10 w-full bg-brand-surface rounded-lg border border-brand-border">
              <h2 className="text-grey-60">Description</h2>
              <p className="text-absolutewhite">
                "The Blue Elephant" follows Dr. Yehia Rashed, who begins treating
                a patient accused of murdering his wife, only to discover
                disturbing connections to his own past. The film mixes
                psychological thriller and supernatural elements, delving into
                mental illness, guilt, and the blurred line between sanity and
                madness.
              </p>
            </article>

            <article className="flex flex-col gap-5 p-6 md:p-10 w-full bg-brand-surface rounded-lg border border-brand-border">
              <div className="flex items-center w-full gap-4 md:gap-8">
                <h2 className="flex-1 font-inter text-white-60">Cast</h2>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-brand-background border border-brand-border"></button>
                  <button className="w-10 h-10 rounded-full bg-brand-background border border-brand-border"></button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2.5 w-full">
                <div className="h-[150px] bg-neutral-dark rounded-md overflow-hidden">
                  <img src={cast1} alt="Cast member" className="w-full h-full object-cover" />
                </div>
                <div className="h-[150px] bg-neutral-dark rounded-md overflow-hidden">
                  <img src={cast2} alt="Cast member" className="w-full h-full object-cover" />
                </div>
                <div className="h-[150px] bg-neutral-dark rounded-md overflow-hidden">
                  <img src={cast3} alt="Cast member" className="w-full h-full object-cover" />
                </div>
                <div className="h-[150px] bg-neutral-dark rounded-md overflow-hidden">
                  <img src={cast4} alt="Cast member" className="w-full h-full object-cover" />
                </div>
              </div>
            </article>

            <article className="flex flex-col items-center justify-center gap-8 p-6 md:p-10 w-full bg-brand-surface rounded-lg border border-brand-border">
              <div className="flex items-center gap-3.5 w-full">
                <h2 className="flex-1 text-grey-60">Reviews</h2>
                <button className="flex gap-1 p-3 bg-brand-background rounded-md border border-brand-border items-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeWidth="2" d="M12 5v14M5 12h14" />
                  </svg>
                  <span className="text-absolutewhite text-sm">Add Your Review</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-4 p-[30px] bg-neutral-dark rounded-xl border border-brand-border">
                  <div className="flex items-center gap-10 w-full">
                    <div className="flex-1">
                      <h3 className="text-absolutewhite text-lg">Sarah</h3>
                      <p className="text-grey-60">From Egypt</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-brand-background rounded-[51px] border border-brand-border">
                      <div className="flex gap-px">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="w-[13px] h-[13px] bg-brand-primary"></div>
                        ))}
                      </div>
                      <span className="text-grey-60 text-sm">4.5</span>
                    </div>
                  </div>
                  <p className="text-grey-60">
                    A masterful psychological thriller — Karim Abdel Aziz delivers
                    one of his best performances, blending fear and empathy. The
                    visuals and soundtrack make the movie deeply immersive.
                  </p>
                </div>
                <div className="flex flex-col gap-4 p-[30px] bg-neutral-dark rounded-xl border border-brand-border">
                  <div className="flex items-center gap-10 w-full">
                    <div className="flex-1">
                      <h3 className="text-absolutewhite text-lg">Ahmed</h3>
                      <p className="text-grey-60">From Egypt</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-brand-background rounded-[51px] border border-brand-border">
                      <div className="flex gap-px">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-[13px] h-[13px] bg-brand-primary"></div>
                        ))}
                        <div className="w-[13px] h-[13px] bg-grey-60"></div>
                      </div>
                      <span className="text-grey-60 text-sm">5</span>
                    </div>
                  </div>
                  <p className="text-grey-60">
                    Dark, mysterious, and unforgettable. "El Feel El Azrak"
                    combines strong storytelling with deep symbolism about human
                    psychology and the unseen world. A must-watch for thriller
                    fans.
                  </p>
                </div>
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
          </div>

          <aside className="w-full md:w-[416px] flex flex-col gap-6 p-6 md:p-10 bg-brand-surface rounded-lg border border-brand-border">
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex items-center gap-1 w-full">
                <div className="w-5 h-5 text-grey-60">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path stroke="currentColor" strokeWidth="2" d="M7 3v4m10-4v4M5 7h14v12H5z" />
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
                    <path stroke="currentColor" strokeWidth="2" d="M12 3l2.5 7.5H22l-6 4.5 2.5 7.5L12 18l-6.5 4.5L8 15 2 10.5h7.5z" />
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
                    <path stroke="currentColor" strokeWidth="2" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
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
                        <div key={i} className="w-[13px] h-[13px] bg-brand-primary"></div>
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
                        <div key={i} className="w-[13px] h-[13px] bg-brand-primary"></div>
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
                    <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
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
        </section>

        <section className="w-full max-w-[1280px] mx-auto my-10 md:my-24 relative bg-neutral-dark rounded-xl overflow-hidden border border-brand-border px-6 md:px-16 py-10 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-24">
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
            <span className="font-semibold text-absolutewhite text-sm">Start a Free Trail</span>
          </a>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default MovieDetailPage;

