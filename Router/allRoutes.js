import {Route} from "./Route.js";

/**
 * Configuration des routes du site
 * @type {Route[]}
 */
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
]

// Affichera Route.titre - nameWebsite
export const nameWebsite = "Quai Quantique";

