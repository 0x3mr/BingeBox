// SignUpForm Component: Handles the name, email, and password inputs for user sign-up.
function SignUpForm({ isVisible, onSwitch }) {
  // Handles form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  return (
    <form
      id="signupForm"
      aria-label="Sign up form"
      className={`space-y-4 transition duration-300 ${isVisible ? "" : "hidden"}`}
      onSubmit={handleSubmit}
    >
      {/* Form Title */}
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Create Account
      </h2>

      {/* Full Name Input */}
      <div>
        <label
          htmlFor="signupName"
          className="block text-sm text-white/70 mb-1"
        >
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

      {/* Email Input */}
      <div>
        <label
          htmlFor="signupEmail"
          className="block text-sm text-white/70 mb-1"
        >
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

      {/* Password Input */}
      <div>
        <label
          htmlFor="signupPassword"
          className="block text-sm text-white/70 mb-1"
        >
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

      {/* Submit Button */}
      <button
        type="submit"
        aria-label="Create your account"
        className="w-full mt-6 py-2 rounded-lg bg-brand-primary text-black font-medium hover:bg-sky-500 transition duration-200 hover:scale-[1.02]"
      >
        Sign Up
      </button>

      {/* Switch to Sign In */}
      <p className="text-center text-sm text-white/60 mt-5">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          aria-label="Switch to sign in form"
          className="text-white underline cursor-pointer hover:text-white/90 bg-transparent border-none p-0"
        >
          Sign in
        </button>
      </p>
    </form>
  );
}

export default SignUpForm;
