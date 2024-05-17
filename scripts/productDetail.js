import {generarMenus} from './layout.js'  
import {products} from './products.js'
import { formatDinero } from './utils.js';
generarMenus() 
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
// console.log(id);


function printDetails(id) {
    const product = products.find((each) => each.id == id);
    // console.log(product)
    const detailsTemplate = `
    <div class="product-images-block">
        <div class="thumbnail-container"> 
            ${product.images.map(
        each => `<img class="miniImg" src="${each}" alt="mini" />`
    ).join("")} 
        </div>
        <img id="main-image" class="main-image" src="${product.images[0]} " alt="macbok img1" />
    </div>
    <div class="product-description-block">
        <h1 class="title">${product.title}</h1> 
        <form class="product-selector">
            <fieldset class="product-fieldset">
            <label class="product-label" for="color">Color</label>
            <select
                class="product-select"
                type="text"
                placeholder="Selecciona un color"
                id="color"
            >
            ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
            </select>
            </fieldset>
        </form>
        <div style="width: 100%; display: flex; align-items: center;">
            <h2 style="margin-right: 10px;">Precio:</h2>
            <p style="margin-left: auto;">
                <span style="text-align: right;">${formatDinero(product.price)}</span>
            </p>
        </div>
        <div class="description">
            <h2>Descripción:</h2>
            <p>
                ${product.description}
            </p>
        </div>
    </div>
    <div class="product-checkout-block">
        <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 id="checkout-total-price" class="checkout-total-price">${formatDinero(product.price)}</h2>
        <p class="checkout-description">
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
            50711 haciendo la solicitud en AFIP.
        </p>
        <ul class="checkout-policy-list">
            <li>
            <span class="policy-icon"
                ><img src="assets/truck.png" alt="Truck"
            /></span>
            <span class="policy-desc"
                >Agrega el producto al carrito para conocer los costos de
                envío</span
            >
            </li>
            <li>
            <span class="policy-icon"
                ><img src="assets/plane.png" alt="Plane"
            /></span>
            <span class="policy-desc"
                >Recibí aproximadamente entre 10 y 15 días hábiles,
                seleccionando envío normal</span
            >
            </li>
        </ul>
        <div class="checkout-process">
            <div class="top">
            <input id="txt_cantidad" type="number" value="1"  />
            <!--<button id="btn_comprar" class="btn-primary">Comprar</button>-->
            </div>
            <div class="bottom">
            <button id="btn-add-cart" class="btn-outline">Añadir al Carrito</button>
            </div>
        </div>
        </div>
    </div>
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}
printDetails(id)


const miniimgs = document.querySelectorAll(".miniImg");
miniimgs.forEach((mini)=> mini.addEventListener("click", (event)=>{
    changeMini(event)
}))

function changeMini(event) {
    // console.log("imagen mini");
    const selectedSrc = event.target.src;
    // const bigSelector = document.querySelector("#bigImg");
    const bigSelector = document.querySelector("#main-image");
    bigSelector.src = selectedSrc;
}

function changeSubtotal(event) {
    // console.log(c.value);
    // console.log(c);
    const cant_prod = event.target.value >= 0 ? event.target.value : 0;
    const product = products.find((each) => each.id == id);
    const subTotal = product.price * cant_prod;
    document.querySelector("#checkout-total-price").textContent =  formatDinero(subTotal);

}



const txt_cantidad = document.getElementById("txt_cantidad")
    .addEventListener("change", (event) => {
        // console.log("aqui");
        changeSubtotal(event);
    });

const btn_click_add = document.getElementById("btn-add-cart")
    .addEventListener("click", () => {
        // console.log("aqui");
        saveProduct(id);
    });

function saveProduct(id) {
    let index = -1;
    const found = products.find((each, i) => each.id == id);
    const product = {
        id: id,
        title: found.title,
        price: found.price,
        image: found.images[0],
        description: found.description,
        color: document.querySelector("#color").value,
        quantity: document.querySelector("#txt_cantidad").value,
    };

    //obtener el cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.table(cart);
    // Verificar si ya existe el carrito
    if (cart && cart.length > 0) {
        let index = -1;
        // Si el carrito existe, agregar o modificar el producto
        let item = cart.find((item, i) => {
            if (item.id === id) {
                index = i;
                return true; // Detiene la iteración
            }
        }); 
        if(item){
            console.log("aqui if");
            item.quantity = parseInt(item.quantity) + parseInt(document.querySelector("#txt_cantidad").value ?? 0);
            cart[index] = item
            localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
                icon: 'warning',    
                text: "El producto ya se encuentra en el carrito de compras!!,\n se actualizó la cantidad",
            });
            return;

        }else{
            console.log("aqui else");
            cart.push(product);
        }
        
    } else {
        // Si el carrito no existe, crear uno nuevo
        cart = [product];
    }

    // const stringifyProduct = JSON.stringify(product);
    // localStorage.setItem("cart", stringifyProduct);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
 
    Swal.fire("se agregó el producto al carrito de compras");

}