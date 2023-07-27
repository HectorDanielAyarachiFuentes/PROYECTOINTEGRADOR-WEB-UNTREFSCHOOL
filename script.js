//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");
//Evento para mostrar y ocultar menú
function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
}
//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página
if (window.innerWidth < 760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}
//Haciendo el menú responsive(adaptable)
window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }
    if (window.innerWidth < 760) {
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
});
window.onscroll = function () { // Cuando se realiza el scroll
    var scrollToTopButton = document.getElementById("scroll-to-top");
    if (window.pageYOffset > 0) { // Si se ha desplazado hacia abajo
        scrollToTopButton.style.display = "block"; // Mostrar la flecha
    } else { // Si está en la parte superior de la página
        scrollToTopButton.style.display = "none"; // Ocultar la flecha
    }
};
function scrollToTop() { // Función para desplazarse hacia arriba al hacer clic en la flecha
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function mostrarSeccion(id) {
    var secciones = document.getElementsByClassName("section");
    for (var i = 0; i < secciones.length; i++) {
        if (secciones[i].id === id) {
            secciones[i].classList.remove("hidden");
        } else {
            secciones[i].classList.add("hidden");
        }
    }
}
// JavaScript para añadir la clase "small" cuando se haga clic en la imagen
const image = document.getElementById("footer-image");
image.addEventListener("click", () => {
    image.classList.toggle("small");
});
