import {Route} from "./Route.js";

/**
 * Configuration des routes du site
 * @type {Route[]}
 */
export const allRoutes = [
// APP
    new Route("/", "Accueil", "/pages/home.html", "",[]),
    new Route("/galerie", "Galerie", "/pages/galerie.html", "", []),

// AUTH
    new Route("/login", "Connexion", "/pages/auth/login.html", "/js/auth/login.js", ["disconnected"]),
    new Route("/register", "Inscription", "/pages/auth/register.html", "/js/auth/register.js", ['disconnected']),
    new Route("/account", "Mon Compte", "/pages/auth/account.html", "/js/auth/account.js", ['admin', 'client']),
    new Route("/edit-password", "Edit Password", "/pages/auth/editPassword.html", "",['admin', 'client']),

// RESERVATIONS
    new Route("/myresa", "Vos réservations", "/pages/reservations/myresa.html", "",['client']),
    new Route("/allresa", "Les réservations", "/pages/reservations/allresa.html", "",['admin']),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", "/js/reservationForm.js", ['client']),
]

// Affichera Route.titre - nameWebsite
export const nameWebsite = "Quai Quantique";

