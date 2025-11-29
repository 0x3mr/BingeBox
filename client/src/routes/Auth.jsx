import { useState } from "react";
import { Link } from "react-router-dom";
import SignInForm from "$/components/Auth/SignInForm";
import SignUpForm from "$/components/Auth/SignUpForm";

// Auth Component: Manages the overall authentication layout and the state for switching between Sign In and Sign Up forms.
function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-black via-gray-900 to-black text-white font-inter">
      {/* Back to Home Link */}
      <Link
        to="/"
        aria-label="Back to home page"
        className="absolute top-6 left-6 sm:top-8 sm:left-8 text-white/80 hover:text-white text-sm underline underline-offset-4 transition z-10"
      >
        ← Back to Home
      </Link>

      {/* Main Content Area */}
      <main
        role="main"
        className="flex-1 flex items-center justify-center relative w-full max-w-md mx-4 sm:mx-6 md:mx-auto my-8"
      >
        {/* Auth Card Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-xl bg-white/5 border border-white/10 transition duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]">
          {/* Card Header Pattern */}
          <div className="w-full bg-white/10 backdrop-blur-md flex flex-col justify-center">
            <div
              className="h-6 w-full"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, #000 0px, #000 15px, #fff 15px, #fff 30px)",
              }}
            ></div>

            <div className="p-8 sm:p-10">
              {/* Sign In Form Component */}
              <SignInForm isVisible={!isSignUp} onSwitch={() => setIsSignUp(true)} />

              {/* Sign Up Form Component */}
              <SignUpForm isVisible={isSignUp} onSwitch={() => setIsSignUp(false)} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Auth;