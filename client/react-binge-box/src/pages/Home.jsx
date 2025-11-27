import Header from '../components/Header';
import Footer from '../components/Footer';
import spidermanHero from '../assets/home/spiderman-hero.png';
import spidermanLogo from '../assets/home/spiderman-logo.png';

function Home() {
  return (
    <div className="bg-[#0b132b] text-white font-['Inter',sans-serif] overflow-x-hidden min-h-screen">
      <Header />
      
      <section
        id="hero"
        className="relative w-full min-h-[70vh] min-[420px]:min-h-[80vh] md:min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-24"
        style={{ backgroundImage: `url(${spidermanHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-transparent to-transparent"></div>

        <div className="relative z-20 w-[436px] max-w-[90%] flex flex-col items-center gap-4 mt-12">
          <img
            src={spidermanLogo}
            alt="Hero Logo"
            className="w-[300px] sm:w-[340px] md:w-[357px] mb-3"
          />

          <div className="flex items-center justify-center gap-3 flex-wrap px-4">
            <div className="px-3 py-1.5 rounded-full border border-white/50 backdrop-blur-md text-base text-white/80">
              CBFC:U/A
            </div>
            <span className="text-base md:text-xl text-white/80">Action</span>
            <span className="text-base md:text-xl text-white/80">•</span>
            <span className="text-base md:text-xl text-white/80">Adventure</span>
            <span className="text-base md:text-xl text-white/80">•</span>
            <span className="text-base md:text-xl text-white/80">2h 28m</span>
          </div>

          <p className="text-sm md:text-base text-white/80 text-center px-4">
            When a spell goes wrong, dangerous foes from other worlds start to
            appear, forcing Peter to discover what it truly means to be
            Spider-Man.
          </p>

          <div className="flex gap-3.5 mt-2 flex-col sm:flex-row w-full sm:w-auto px-4">
            <button
              type="button"
              className="w-full sm:w-[206px] h-[50px] rounded-full border border-white/20 bg-white/90 text-black font-medium backdrop-blur-sm hover:scale-105 transition"
            >
              Watch Now
            </button>
            <button
              type="button"
              className="w-full sm:w-[206px] h-[50px] rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 hover:shadow-[0_0_12px_rgba(255,255,255,0.12)] transition"
            >
              More Info
            </button>
          </div>
        </div>
      </section>

      <main role="main" className="relative z-10">
        <section aria-labelledby="trending-heading" className="w-full px-4 md:px-[47px] py-8 mt-8">
          <h2 id="trending-heading" className="font-medium text-white text-[28px] mb-6 -translate-y-4">
            Latest &amp; Trending
          </h2>

          <div className="flex items-end gap-2.5 overflow-x-auto overflow-y-clip -translate-y-4 pb-2">
            <div className="relative shrink-0 w-[220px] sm:w-[240px] md:w-[281px] h-[298px] cursor-pointer transition-transform hover:scale-105">
              <div className="absolute left-0 top-0 w-[250px] h-[298px] text-center font-[1000] text-[250px] leading-[298px] backdrop-blur-xl text-white/90">
                1
              </div>
              <img
                className="absolute top-[82px] left-[129px] w-[166px] h-[206px] object-cover"
                alt="Trending item 1"
                src="https://c.animaapp.com/mheyiw4rvyrlVB/img/rectangle-4-2.svg"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="top-searches-heading" className="px-4 md:px-[50px] py-[60px]">
          <div className="flex items-center justify-between mb-6">
            <h2 id="top-searches-heading" className="text-[28px] font-semibold mb-6 text-white">Top Searches</h2>
            <button
              type="button"
              aria-label="View more top searches"
              className="w-[120px] h-[30px] rounded-full border border-white/20 bg-white/20 backdrop-blur-md flex items-center justify-center gap-1.5 text-white text-base cursor-pointer transition duration-300 hover:bg-white/30"
            >
              <span>View More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 11"
                className="w-[6px] h-[11px]"
                aria-hidden="true"
              >
                <path
                  d="M1 1L5 5.5L1 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex md:grid overflow-x-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 pb-2">
            <a
              href="#"
              aria-label="View movie details"
              className="shrink-0 w-[220px] sm:w-[260px] md:w-auto rounded-xl overflow-hidden bg-white/10 hover:scale-105 transition-all"
            >
              <img
                src={spidermanHero}
                alt="Movie poster"
                className="w-full h-[298px] object-cover"
              />
            </a>
          </div>
        </section>

        <section aria-labelledby="continue-watching-heading" className="px-4 md:px-[50px] py-[60px]">
          <h2 id="continue-watching-heading" className="text-[28px] font-semibold mb-6 text-white">Continue Watching</h2>
          <div className="flex md:grid overflow-x-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 pb-2">
            <a
              href="#"
              aria-label="Continue watching episode 4 of 10"
              className="relative shrink-0 w-[220px] sm:w-[260px] md:w-auto rounded-xl overflow-hidden bg-white/10 hover:scale-105 transition-all"
            >
              <img
                src={spidermanHero}
                alt="Continue watching: Episode 4"
                className="w-full h-[298px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 via-transparent">
                <div className="w-full h-1 bg-white/20 rounded" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="Watch progress">
                  <div className="h-1 bg-red-500 rounded" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-white/80 mt-2">Episode 4 of 10</p>
              </div>
            </a>
          </div>
        </section>

        <section aria-labelledby="categories-heading" className="px-4 md:px-[50px] py-[60px]">
          <h2 id="categories-heading" className="text-[28px] font-semibold mb-6 text-white">Featured Categories</h2>
          <div className="flex md:grid overflow-x-auto md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-2">
            <a
              href="#"
              aria-label="Browse Action category"
              className="relative shrink-0 w-[220px] sm:w-[260px] md:w-auto rounded-2xl overflow-hidden hover:scale-105 transition-all"
            >
              <img
                src={spidermanHero}
                alt="Action category"
                className="w-full h-[298px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">Action</h3>
              </div>
            </a>
            <a
              href="#"
              aria-label="Browse Drama category"
              className="relative shrink-0 w-[220px] sm:w-[260px] md:w-auto rounded-2xl overflow-hidden hover:scale-105 transition-all"
            >
              <img
                src="https://via.placeholder.com/600x350"
                alt="Drama category"
                className="w-full h-[298px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">Drama</h3>
              </div>
            </a>
            <a
              href="#"
              aria-label="Browse Comedy category"
              className="relative shrink-0 w-[220px] sm:w-[260px] md:w-auto rounded-2xl overflow-hidden hover:scale-105 transition-all"
            >
              <img
                src="https://via.placeholder.com/600x350"
                alt="Comedy category"
                className="w-full h-[298px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">Comedy</h3>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

