import {checkCredentials} from "./SessionManager.js";

const loginButton = document.getElementById("submitButton");

loginButton.addEventListener('click', checkCredentials);
