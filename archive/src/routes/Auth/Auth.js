document.addEventListener("DOMContentLoaded", () => {
  const signinForm = document.getElementById("signinForm");
  const signupForm = document.getElementById("signupForm");
  const goToSignup = document.getElementById("goToSignup");
  const goToSignin = document.getElementById("goToSignin");

  function setActive(tab) {
    if (tab === "signin") {
      // Show sign-in form, hide sign-up form
      signinForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
    } else {
      // Show sign-up form, hide sign-in form
      signupForm.classList.remove("hidden");
      signinForm.classList.add("hidden");
    }
  }

  // Event listener for the "Sign up" link
  goToSignup.addEventListener("click", () => setActive("signup"));

  // Event listener for the "Sign in" link
  goToSignin.addEventListener("click", () => setActive("signin"));
});