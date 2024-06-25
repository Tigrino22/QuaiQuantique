import {logout} from "./auth/SessionManager.js";

document.addEventListener("DOMContentLoaded", () => {

        const logoutButton = document.querySelector(".js-logout-btn");

        if (logoutButton) {
            logoutButton.addEventListener("click", (event) => {
                event.preventDefault();
                logout();
            });
        } else {
            console.error("Logout Button not found");
        }
    }
);

