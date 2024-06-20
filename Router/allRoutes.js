import {Route} from "./Route.js";

/**
 * Configuration des routes du site
 * @type {Route[]}
 */
export const allRoutes = [
// APP
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),

// AUTH
    new Route("/login", "Connexion", "/pages/auth/login.html"),
    new Route("/register", "Inscription", "/pages/auth/register.html"),
    new Route("/account", "Mon Compte", "/pages/auth/account.html"),
    new Route("/edit-password", "Edit Password", "/pages/auth/editPassword.html"),

// RESERVATIONS
    new Route("/allresa", "Vos réservations", "/pages/reservations/allresa.html"),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"),
]

// Affichera Route.titre - nameWebsite
export const nameWebsite = "Quai Quantique";

