
const primerColorFondo = function (event) {
    document.body.style.backgroundColor = event.target.value;
};

const cambiarColorFondo = function (color) {
    document.body.style.backgroundColor = color;
};

const primerColorTitulos = function (event) {
    let colorSeleccionado = event.target.value;
    const titulos = document.querySelectorAll("h1");
    for (let index = 0; index < titulos.length; index++) {
        titulos[index].style.color = colorSeleccionado;
    }
};

const cambiarColorTitulos = function (colorSeleccionado) {
    const titulos = document.querySelectorAll("h1");
    for (let index = 0; index < titulos.length; index++) {
        titulos[index].style.color = colorSeleccionado;
    }
};

const primerColorParrafos = function(event) {
    let colorSeleccionado = event.target.value;
    const parrafos = document.querySelectorAll("p");
    for (let index = 0; index < parrafos.length; index++){
        parrafos[index].style.color = colorSeleccionado;
    }
};

const cambiarColorParrafos = function(colorSeleccionado){
    const parrafos = document.querySelectorAll("p");
    for(let index = 0; index < parrafos.length; index++){
        parrafos[index].style.color = colorSeleccionado;
    }
};

let contadorAumentar = 1;

const aumentarLetra = function (){
    contadorAumentar += 0.005;
    document.body.style.fontSize = `${contadorAumentar}em`;
    const parrafos = document.querySelectorAll("p");
    for (let index = 0; index < parrafos.length; index++){
        parrafos[index].style.fontSize = `${contadorAumentar}em`;
    }
    const titulos = document.querySelectorAll("h1");
    for(let index = 0; index <titulos.length; index++){
        titulos[index].style.fontSize = `${contadorAumentar}em`;
    }
};

let contadorDisminuir = 1;

const disminuirLetra = function (){
    contadorDisminuir -= 0.005;
    document.body.style.fontSize = `${contadorDisminuir}em`;
    const parrafos = document.querySelectorAll("p");
    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].style.fontSize = `${contadorDisminuir}em`;
    }
    const titulos = document.querySelectorAll("h1");
    for (let index = 0; index < titulos.length; index++) {
        titulos[index].style.fontSize = `${contadorDisminuir}em`;
    }
};

const startDOM = () => {

    const btnFondo = document.getElementById("idFondo");
    btnFondo.value = "#ffffff";
    btnFondo.addEventListener("input", primerColorFondo, false);
    btnFondo.addEventListener("change", (event) => cambiarColorFondo(event.target.value), false);
    btnFondo.select();

    const btnTitulos = document.getElementById("idTitulos");
    btnTitulos.value = "#000000";
    btnTitulos.addEventListener("input", primerColorTitulos, false);
    btnTitulos.addEventListener("change", (event) => cambiarColorTitulos(event.target.value), false);
    btnTitulos.select();

    const btnParrafos = document.getElementById("idParrafos");
    btnParrafos.value = "#000000";
    btnParrafos.addEventListener("input", primerColorParrafos, false);
    btnParrafos.addEventListener("change", (event) => cambiarColorParrafos(event.target.value), false);
    btnParrafos.select();

    const btnAumentar = document.getElementById("idBtnAumentar");
    const btnDisminuir = document.getElementById("idBtnDisminuir");

    btnAumentar.addEventListener("click", aumentarLetra, false);
    btnDisminuir.addEventListener("click", disminuirLetra, false);
};

startDOM();