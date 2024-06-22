import {allRoutes, nameWebsite} from "./allRoutes.js";
import {Route} from "./Route.js";

// Création d'une route pour la page 404
const route404 = new Route("404", "Page introuvable", "/pages/404.html");

// Fonction pour récupérer la route de l'URL donnée
const getRouteByUrl = (url) => {
    let currentRoute = allRoutes.find(route => route.url === url);
    return currentRoute ? currentRoute : route404;
}

// Fonction pour charger le contenu de la page
const loadContentPage = async () => {
    const path = window.location.pathname;
    // Récupération de l'URL actuelle
    const actualRoute = getRouteByUrl(path);

    // Classe pour transition de sortie
    const main = document.getElementById("main-page");

    // Ajout d'une classe pour transition
    main.classList.add("page-exit");
    await new Promise(resolve => setTimeout(resolve, 300)); // Simuler une transition de 300ms

    // Retrait de la classe après la transition
    main.classList.remove("page-exit");

    // Récupération du contenu de la page demandée
    const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
    main.innerHTML = html;

    // Chargement du script JS associé, s'il y en a un
    if (actualRoute.pathJs) {
        let scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", 'text/javascript');
        scriptTag.setAttribute("src", actualRoute.pathJs);
        document.querySelector("body").appendChild(scriptTag);
    }

    // Mise à jour du titre de la page
    document.title = actualRoute.title + " - " + nameWebsite;
};

const routeEvent = (event) => {
    event.preventDefault();
    // Mise à jour de l'URL dans l'historique du navigateur
    window.history.pushState({}, "", event.target.href);
    // Chargement du contenu de la nouvelle page
    loadContentPage();
};

// Gestion du retour en arrière dans l'historique du navigateur
window.onpopstate = loadContentPage;

// Assignation de la fonction routeEvent à la propriété route de la fenêtre
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", routeEvent);
    });
});

// Chargement du contenu de la page au chargement initial
loadContentPage();
