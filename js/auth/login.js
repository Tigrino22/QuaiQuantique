import { checkCredentials } from "./SessionManager.js";


const loginButton = document.querySelector(".js-login-btn");

if (loginButton) {
    loginButton.addEventListener("click", (event) => {
        event.preventDefault();
        checkCredentials();
    });
} else {
    console.error("Login button not found");
}


