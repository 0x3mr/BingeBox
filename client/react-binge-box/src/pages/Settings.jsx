import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

function Settings() {
  const [videoQuality, setVideoQuality] = useState('hd');
  const [alwaysShowSubtitles, setAlwaysShowSubtitles] = useState(false);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [skipIntro, setSkipIntro] = useState(true);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <div className="absolute inset-x-0 top-0 h-[112px] bg-black rounded-[1361px] filter blur-[100px] z-10"></div>

      <Header />

      <main role="main" className="relative z-10 pt-[150px] pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Account Settings
            </h1>
            <p className="text-gray-400 text-lg">
              Manage your BingeBox preferences and account settings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 sticky top-32">
                <nav className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 bg-brand-primary/20 text-brand-primary rounded-lg border border-brand-primary/50"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="font-semibold">Profile</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-white/10 hover:text-brand-primary rounded-lg transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span>Security</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-white/10 hover:text-brand-primary rounded-lg transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span>Billing</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-white/10 hover:text-brand-primary rounded-lg transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5"
                      />
                    </svg>
                    <span>Notifications</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-white/10 hover:text-brand-primary rounded-lg transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                    <span>Preferences</span>
                  </a>
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-3 space-y-8">
              <section className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center text-3xl font-bold">
                    YI
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">Youssef Islam</h3>
                    <p className="text-gray-400 mb-2">
                      s-youssef.kamel@zewailcity.edu.eg
                    </p>
                    <span className="inline-block px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm rounded-full border border-brand-primary/50">
                      Premium Member
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Youssef"
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Islam"
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="s-youssef.kamel@zewailcity.edu.eg"
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+20 101770782"
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">Bio</label>
                    <textarea
                      rows="4"
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition resize-none"
                      defaultValue="Movie enthusiast and binge-watcher. Love sci-fi and thriller genres!"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition font-semibold border border-white/10">
                    Cancel
                  </button>
                  <button className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary rounded-lg font-bold transition">
                    Save Changes
                  </button>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Streaming Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Video Quality
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <label className="flex items-center p-4 bg-neutral-900 border border-white/10 rounded-lg cursor-pointer hover:border-brand-primary transition">
                        <input
                          type="radio"
                          name="quality"
                          value="auto"
                          checked={videoQuality === 'auto'}
                          onChange={() => setVideoQuality('auto')}
                          className="mr-3 w-5 h-5"
                        />
                        <div>
                          <p className="font-semibold">Auto</p>
                          <p className="text-sm text-gray-400">
                            Adjust automatically
                          </p>
                        </div>
                      </label>
                      <label className="flex items-center p-4 bg-neutral-900 border-2 border-brand-primary rounded-lg cursor-pointer">
                        <input
                          type="radio"
                          name="quality"
                          value="hd"
                          checked={videoQuality === 'hd'}
                          onChange={() => setVideoQuality('hd')}
                          className="mr-3 w-5 h-5"
                        />
                        <div>
                          <p className="font-semibold">HD (1080p)</p>
                          <p className="text-sm text-gray-400">High quality</p>
                        </div>
                      </label>
                      <label className="flex items-center p-4 bg-neutral-900 border border-white/10 rounded-lg cursor-pointer hover:border-brand-primary transition">
                        <input
                          type="radio"
                          name="quality"
                          value="4k"
                          checked={videoQuality === '4k'}
                          onChange={() => setVideoQuality('4k')}
                          className="mr-3 w-5 h-5"
                        />
                        <div>
                          <p className="font-semibold">4K Ultra HD</p>
                          <p className="text-sm text-gray-400">Best quality</p>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Language Preference
                    </label>
                    <select className="w-full md:w-1/2 bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Playback Settings
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg cursor-pointer">
                        <span className="font-semibold">Always show subtitles</span>
                        <input
                          type="checkbox"
                          checked={alwaysShowSubtitles}
                          onChange={(e) => setAlwaysShowSubtitles(e.target.checked)}
                          className="w-12 h-6 bg-gray-700 rounded-full appearance-none cursor-pointer checked:bg-brand-primary relative transition before:content-[''] before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition checked:before:left-6"
                        />
                      </label>
                      <label className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg cursor-pointer">
                        <span className="font-semibold">Auto-play next episode</span>
                        <input
                          type="checkbox"
                          checked={autoPlayNext}
                          onChange={(e) => setAutoPlayNext(e.target.checked)}
                          className="w-12 h-6 bg-gray-700 rounded-full appearance-none cursor-pointer checked:bg-brand-primary relative transition before:content-[''] before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition checked:before:left-6"
                        />
                      </label>
                      <label className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg cursor-pointer">
                        <span className="font-semibold">
                          Skip intro automatically
                        </span>
                        <input
                          type="checkbox"
                          checked={skipIntro}
                          onChange={(e) => setSkipIntro(e.target.checked)}
                          className="w-12 h-6 bg-gray-700 rounded-full appearance-none cursor-pointer checked:bg-brand-primary relative transition before:content-[''] before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition checked:before:left-6"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition font-semibold border border-white/10">
                    Reset
                  </button>
                  <button className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary rounded-lg font-bold transition">
                    Save Preferences
                  </button>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Connected Devices</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-neutral-900 border border-brand-primary/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center border border-brand-primary/50">
                        <svg
                          className="w-6 h-6 text-brand-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">iPhone 13 Pro</p>
                        <p className="text-sm text-gray-400">
                          Last active: 2 minutes ago
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm rounded-full border border-brand-primary/50">
                      Current Device
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center border border-white/10">
                        <svg
                          className="w-6 h-6 text-brand-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">MacBook Pro</p>
                        <p className="text-sm text-gray-400">
                          Last active: 1 hour ago
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition font-semibold border border-white/10">
                      Remove
                    </button>
                  </div>
                </div>
              </section>

              <section className="bg-white/5 border border-brand-primary/50 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-brand-primary">
                  Danger Zone
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-neutral-900 border border-white/10 rounded-lg">
                    <div>
                      <p className="font-semibold">Clear Watch History</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Remove all your viewing history
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition font-semibold border border-white/10">
                      Clear History
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-neutral-900 border border-brand-primary/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-brand-primary">
                        Delete Account
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Permanently delete your account and all data
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-brand-primary hover:bg-brand-secondary text-white rounded-lg font-bold transition">
                      Delete
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Settings;
