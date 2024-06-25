import {logout} from "./auth/SessionManager.js";

const logoutButton = document.querySelector(".js-logout-btn");
logoutButton.addEventListener("click", logout);

// Les différents rôle
// Disconnected
// Connected :  Client
//              Admin

