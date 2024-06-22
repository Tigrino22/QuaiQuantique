import { allRoutes, nameWebsite } from "./allRoutes.js";
import { Route } from "./Route.js";

const route404 = new Route("404", "Page introuvable", "/pages/404.html");

const getRouteByUrl = (url) => {
    let currentRoute = null;
    allRoutes.forEach((element) => {
        if (element.url == url) {
            currentRoute = element;
        }
    });

    return currentRoute ? currentRoute : route404;
};

const loadContentPage = async () => {
    const path = window.location.pathname;
    const actualRoute = getRouteByUrl(path);

    if (!actualRoute) {
        console.error('Route non trouvée :', path);
        return;
    }

    try {
        const html = await fetch(actualRoute.pathHtml).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.text();
        });

        const main = document.getElementById("main-page");
        main.innerHTML = html;

        if (actualRoute.pathJs) {
            let scriptTag = document.createElement("script");
            scriptTag.setAttribute("type", 'text/javascript');
            scriptTag.setAttribute("src", actualRoute.pathJs);
            document.querySelector("body").appendChild(scriptTag);
        }

        document.title = `${actualRoute.title} - ${nameWebsite}`;
    } catch (error) {
        console.error('Failed to load page content:', error);
    }
};

const routeEvent = (event) => {
    event.preventDefault();

    const target = event.target;
    if (target && target.href) {
        window.history.pushState({}, "", target.href);
        loadContentPage();
    } else {
        console.error('Erreur de routage : cible invalide ou href manquant.');
    }
};

window.onpopstate = loadContentPage;
window.route = routeEvent;
loadContentPage();
