var btnMenuOpen = document.getElementById("btn-menu-open");
var menuLateral = document.getElementById("menu-lateral");
var btnMenuClose = document.getElementById("btn-menu-close");
var btnNavToggle = document.getElementById("btn-nav-toggle");
var navlinks = document.getElementById("nav-links");

btnMenuOpen.addEventListener("click", mostrarMenuLateral);
btnMenuClose.addEventListener("click", ocultarMenuLateral);
btnNavToggle.addEventListener("click", toggleNavLinks);
window.addEventListener("resize", arreglarNavLinks);

function mostrarMenuLateral() {
    menuLateral.classList.add("mostrar");
}

function ocultarMenuLateral() {
    menuLateral.classList.remove("mostrar");
}

function toggleNavLinks() {
    navlinks.classList.toggle("mostrar");
}

function arreglarNavLinks() {
    if (window.innerWidth >= 900) {
        navlinks.classList.remove("mostrar");
    }
}

function cargarDatos() {
    var datos = [
        { url: "//unal.edu.co", nombre: "UNAL", instruccion: "Instruccion UNAL" },
        { url: "//css-trick.co,", nombre: "CSS Tricks", instruccion: "Instruccion CSS-Tricks" },
        { url: "assets/uploads/actividades/actividad-normal/index.html", nombre: "Determina la operacion", instruccion: "Fijate en los numeros y  selecciona el numero indicado:" },
        { url: "assets/uploads/actividades/actividad-canvas/index.html", nombre: "Actividad canvas", instruccion: "Fijate en los numeros y  selecciona el numero indicado:" }
    ];
    return datos;
}
function generarLinks() {
    var menulinks = document.getElementById("menu-links");
    menulinks.innerHTML = "";

    var links = cargarDatos();
    console.table(links);

    if(links.length > 0) {
        for(var i = 0; i < links.length; i++) {
            var texto = document.createTextNode(links[i].nombre);

            var link = document.createElement("a");
            link.href = links[i].url;
            link.target = "main-iframe";
            link.appendChild(texto);

            var itemLista = document.createElement("li");
            itemLista.appendChild(link);

            menulinks.appendChild(itemLista);
        } 
    } else  {
        var texto = document.createTextNode("No se ha encontrado ninguna actividad");
        var itemLista = document.createElement("li");
        itemLista.appendChild(texto);

        menulinks.appendChild(itemLista);
    }
}
generarLinks();