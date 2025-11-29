import Header from '../components/Header';
import Footer from '../components/Footer';

function Overview() {
  return (
    <div className="bg-[#0b132b] text-white min-h-screen">
      <div className="absolute inset-x-0 top-0 h-[112px] bg-black rounded-[1361px] filter blur-[100px] z-10"></div>

      <Header />

      <main role="main" className="relative z-10 pb-20 max-w-[1920px] mx-auto">
        <section
          aria-label="Featured movie"
          className="relative h-[60vh] md:h-[80vh] flex items-end mb-16 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?random=100)' }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-background via-transparent to-transparent"></div>

          <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 pb-12 w-full">
            <p className="text-sm font-semibold text-brand-primary mb-2">FEATURED MOVIE</p>
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              Avengers: Endgame
            </h1>
            <p className="max-w-xl text-white/80 text-lg mb-8">
              With the help of remaining allies, the Avengers assemble once more
              in order to undo Thanos's actions and undo the chaos to the
              universe, no matter what consequences may be in store, and no matter
              who they face... Avenge the fallen.
            </p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-6 py-3 bg-brand-primary rounded-full font-bold text-black shadow-lg shadow-brand-primary/50 hover:bg-sky-500 transition">
                WATCH NOW
              </button>
              <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <div className="px-6 md:px-12 lg:px-24">
          <section className="mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-1/2 hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search movies, shows..."
                  className="w-full bg-brand-surface/50 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary transition"
                />
                <svg
                  className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="w-full md:w-auto flex flex-wrap gap-3 md:justify-end">
                <button className="px-4 py-2 rounded-full bg-brand-primary border border-brand-primary text-black font-semibold transition hover:bg-sky-500">
                  All
                </button>
                <button className="px-4 py-2 rounded-full bg-brand-surface/50 border border-white/10 text-white/80 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface/70 transition backdrop-blur-xl">
                  Action
                </button>
                <button className="px-4 py-2 rounded-full bg-brand-surface/50 border border-white/10 text-white/80 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface/70 transition backdrop-blur-xl">
                  Comedy
                </button>
                <button className="px-4 py-2 rounded-full bg-brand-surface/50 border border-white/10 text-white/80 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface/70 transition backdrop-blur-xl">
                  Drama
                </button>
                <button className="px-4 py-2 rounded-full bg-brand-surface/50 border border-white/10 text-white/80 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface/70 transition backdrop-blur-xl">
                  Sci-Fi
                </button>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">✨ New Releases</h2>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition text-sm md:text-base">
                View All &rarr;
              </a>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="shrink-0 w-44 sm:w-56 md:w-64 relative rounded-xl overflow-hidden group bg-brand-surface/50 backdrop-blur-xl border border-white/10 transition-all hover:scale-[1.02] hover:border-brand-primary shadow-xl"
                >
                  <img
                    src={`https://picsum.photos/300/450?${i + 10}`}
                    className="w-full aspect-2/3 object-cover"
                    alt={`New Release ${i}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity">
                    <h3 className="text-lg font-semibold truncate">Movie Title {i}</h3>
                    <p className="text-sm text-white/70">Action • 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">🔥 Trending Now</h2>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition text-sm md:text-base">
                View All &rarr;
              </a>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="shrink-0 w-44 sm:w-56 md:w-64 relative rounded-xl overflow-hidden group bg-brand-surface/50 backdrop-blur-xl border border-white/10 transition-all hover:scale-[1.02] hover:border-brand-primary shadow-xl"
                >
                  <img
                    src={`https://picsum.photos/300/450?${i + 20}`}
                    className="w-full aspect-2/3 object-cover"
                    alt={`Trending ${i}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity">
                    <h3 className="text-lg font-semibold truncate">Trending Movie {i}</h3>
                    <p className="text-sm text-white/70">Action • 2023</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">🎬 BingeBox Originals</h2>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition text-sm md:text-base">
                View All &rarr;
              </a>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="shrink-0 w-44 sm:w-56 md:w-64 relative rounded-xl overflow-hidden group bg-brand-surface/50 backdrop-blur-xl border border-white/10 transition-all hover:scale-[1.02] hover:border-brand-primary shadow-xl"
                >
                  <img
                    src={`https://picsum.photos/300/450?${i + 30}`}
                    className="w-full aspect-2/3 object-cover"
                    alt={`Original ${i}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity">
                    <h3 className="text-lg font-semibold truncate">Original {i}</h3>
                    <p className="text-sm text-white/70">Drama • Exclusive</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Explore Regions & More</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
              {['KHALIJI', 'WESTERN', 'ARABIC', 'TURKISH', 'SAUDI', 'EGYPTIAN', 'BOLLYWOOD', 'KOREAN'].map((region, idx) => (
                <div
                  key={region}
                  className={`aspect-video rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center font-semibold text-lg hover:scale-[1.03] hover:border-brand-primary transition shadow-xl cursor-pointer ${
                    idx === 0 ? 'bg-green-700/30' :
                    idx === 1 ? 'bg-purple-700/30' :
                    idx === 2 ? 'bg-pink-700/30' :
                    idx === 3 ? 'bg-teal-700/30' :
                    idx === 4 ? 'bg-yellow-700/30' :
                    idx === 5 ? 'bg-cyan-700/30' :
                    idx === 6 ? 'bg-blue-700/30' :
                    'bg-fuchsia-700/30'
                  }`}
                >
                  {region}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Explore Genres</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
              {['ACTION', 'COMEDY', 'DRAMA', 'HORROR', 'ROMANCE', 'SCI-FI', 'ANIME', 'DOCUMENTARY'].map((genre, idx) => (
                <div
                  key={genre}
                  className={`aspect-video rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center font-semibold text-lg hover:scale-[1.03] hover:border-brand-primary transition shadow-xl cursor-pointer ${
                    idx === 0 ? 'bg-brand-primary/30' :
                    idx === 1 ? 'bg-purple-700/30' :
                    idx === 2 ? 'bg-blue-700/30' :
                    idx === 3 ? 'bg-green-700/30' :
                    idx === 4 ? 'bg-orange-700/30' :
                    idx === 5 ? 'bg-pink-700/30' :
                    idx === 6 ? 'bg-sky-700/30' :
                    'bg-indigo-700/30'
                  }`}
                >
                  {genre}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 mb-20">
          <div className="bg-brand-primary/30 backdrop-blur-xl border border-brand-primary/50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center md:text-left shadow-2xl shadow-brand-primary/20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                Start your free trial today! 🚀
              </h2>
              <p className="text-white/80 max-w-lg">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of BingeBox.
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
      </main>

      <Footer />
    </div>
  );
}

export default Overview;

