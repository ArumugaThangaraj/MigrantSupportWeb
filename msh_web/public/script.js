document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signup");
    const popup = document.querySelector(".popup");
    const overlay = document.querySelector(".overlay");
    const userLogin = document.getElementById("userlogin");
    const signupBtn = document.getElementById("signup-link");
    const loginBtn = document.getElementById("login-link");
    const homeBtn = document.querySelector(".home-btn");
    const cancelBtn = document.querySelector(".cancel button");


    // Open login popup
    userLogin.addEventListener("click", () => {
        showPopup();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        homeBtn.style.display = "none";
    });

    // Open signup popup
    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showPopup();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    // Back to login from signup
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showPopup();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Cancel button to close popup
    cancelBtn.addEventListener("click", () => hidePopup());

    function showPopup() {
        popup.style.display = "block";
        overlay.style.display = "block";
    }

    function hidePopup() {
        popup.style.display = "none";
        overlay.style.display = "none";
    }

    // Signup form submit (dummy)
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("signup-username").value;
        console.log("Signup Attempt: ", username);
        alert("Signup successful!");
        hidePopup();
    });

    // Login form submit
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            console.log("Login Attempt:", email);

            alert("Login successful!");

            // Redirect to user dashboard
            window.location.href = "../users/userdashboard.html";
        });
    } else {
        console.error("Login form not found!");
    }
});


function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            includedLanguages: 'fr,hi,es,ta',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
    );
}
