import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="bg-black font-['Arimo'] min-h-screen">
      <Header />

      <main
        role="main"
        className="pt-[150px] flex items-center justify-center bg-black overflow-x-hidden w-full min-h-screen z-0"
      >
        <div className="flex flex-col w-full max-w-[1440px] items-start bg-zinc-950 px-4 md:px-16 py-12">
          <div className="flex flex-col items-start gap-8 w-full">
            <section className="flex flex-col md:flex-row items-start justify-between w-full gap-4">
              <div className="flex items-start gap-5">
                <div className="w-24 h-24 rounded-full border-4 border-brand-primary bg-zinc-800 flex items-center justify-center text-[#f9f9f9] text-2xl font-normal">
                  JD
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="font-normal text-[#f9f9f9] text-base leading-6">
                      John Doe
                    </h1>
                    <span className="h-5 px-2 py-0.5 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs leading-4 inline-flex items-center">
                      Premium Member
                    </span>
                  </div>

                  <p className="font-normal text-[#9e9ea9] text-base leading-6">
                    john.doe@example.com
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-4 h-4"
                        alt="Icon"
                        src="https://c.animaapp.com/mhj4bhqeU8XhYM/img/icon-4.svg"
                      />
                      <span className="font-normal text-[#9e9ea9] text-base leading-6 whitespace-nowrap">
                        342 watched
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        className="w-4 h-4"
                        alt="Icon"
                        src="https://c.animaapp.com/mhj4bhqeU8XhYM/img/icon-6.svg"
                      />
                      <span className="font-normal text-[#9e9ea9] text-base leading-6 whitespace-nowrap">
                        487 hours
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        className="w-4 h-4"
                        alt="Icon"
                        src="https://c.animaapp.com/mhj4bhqeU8XhYM/img/icon-12.svg"
                      />
                      <span className="font-normal text-[#9e9ea9] text-base leading-6 whitespace-nowrap">
                        52 favorites
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="px-3 py-2 bg-zinc-900 rounded-lg border border-[#26262a] hover:bg-zinc-800 transition-colors flex items-center">
                <img
                  className="w-4 h-4 mr-2"
                  alt="Edit icon"
                  src="https://c.animaapp.com/mhj4bhqeU8XhYM/img/icon-1.svg"
                />
                <span className="font-normal text-[#f9f9f9] text-sm leading-5">
                  Edit Profile
                </span>
              </button>
            </section>

            <section className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-zinc-900 border-[#26262a] border rounded-xl p-6 flex flex-col gap-6 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-[#3a3a3f]">
                  <div className="flex flex-col gap-1.5">
                    <div className="font-normal text-[#9e9ea9] text-base leading-6">
                      This Month
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="font-normal text-[#f9f9f9] text-base leading-4">
                        24 Movies
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#00c950]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    <div className="font-normal text-base leading-6 text-[#00c950]">
                      +12% from last month
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border-[#26262a] border rounded-xl p-6 flex flex-col gap-6 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-[#3a3a3f]">
                  <div className="flex flex-col gap-1.5">
                    <div className="font-normal text-[#9e9ea9] text-base leading-6">
                      Watch Time (week)
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="font-normal text-[#f9f9f9] text-base leading-4">
                        52.5 hrs
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[#00c950]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                    <div className="font-normal text-base leading-6 text-[#00c950]">
                      +8% from last month
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border-[#26262a] border rounded-xl p-6 flex flex-col gap-6 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-[#3a3a3f]">
                  <div className="flex flex-col gap-1.5">
                    <div className="font-normal text-[#9e9ea9] text-base leading-6">
                      Avg. Rating
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="font-normal text-[#f9f9f9] text-base leading-4">
                        4.3
                      </div>
                      <svg
                        className="w-5 h-5 fill-current text-[#f9f9f9]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-normal text-base leading-6 text-[#9e9ea9]">
                      Based on 156 ratings
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border-[#26262a] border rounded-xl p-6 flex flex-col gap-6 transition hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-[#3a3a3f]">
                  <div className="flex flex-col gap-1.5">
                    <div className="font-normal text-[#9e9ea9] text-base leading-6">
                      Streak
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="font-normal text-[#f9f9f9] text-base leading-4">
                        15 days
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-normal text-base leading-6 text-[#9e9ea9]">
                      Keep it up!
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full flex flex-col items-center gap-8 py-8 text-brand-primary">
              [ Chart goes here ]
            </section>

            <nav className="w-full max-w-[1312px] flex flex-col gap-[7.99px] px-[15.99px]">
              <div className="bg-zinc-900 border-[1.27px] border-[#26262a] rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors">
                <div className="flex items-center justify-between p-0 h-[55.99px]">
                  <div className="flex items-center gap-[11.99px] pl-[13px]">
                    <img
                      className="w-[15.99px] h-[15.99px]"
                      alt="Continue Watching"
                      src="https://c.animaapp.com/mhj4bhqeU8XhYM/img/icon-3.svg"
                    />
                    <span className="font-normal text-[#f9f9f9] text-sm whitespace-nowrap">
                      Continue Watching
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-white mr-11"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="bg-zinc-900 border-[1.27px] border-[#26262a] rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors">
                <div className="flex items-center justify-between p-0 h-[55.99px]">
                  <div className="flex items-center gap-[11.99px] pl-[13px]">
                    <img
                      className="w-[15.99px] h-[15.99px]"
                      alt="My Watchlist"
                      src="https://c.animaapp.com/mhj4bhqeU8XhYM/img/icon-2.svg"
                    />
                    <span className="font-normal text-[#f9f9f9] text-sm whitespace-nowrap">
                      My Watchlist
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-white mr-11"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="bg-zinc-900 border-[1.27px] border-[#26262a] rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors">
                <div className="flex items-center justify-between p-0 h-[55.99px]">
                  <div className="flex items-center gap-[11.99px] pl-[13px]">
                    <img
                      className="w-[15.99px] h-[15.99px]"
                      alt="Watch History"
                      src="https://c.animaapp.com/mhj4bhqeU8XhYM/img/icon-6.svg"
                    />
                    <span className="font-normal text-[#f9f9f9] text-sm whitespace-nowrap">
                      Watch History
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-white mr-11"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>

              <Link
                to="/settings"
                className="bg-zinc-900 border-[1.27px] border-[#26262a] rounded-lg cursor-pointer hover:bg-zinc-800 transition-colors"
              >
                <div className="flex items-center justify-between p-0 h-[55.99px]">
                  <div className="flex items-center gap-[11.99px] pl-[13px]">
                    <img
                      className="w-[15.99px] h-[15.99px]"
                      alt="Account Settings"
                      src="https://c.animaapp.com/mhj4bhqeU8XhYM/img/icon-10.svg"
                    />
                    <span className="font-normal text-[#f9f9f9] text-sm whitespace-nowrap">
                      Account Settings
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-white mr-11"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;
