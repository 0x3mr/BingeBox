import { useState } from "react";

function SignUpForm({ isVisible, onSwitch, onClack }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onClack(); // Trigger animation
    setIsLoading(true);

    try {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        setIsLoading(false);
        return;
      }

      // Check if email already exists
      const res = await fetch(`http://localhost:4000/users?email=${email}`);
      const existingUsers = await res.json();

      if (existingUsers.length > 0) {
        alert("Email already registered.");
        setIsLoading(false);
        return;
      }

      // Create user object with full structure
      const newUser = {
        email: email,
        password: password,
        fullName: name,
        premium: "no",
        admin: "no",
        bio: "",
        devices: [], // nested list of connected devices
        pfp: "",
        watched: 0,
        hours: 0,
        favorites: 0,
        streak: 0,
      };

      // POST new user to JSON-server
      await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      alert("Sign up successful! You can now sign in.");
      setName("");
      setEmail("");
      setPassword(""); // Reset form
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="signupForm"
      aria-label="Sign up form"
      className={`space-y-5 transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 absolute pointer-events-none"
      }`}
    >
      {/* Form Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold bg-linear-to-r from-brand-primary via-cyan-400 to-brand-primary bg-clip-text text-transparent">
          Create Account
        </h2>
        <p className="text-textgray text-sm mt-2">
          Join us and start your journey
        </p>
      </div>

      <div onSubmit={handleSubmit}>
        {/* Full Name Input */}
        <div className="relative group mb-5">
          <label
            htmlFor="signupName"
            className="block text-sm font-medium text-absolutewhite/80 mb-2 transition-colors group-focus-within:text-absolutewhite"
          >
            Full Name
          </label>
          <div className="relative">
            <input
              id="signupName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Amr Abdelfattah"
              required
              aria-required="true"
              className="w-full px-4 py-3 pl-11 rounded-xl bg-brand-surface/50 border border-brand-border text-absolutewhite placeholder:text-textgray focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all duration-200 hover:bg-brand-surface/70 hover:border-brand-primary/30"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-textgray group-focus-within:text-brand-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>

        {/* Email Input */}
        <div className="relative group mb-5">
          <label
            htmlFor="signupEmail"
            className="block text-sm font-medium text-absolutewhite/80 mb-2 transition-colors group-focus-within:text-absolutewhite"
          >
            Email Address
          </label>
          <div className="relative">
            <input
              id="signupEmail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="amr@gmail.com"
              required
              aria-required="true"
              className="w-full px-4 py-3 pl-11 rounded-xl bg-brand-surface/50 border border-brand-border text-absolutewhite placeholder:text-textgray focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all duration-200 hover:bg-brand-surface/70 hover:border-brand-primary/30"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-textgray group-focus-within:text-brand-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Password Input */}
        <div className="relative group mb-6">
          <label
            htmlFor="signupPassword"
            className="block text-sm font-medium text-absolutewhite/80 mb-2 transition-colors group-focus-within:text-absolutewhite"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="signupPassword"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              aria-required="true"
              className="w-full px-4 py-3 pl-11 pr-11 rounded-xl bg-brand-surface/50 border border-brand-border text-absolutewhite placeholder:text-textgray focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 transition-all duration-200 hover:bg-brand-surface/70 hover:border-brand-primary/30"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-textgray group-focus-within:text-brand-primary transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-textgray hover:text-absolutewhite/70 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
          <p className="text-xs text-textgray mt-2">
            Must be at least 8 characters
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          aria-label="Create your account"
          className="w-full py-3.5 rounded-xl bg-linear-to-r from-brand-primary to-cyan-500 text-absolutewhite font-semibold hover:from-brand-primary/90 hover:to-cyan-600 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(79,195,247,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-absolutewhite"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Creating Account...
            </>
          ) : (
            "Sign Up"
          )}
        </button>

        {/* Switch to Sign In */}
        <p className="text-center text-sm text-textgray mt-6">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitch}
            aria-label="Switch to sign in form"
            className="text-brand-primary hover:text-brand-primary/80 font-medium underline-offset-4 hover:underline transition-colors bg-transparent border-none p-0 cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
