import {allRoutes, nameWebsite} from "./allRoutes.js";
import {Route} from "./Route.js";

// Création d'une route de la page 404
const route404 = new Route("404", "Page introuvable", "/pages/404.html");

//Fonction pour récupérer la route de l'url donné
const getRouteByUrl = (url) => {
    let currentRoute = null;
    // Parcours toutes les routes pour trouver la correspondance
    allRoutes.forEach((element) => {
        if (element.url == url) {
            currentRoute = element;
        }
    });
    if (currentRoute != null) {
        return currentRoute;
    } else {
        return route404;
    }
}

// Fonction pour charger le contenu de la page

const loadContentPage = async () => {
    const path = window.location.pathname;
    // Récup de l'url actuelle
    const actualRoute = getRouteByUrl(path);
    // Récup du contenu de la page demandée
    const html = await fetch(actualRoute.pathHtml).then((data) => data.text());

    document.getElementById("main-page").innerHTML = html;

    if (actualRoute.pathJs) {
        // création de la balise script
        let scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", 'text/javascript');
        scriptTag.setAttribute("src", actualRoute.pathJs);

        // Ajout de la balise a la fin du body
        document.querySelector("body").appendChild(scriptTag);
    }

    document.title = actualRoute.title + " - " + nameWebsite;
};

const routeEvent = (event) => {
    event = event || window.event;
    event.preventDefault();
    // Mise à jour de l'url dans l'historique du navigateur
    window.history.pushState({}, "", event.target.href);
    // Chargement du contenu de la nouvelle page
    loadContentPage();
};

// Gestion du retour en arrière dans l'historique du navigateur
window.onpopstate = loadContentPage();
// Assignantion de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent();
// Chargement du contenu de la page au chargement initial
loadContentPage();
