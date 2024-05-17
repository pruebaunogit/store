// import { products } from './products.js'
import { formatDinero, limitar_descrip } from './utils.js';
// let products = products;
// Actividad: Renderizando los productos con un template string -  ***********// 
const productsSelector = document.getElementById("products");


async function loadProductDetails() {
    try {

        const productsResponse = await fetch('./data/products.json');
        if (!productsResponse.ok) {
            throw new Error('Failed to fetch product details');
        }
        const products = await productsResponse.json();
        // renderProductDetails(products);
        printCards(products, "products");
        limitar_descrip();
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

function createCard(product) {
    return `
    <article class="product-card">
        <a href="details.html?id=${product.id}" >
            <img class="product-img" src="${product.images[0]}" alt="${product.id}" />
                <div class="product-info">
                    <span class="product-title">${product.title}</span>
                    <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                    <span class="price">${formatDinero(product.price)}</span>
                    <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                    Incluye impuesto País y percepción AFIP
                </div>
            </div>
        </a> 
    </article>
    `;
}


// Actividad: Función de renderizado ---************//
function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    arrayOfProducts.sort((a, b) => a.title.localeCompare(b.title));
    for (const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

// printCards(products, "products");

export { printCards, loadProductDetails }