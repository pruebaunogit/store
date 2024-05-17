import { generarMenus } from './layout.js'
// import { products } from './products.js'
import { verificarProductos } from './buy.js'
import { formatDinero, limitar_descrip } from './utils.js';
generarMenus();


let cartproducts = JSON.parse(localStorage.getItem("cart")) || [];
// console.table(cartproducts);
if (cartproducts) {
    verificarProductos();
}
let favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || [];
console.table(favoriteProducts);

const contendedorProductosCart = document.getElementById("container-items");

const contenedorFavoritos = document.getElementById("container-favoritos");

loadProductDetails()
let products;
async function loadProductDetails() {
    try {

        const productsResponse = await fetch('./data/products.json');
        if (!productsResponse.ok) {
            throw new Error('Failed to fetch product details');
        }
        // const products = await productsResponse.json();
        products = await productsResponse.json();
        printFavorites();
        limitar_descrip()
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

function printItemsCart(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createItem(element);
    }
    // const productsSelector = document.getElementById(idSelector);
    contendedorProductosCart.innerHTML = productsTemplate;
}

printItemsCart(cartproducts, "products");
function createItem(product) {
    return ` 
    <article id ="cartproducts" class="product-card-cart">
        <img
        class="product-img-cart"
        src="${product.image}"
        alt="${product.id}"
        />
        <div class="product-info-cart">
        <span class="product-title">${product.title}</span> 
        <span class="product-color"> ${product.color}</span>
        <div style="width: 100%; display: flex; align-items: center;">
            <span style="margin-right: 10px;font-size: 20px;"> </span>
            <p style="margin-left: auto;">
                <span style="text-align: right;font-size: 20px;font-weight: bold;" >${formatDinero(product.price)}</span>
            </p>
        </div> 
        <input id="${product.id}" type="number"  class="product-cantidad" value="${product.quantity}"  "/>
        <button id="btn_favorito${product.id}"  class="btn-favorito" data-value="${product.id}" >Agregar a Favoritos <i class="fa-regular fa-star"></i></button>
        </div> 

        
    </article>


    `;
}
createTotalTemplate(cartproducts);
function createTotalTemplate(arrayOfProducts) {
    /* let total = 0;
    arrayOfProducts.forEach(
        (each) => (total = total + each.price * each.quantity)
    ); */
    const suma_total = arrayOfProducts.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
    );
    document.getElementById("txt-total-cart").textContent = formatDinero(suma_total);
}



const cantidad_selectores = document.querySelectorAll('.product-cantidad');
cantidad_selectores.forEach((selector) => {
    selector.addEventListener("change", (event) => {
        // console.log(event.target.dataset);
        return changeQuantity(event)
        // return addFavorito(event.target.dataset.value)
    })
})

function changeQuantity(e) {
    let index = -1;
    // buscar el producto en el array cartproducts con el id correspondiente
    // let item = cartproducts.find((each) => each.id === e.target.id );
    let item = cartproducts.find((item, i) => {
        if (item.id === e.target.id) {
            index = i;
            return true; // Detiene la iteración
        }
    });
    // al producto encontrado: modificar la cantidad
    item.quantity = e.target.value
    // actualizar los productos guardados en localStorage
    cartproducts[index] = item
    localStorage.setItem("cart", JSON.stringify(cartproducts));
    console.table(JSON.parse(localStorage.getItem("cart")));
    createTotalTemplate(cartproducts);

    Swal.fire({
        text: "Cantidad modificada",
        icon: 'success',
        toast: true,
        timer: 3000,
        background: 'green',
        color: 'white',
        position: 'top-end',
        showConfirmButton: false
    });


}


const favoritos_selectores = document.querySelectorAll('.btn-favorito');
favoritos_selectores.forEach((selector) => {
    selector.addEventListener("click", (event) => {
        // console.log(event.target.dataset);
        return addFavorito(event.target.dataset.value)
    })
})

function addFavorito(id) {

    // const found = products.find((each) => each.id === id);
    const fav_product = {
        id: id
    };

    //obtener el cart
    let favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    // Verificar si ya existe el carrito
    if (favoriteProducts && favoriteProducts.length > 0) {
        // Si el carrito existe, agregar el nuevo 
        favoriteProducts.push(fav_product);
    } else {
        // Si el carrito no existe, crear uno nuevo
        favoriteProducts = [fav_product];
    }

    // const stringifyProduct = JSON.stringify(product);
    // localStorage.setItem("cart", stringifyProduct);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));

    // let favoriteProducts = JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    printFavorites();
    alert("Se agregó a favoritos")
}

function printFavorites() {
    // debugger;
    let arrayOfFavorites = JSON.parse(localStorage.getItem("favoriteProducts")) || [];

    let favoriteTemplate = "";
    arrayOfFavorites.sort((a, b) => b.id - a.id);
    // for (const element of arrayOfFavorites) {
    for (let i = Math.min(arrayOfFavorites.length, 3) - 1; i >= 0; i--) {
        const element = arrayOfFavorites[i];
        const item_fav = products.find((each) => each.id == element.id);
        favoriteTemplate = favoriteTemplate + createItemFavorite(item_fav);

    }
    // const productsSelector = document.getElementById(idSelector);
    contenedorFavoritos.innerHTML = favoriteTemplate;
}

function createItemFavorite(product) {
    return ` 
    <article class="product-card">
        <a   href="details.html">
            <img
            class="product-img"
            src="${product.images[0]}"
            alt="${product.id}"
            />
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
// printFavorites();

export { cartproducts }