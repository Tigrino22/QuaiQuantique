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

// Fonction pour vérifier si un utilisateur est connecté (cookie de session présent)
function checkSession() {
    const sessionId = getCookie("sessionID");
    if (sessionId) {
        console.log("Utilisateur connecté avec session ID:", sessionId);
        // Redirection ou autres actions pour un utilisateur connecté
    } else {
        console.log("Aucune session active");
        // Actions pour un utilisateur non connecté
    }
}

// Appel de la fonction de vérification de la session au chargement de la page
checkSession();