import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white font-inter">
      <Link
        to="/"
        aria-label="Back to home page"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 text-white/80 hover:text-white text-sm underline underline-offset-4 transition z-10"
      >
        ← Back to Home
      </Link>

      <main
        role="main"
        className="flex-1 flex items-center justify-center relative w-full max-w-md mx-4 sm:mx-6 md:mx-auto my-8"
      >
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-xl bg-white/5 border border-white/10 transition duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]">
          <div className="w-full bg-white/10 backdrop-blur-md flex flex-col justify-center">
            <div
              className="h-6 w-full"
              aria-hidden="true"
              style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, #000 0px, #000 15px, #fff 15px, #fff 30px)',
              }}
            ></div>

            <div className="p-8 sm:p-10">
              <form
                id="signinForm"
                aria-label="Sign in form"
                className={`space-y-4 transition duration-300 ${isSignUp ? 'hidden' : ''}`}
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle sign in
                }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
                <div>
                  <label htmlFor="signinEmail" className="block text-sm text-white/70 mb-1">
                    Email
                  </label>
                  <input
                    id="signinEmail"
                    type="email"
                    placeholder="amr@gmail.com"
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-200 hover:bg-white/20"
                  />
                </div>
                <div>
                  <label htmlFor="signinPassword" className="block text-sm text-white/70 mb-1">
                    Password
                  </label>
                  <input
                    id="signinPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-200 hover:bg-white/20"
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Sign in to your account"
                  className="w-full mt-6 py-2 rounded-lg bg-brand-primary text-black font-medium hover:bg-sky-500 transition duration-200 hover:scale-[1.02]"
                >
                  Sign In
                </button>

                <p className="text-center text-sm text-white/60 mt-5">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(true)}
                    aria-label="Switch to sign up form"
                    className="text-white underline cursor-pointer hover:text-white/90 bg-transparent border-none p-0"
                  >
                    Sign up
                  </button>
                </p>
              </form>

              <form
                id="signupForm"
                aria-label="Sign up form"
                className={`space-y-4 transition duration-300 ${!isSignUp ? 'hidden' : ''}`}
                onSubmit={(e) => {
                  e.preventDefault();
                  // Handle sign up
                }}
              >
                <h2 className="text-2xl font-semibold mb-4 text-center">Create Account</h2>
                <div>
                  <label htmlFor="signupName" className="block text-sm text-white/70 mb-1">
                    Full Name
                  </label>
                  <input
                    id="signupName"
                    type="text"
                    placeholder="Amr Abdelfattah"
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-200 hover:bg-white/20"
                  />
                </div>
                <div>
                  <label htmlFor="signupEmail" className="block text-sm text-white/70 mb-1">
                    Email
                  </label>
                  <input
                    id="signupEmail"
                    type="email"
                    placeholder="amr@gmail.com"
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-200 hover:bg-white/20"
                  />
                </div>
                <div>
                  <label htmlFor="signupPassword" className="block text-sm text-white/70 mb-1">
                    Password
                  </label>
                  <input
                    id="signupPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                    aria-required="true"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-200 hover:bg-white/20"
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Create your account"
                  className="w-full mt-6 py-2 rounded-lg bg-brand-primary text-black font-medium hover:bg-sky-500 transition duration-200 hover:scale-[1.02]"
                >
                  Sign Up
                </button>

                <p className="text-center text-sm text-white/60 mt-5">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(false)}
                    aria-label="Switch to sign in form"
                    className="text-white underline cursor-pointer hover:text-white/90 bg-transparent border-none p-0"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Auth;

