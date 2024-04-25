
//   *****  Renderizando la barra de navegación del store
/* Analiza el código del archivo index.html e identifica la etiqueta que es “padre” de las opciones de navegación.  ==> class='nav'

Asigna a esa etiqueta un id=”nav” para usar como selector de JavaScript. 

Crea el archivo layout.js en la carpeta scripts y conectalo con la vista principal.

Abre el archivo layout.js y define una variable navSelector, para seleccionar con el método getElementById la etiqueta correspondiente donde se renderizará la barra de navegación.  */

let navSelector = document.getElementById('nav');

/* 
Crea una variable options, para guardar un array de objetos. Cada objeto representará los datos de un botón con las propiedades:
text: para el texto del botón
linkTo: para el link de direccionamiento */

{/* <li><a href="#">Ofertas de la semana</a></li>
            <li><a href="#">Cómo comprar</a></li>
            <li><a href="#">Costos y tarifas</a></li>
            <li><a href="#">Mis pedidos</a></li>
            <li><a href="#">Garantía</a></li> */}
const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auticulares"] },
    { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envios", "Devoluciones"] },
    { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturación"] },
    { title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"] },
    { title: "Garantía", linkTo: "./warranty.html", opts: [] },
];

// Itera con for of, de manera que cada iteración:
{/* <a href="#" class="nav-button" >Ofertas de la semana</a> */}
for (let option of options) {
    const anchor = document.createElement("a"); //Crea las etiquetas correspondientes con el método createElement 
    anchor.className = "nav-button"; // y las propiedades/estilos correspondientes.
    anchor.textContent = option.title; // Asigna el texto de la propiedad title de cada objeto con la propiedad textContent
    anchor.href = option.linkTo; // Define la propiedad href hacia la propiedad linkTo de cada objeto.
    navSelector.appendChild(anchor); // Luego “agregar un hijo”  al navSelector
}


//   *****  Actividad: Renderizando el pie de página del store
/* Analiza el código del archivo index.html e identifica la etiqueta que es “padre” de las columnas del pie de página.

Asigna a esa etiqueta un id=”footer” para usar como selector de JavaScript. 
Abre el archivo layout.js y define una variable footerSelector, para seleccionar con el método getElementById la etiqueta correspondiente donde se renderizará el pie de página.
*/


/*
<div class="col">
    <ul>
        <li class="col-main-item">
        <a href="#">Ofertas de la semana</a>
        </li>
        <li><a href="#">Laptops</a></li>
        <li><a href="#">Audio</a></li>
        <li><a href="#">Auticulares</a></li>
    </ul>
</div> 
*/
let div_col_log;
function crearMenuFooter() {
    // Itera con for of, de manera que cada iteración:
    for (let option of options) {

        const div_col = document.createElement("div");
        div_col.className = "col";
        const ul_col = document.createElement("ul");
        // ul_col.className = "col";
        const li_col = document.createElement("li");
        li_col.className = "col-main-item";

        const anchor = document.createElement("a"); //Crea las etiquetas correspondientes con el método createElement 
        anchor.className = "fotter-option"; // y las propiedades/estilos correspondientes.
        anchor.textContent = option.title; // Asigna el texto de la propiedad title de cada objeto con la propiedad textContent
        anchor.href = option.linkTo; // Define la propiedad href hacia la propiedad linkTo de cada objeto.


        // footerSelector.appendChild(anchor); // Luego “agregar un hijo”  al navSelector
        // div_col.appendChild(anchor); // Luego “agregar un hijo”  al navSelector
        li_col.appendChild(anchor); // Luego “agregar un hijo”  al navSelector 
        ul_col.appendChild(li_col);
        // Las opciones de cada columna se deben mapear con otro for of.
        for (let sub_option of option.opts) {
            const s_li_col = document.createElement("li");
            // s_li_col.className = "col-main-item";


            const s_anchor = document.createElement("a"); //Crea las etiquetas correspondientes con el método createElement 
            s_anchor.className = "fotter-option"; // y las propiedades/estilos correspondientes.
            s_anchor.textContent = sub_option; // Asigna el texto de la propiedad title de cada objeto con la propiedad textContent
            // s_anchor.href = option.linkTo; // Define la propiedad href hacia la propiedad linkTo de cada objeto.
            // footerSelector.appendChild(s_anchor);
            // div_col.appendChild(s_anchor);
            s_li_col.appendChild(s_anchor);
            ul_col.appendChild(s_li_col);
        }

        div_col.appendChild(ul_col);
        // console.log(div_col);
        footerSelector.appendChild(div_col); // Luego “agregar un hijo”  al navSelector
        // div_col_log =footerSelector;
    }
}

function crearMenuFooter2() {
    const footerSelector = document.querySelector("#footer");

    for (let option of options) {
        const div_col = document.createElement("div");
        div_col.className = "col";

        const ul_col = document.createElement("ul");

        const li_col = crearListItem(option.title, option.linkTo);
        li_col.classList.add("col-main-item");

        ul_col.appendChild(li_col);

        for (let sub_option of option.opts) {
            const s_li_col = crearListItem(sub_option);
            ul_col.appendChild(s_li_col);
        }

        div_col.appendChild(ul_col);
        footerSelector.appendChild(div_col);
    }
}

function crearListItem(texto, enlace) {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.className = "fotter-option";
    anchor.textContent = texto;
    if (enlace) {
        anchor.href = enlace;
    }
    li.appendChild(anchor);
    return li;
}

// crearMenuFooter2();

function cargarFooterHTML() { 
    // Utilizando Fetch API para cargar el contenido del partial.html
    fetch('partialFooter.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del partial en el div con ID 'container'
            document.getElementById('container-footer').innerHTML = data;
            crearMenuFooter2();
        })
        .catch(error => {
            console.error('Error al cargar el contenido parcial:', error);
        }); 
    
}

cargarFooterHTML();