// SignInForm Component: Handles the email and password inputs for user sign-in.
function SignInForm({ isVisible, onSwitch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
  };

  return (
    <form
      id="signinForm"
      aria-label="Sign in form"
      className={`space-y-4 transition duration-300 ${isVisible ? "" : "hidden"}`}
      onSubmit={handleSubmit}
    >
      {/* Form Title */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>

      {/* Email Input */}
      <div>
        <label
          htmlFor="signinEmail"
          className="block text-sm text-white/70 mb-1"
        >
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

      {/* Password Input */}
      <div>
        <label
          htmlFor="signinPassword"
          className="block text-sm text-white/70 mb-1"
        >
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

      {/* Submit Button */}
      <button
        type="submit"
        aria-label="Sign in to your account"
        className="w-full mt-6 py-2 rounded-lg bg-brand-primary text-black font-medium hover:bg-sky-500 transition duration-200 hover:scale-[1.02]"
      >
        Sign In
      </button>

      {/* Switch to Sign Up */}
      <p className="text-center text-sm text-white/60 mt-5">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          aria-label="Switch to sign up form"
          className="text-white underline cursor-pointer hover:text-white/90 bg-transparent border-none p-0"
        >
          Sign up
        </button>
      </p>
    </form>
  );
}

export default SignInForm;
