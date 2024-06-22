const emailLogin = "tony.stark@gmail.com";
const passwordLogin = "Azerty1234!";

const inputMailLogin = document.getElementById("InputEmail");
const inputPasswordLogin = document.getElementById("InputPassword");

const submitButtonLogin = document.getElementById("submitButton");

submitButtonLogin.addEventListener("click", checkCredentials);


async function checkCredentials() {

    // S'occupe de l'authentification
    sendConnection().then((response) => {

        // Redirect si connexion ok sinon r
            if(response.ok) {
                window.location.href = "/account";
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

    if(email == emailLogin && password == passwordLogin){
        return {ok : true};
    } else {
        return {ok : false};
    }
}

const showLoginError = () => {

    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger container-sm';
    alertDiv.innerHTML = `
        <h4 class="alert-heading">Erreur de connexion!</h4>
        <p>Identifiant ou mot de passe incorrect</p>
    `;

    const container = document.querySelector(".js-container");
    container.prepend(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 15000);

    alertDiv.addEventListener('click', () => {
        alertDiv.remove();
    });

};