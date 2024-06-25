export const loading = () => {

    const loader = document.querySelector(".js-loader-div");
    const header = document.querySelector(".js-header");
    const mainPage = document.querySelector(".js-main-page");
    const footer = document.querySelector(".js-footer");

    loader.classList.toggle("d-none");
    header.classList.toggle("d-none");
    mainPage.classList.toggle("d-none");
    footer.classList.toggle("d-none");

};