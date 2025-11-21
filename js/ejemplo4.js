
const btnAgregarPagina = document.querySelector("#idAgregarPagina");
const btnMenu = document.querySelector("#idAgregarMenu");
const btnTitulo = document.querySelector("#idAgregarTitulo");
const btnParrafo = document.querySelector("#idAgregarParrafo");

const pagina = document.querySelector("#idPagina");

btnAgregarPagina.onclick = function() {
    const contenedorVerificando = document.querySelector("idDivPage");

    if (!contenedorVerificando) {
        const contenedor = document.createElement("div");
        contenedor.setAttribute("id", "idDivPage");
        contenedor.setAttribute("class", "container");
        contenedor.setAttribute(
            "style",
            "border:solid 1px black; height:500px; overflow: scroll; overflow-x: hidden;"
        );

        pagina.appendChild(contenedor);
    } else {
        alert("Ya se agrego el contenedor de la pagina");
    }
};

btnMenu.onclick = function (){
    const contenedor = document.querySelector("#idDivPage");

    if(contenedor) {
        const menuVerificar = document.querySelectorAll("#idDivPage > header" );

        if (menuVerificar.length == 0){
            const menu = document.querySelector("header").cloneNode(true);
            contenedor.appendChild(menu);
        } else {
            alert("Ya ha sido agregado el menu");
        }
    } else {
        alert("Primero debe agregar un contenedor de pagina");
    }
};

btnTitulo.onclick = function() {
     const contenedor = document.querySelector("#idDivPage");

     const menu = document.querySelectorAll("#idDivPage > header");

     if (contenedor) {
        if (menu.length > 0) {
            let titulo = prompt("Agregue el titulo de ka pagina");

            if (titulo != "" && titulo !=null) {
                const h1 = document.createElement("h1");

                h1.setAttribute("class", "display-5 text-center fw-bold py-4 my-4");
                h1.innerHTML = titulo;

                contenedor.appendChild(h1);
            } else {
                alert( "No se ha registrado ningun titulo, por favor ingrese informacion");
            }
        } else {
            alert ("Debe agregar un menu primero");
        }
     } else {
        alert ("Primero debe agregar un contenedor de pagina");
     }
};

btnParrafo.onclick = function (){
    const contenedor = document.querySelector("#idDivPage");

    const menu = document.querySelectorAll("#idDivPage > header");

    if(contenedor) {
        if(menu.length > 0){
            let texto = prompt("Agregue un parrafo a su pagina web");
            
            if(texto != "" && texto != null){
                const parrafo = document.createElement("p");

                parrafo.setAttribute("class", "lead mb-4 py-4");
                parrafo.innerHTML = texto;

                contenedor.appendChild(parrafo);
            } else{
                alert("No se ha registrado ningun parrafo, por favor ingrese informacion");
            }
        } else{
            alert("Debe agregar un menu primero");
        }
    }else {
        alert("Primero debe agregar un contenedor de pagina");
    }
};