// import {products} from './products.js'
import {printCards ,loadProductDetails} from './productCards.js'
import { limitar_descrip } from './utils.js';
// captureText();
let searchSelector = document.getElementById('search');
// searchSelector.addEventListener("keyup", captureText);
searchSelector?.addEventListener("keyup", event=>captureText(event));


export function captureText(event) {
    const searchText = event.target.value.toLowerCase(); // Captura el texto introducido y convierte a minúsculas
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchText)); // Filtra los productos cuyo título incluye el texto capturado
    filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    printCards(filteredProducts, "products"); // Actualiza la vista con los productos filtrados
    limitar_descrip()
}

