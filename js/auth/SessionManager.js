const emailLogin = "tony.stark@gmail.com";
const passwordLogin = "Azerty1234!";
const sessionCookieName = "sessionID";
const roleCookieName = "role";


// Fonction pour vérifier si un utilisateur est connecté (cookie de session présent)
function checkSession() {
    const sessionId = getCookie(sessionCookieName);
    if (sessionId) {
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

async function checkCredentials() {

    // S'occupe de l'authentification
    await sendConnection().then((response) => {

        // Redirect si connexion ok sinon r
            if(response.ok) {

                // La connexion a reussi, 
                // Nous lui mettons un token unique de connexion
                // à voir ou mettre cete feature
                const token = generateLongSessionId();
                setCookie(sessionCookieName, token, 1);
                setCookie(roleCookieName, "admin", 1);
                window.location.href = "/";
            }
            else {

                showLoginError();
            }
        });
}

async function sendConnection() {

    // S'occupe de la connexion et de la redirection
    const formData = new FormData(document.getElementById("formLogin"));
    const email = formData.get("email");
    const password = formData.get("password");
    

    try {
        
        // Verification de la connexion auprès de l'API
        const simulatedAPIResponse = simulateAPICheck(email, password);

        if (simulatedAPIResponse.ok){
            // L'utilisateur a envoyé les bons credentials
            // Envois des informations de connexion à l'API

            // Envoi des données au serveur pour la connexion
            const response = await fetch("/", {
                    method: "POST",
                    body: formData
                }
            );
            if (response.ok) {
                console.log("Connexion réussi");
                return {ok: true};
            } else {
                throw new Error("Erreur de connexion au serveur");
            }
        } else {
            throw new Error("Identifiants incorrects");
        }

    } catch(e) {
        console.log("Error logging in:", e);
        return {ok : false};
    }
}

function simulateAPICheck(email, password) {

    if(email === emailLogin && password === passwordLogin){
        return {ok : true};
    } else {
        return {ok : false};
    }
}

function showLoginError() {

    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger container-sm';
    alertDiv.innerHTML = `
        <h4 class="alert-heading">Erreur de connexion!</h4>
        <p>Identifiant ou mot de passe incorrect</p>
    `;

    const inputMailLogin = document.querySelector("#inputMailLogin");
    const inputPasswordLogin = document.querySelector("#inputPasswordLogin");
    inputMailLogin.classList.add("is-invalid");
    inputPasswordLogin.classList.add("is-invalid");

    const container = document.querySelector(".js-container");
    container.prepend(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 15000);

    alertDiv.addEventListener('click', () => {
        alertDiv.remove();
    });

}

// Fonction pour générer un faux identifiant de session long
function generateLongSessionId() {
    const length = 128; // Longueur souhaitée pour le session ID
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let sessionId = '';
    for (let i = 0; i < length; i++) {
        sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return sessionId;
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    const cookie = `${name}=${value};${expires};path=/;SameSite=Strict;`;
    document.cookie = cookie;
}

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

export {
    checkCredentials,
    checkSession,
    logout,
    getRole,
    showAndHideElementsForRoles

}