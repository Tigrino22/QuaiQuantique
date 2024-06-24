const emailLogin = "tony.stark@gmail.com";
const passwordLogin = "Azerty1234!";
const sessionCookieName = "sessionID";
const roleCookieName = "role";

const logoutButton = document.querySelector(".js-logout-btn");
logoutButton.addEventListener('click', logout);

// Fonction pour lire un cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function getRole(){
    return getCookie(roleCookieName);
}

// Fonction pour définir un cookie
const setCookie = (name, value, days) => {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    const cookie = `${name}=${value};${expires};path=/;SameSite=Strict;`;
    document.cookie = cookie;
}

// Fonction pour vérifier si un utilisateur est connecté (cookie de session présent)
function checkSession() {
    const sessionId = getCookie("sessionID");
    if (sessionId) {
        console.log(sessionId);
        return true;
        // Redirection ou autres actions pour un utilisateur connecté
    } else {
        return false;
        // Actions pour un utilisateur non connecté
    }
}

function eraseCookie(name) {
    document.cookie = `${name}=;Path=/;Expires= Thu, 01 jan 1970 00:00:01 GMT;`;
}

// Fonction de déconnexion
function logout() {
    console.log("disconnecting...")
    eraseCookie(sessionCookieName);
    eraseCookie(roleCookieName);
    console.log('Déconnexion réussie');
    window.location.reload();

}

// Les différents rôle
// Disconnected
// Connected :  Client
//              Admin

function showAndHideElementsForRoles() {
    const userConnected = checkSession();
    const userRole = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]');
    allElementsToEdit.forEach((element) => {
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add('d-none');
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add('d-none');
                }
                break;
            case 'admin':
                if(userRole != 'admin' || !userConnected){
                    element.classList.add('d-none');
                }
                break;
            case 'client':
                if(userRole != 'client' || !userConnected){
                    element.classList.add('d-none');
                }
                break;
            } 
    })

}