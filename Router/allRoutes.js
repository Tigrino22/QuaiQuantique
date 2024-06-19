import {Route} from "./Route.js";

/**
 * Configuration des routes du site
 * @type {Route[]}
 */
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/login", "Connexion", "/pages/login.html"),
    new Route("/register", "Inscription", "/pages/register.html"),
    new Route("/account", "Mon Compte", "/pages/account.html"),
]

// Affichera Route.titre - nameWebsite
export const nameWebsite = "Quai Quantique";

