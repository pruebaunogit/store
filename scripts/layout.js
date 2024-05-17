import {verificarLogin,crearListenersPerfil} from './perfil.js'
let navSelector = document.getElementById('nav');
 
const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auticulares"] },
    { title: "Cómo comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envios", "Devoluciones"] },
    { title: "Costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturación"] },
    { title: "Mis pedidos", linkTo: "./orders.html", opts: ["Pedir nuevamente", "Lista de deseos"] },
    { title: "Garantía", linkTo: "./warranty.html", opts: [] },
];
async function loadData() {
    try {
        const response = await fetch('./data/options.json');
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
let jsonData;
// Función para cargar la data y asignarla a la constante global usando async/await
async function generarMenus() {
    try {
        jsonData = await loadData();
        // console.log(jsonData); // Acceso a la data dentro de la función
        cargarHeaderHTML(jsonData);
        // render_nav_menu(jsonData);
        cargarFooterHTML(jsonData);
        
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
} 

// Itera con for of, de manera que cada iteración:
/* <a href="#" class="nav-button" >Ofertas de la semana</a> */
const render_nav_menu = (options) => {
    let navSelector = document.getElementById('nav');
    for (let option of options) {
        const anchor = document.createElement("a"); //Crea las etiquetas correspondientes con el método createElement 
        anchor.className = "nav-button"; // y las propiedades/estilos correspondientes.
        anchor.textContent = option.title; // Asigna el texto de la propiedad title de cada objeto con la propiedad textContent
        anchor.href = option.linkTo; // Define la propiedad href hacia la propiedad linkTo de cada objeto.
        navSelector.appendChild(anchor); // Luego “agregar un hijo”  al navSelector
    }
}
 
 
let div_col_log; 

function crearMenuFooter2(options) {
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

function cargarFooterHTML(options) {
    // Utilizando Fetch API para cargar el contenido del partial.html
    fetch('./partials/partialFooter.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del partial en el div con ID 'container'
            document.getElementById('container-footer').innerHTML = data;
            crearMenuFooter2(options);
        })
        .catch(error => {
            console.error('Error al cargar el contenido parcial:', error);
        });

}
 
function cargarHeaderHTML(jsonData) {
    // Utilizando Fetch API para cargar el contenido del partial.html
    fetch('./partials/partialHeader.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del partial en el div con ID 'container'
            // document.getElementById('container-header').innerHTML = data; 
            document.querySelector('.container-header').innerHTML = data;
            render_nav_menu(jsonData); 
            verificarLogin();
            crearListenersPerfil();
        })
        .catch(error => {
            console.error('Error al cargar el contenido parcial:', error);
        });

}

export { generarMenus }