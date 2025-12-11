import { useState } from "react";
import { Link } from "react-router-dom";
import SignInForm from "$/components/Auth/SignInForm";
import SignUpForm from "$/components/Auth/SignUpForm";
import StripeHeader from "$/components/Auth/StripeHeader";

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [stripeTrigger, setStripeTrigger] = useState(false);

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
        {/* Wrapper so header sits ABOVE card */}
        <div className="relative w-full">
          {/* Stripe Header (now forms the real top of the card) */}
          <StripeHeader
            trigger={stripeTrigger}
            className="rounded-t-2xl"
            angle={45}
          />
          <StripeHeader className="scale-y-[-1] mt-px" angle={45} />

          {/* Card (rounded only at bottom) */}
          <div
            className="
      overflow-hidden w-full
      rounded-b-2xl
      shadow-[0_0_40px_rgba(255,255,255,0.1)]
      backdrop-blur-xl bg-white/5 border border-white/10
      transition duration-300
      hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]
      mt-15"
          >
            <div className="w-full bg-white/10 backdrop-blur-md flex flex-col justify-center rounded-b-2xl">
              <div className="p-8 sm:p-10">
                <SignInForm
                  isVisible={!isSignUp}
                  onSwitch={() => setIsSignUp(true)}
                  onClack={() => setStripeTrigger((prev) => !prev)}
                />

                <SignUpForm
                  isVisible={isSignUp}
                  onSwitch={() => setIsSignUp(false)}
                  onClack={() => setStripeTrigger((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Auth;
