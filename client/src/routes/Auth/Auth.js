document.addEventListener("DOMContentLoaded", () => {
    const signinTab = document.getElementById("signinTab");
    const signupTab = document.getElementById("signupTab");
    const signinForm = document.getElementById("signinForm");
    const signupForm = document.getElementById("signupForm");
    const goToSignup = document.getElementById("goToSignup");
    const goToSignin = document.getElementById("goToSignin");
    const welcomeTitle = document.getElementById("welcomeTitle");
    const welcomeText = document.getElementById("welcomeText");

    function setActive(tab) {
        if (tab === "signin") {
        signinForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
        signinTab.classList.add("border-white", "text-white");
        signinTab.classList.remove("text-white/60", "border-transparent");
        signupTab.classList.remove("border-white", "text-white");
        signupTab.classList.add("text-white/60", "border-transparent");

        welcomeTitle.textContent = "Welcome Back!";
        welcomeText.textContent =
            "Sign in to continue your streaming journey or create an account to join BingeBox today.";
        } else {
        signupForm.classList.remove("hidden");
        signinForm.classList.add("hidden");
        signupTab.classList.add("border-white", "text-white");
        signupTab.classList.remove("text-white/60", "border-transparent");
        signinTab.classList.remove("border-white", "text-white");
        signinTab.classList.add("text-white/60", "border-transparent");

        welcomeTitle.textContent = "Join BingeBox Today!";
        welcomeText.textContent =
            "Create your free account and dive into unlimited movies, series, and shows instantly.";
        }
    }

    signinTab.addEventListener("click", () => setActive("signin"));
    signupTab.addEventListener("click", () => setActive("signup"));
    goToSignup.addEventListener("click", () => setActive("signup"));
    goToSignin.addEventListener("click", () => setActive("signin"));
});