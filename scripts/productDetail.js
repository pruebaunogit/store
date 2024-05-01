const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
// console.log(id);

function printDetails(id) {
    const product = products.find((each) => each.id === id);
    // console.log(product)
    const detailsTemplate = `
    <div class="product-images-block">
        <div class="thumbnail-container"> 
            ${product.images.map(
        each => `<img class="miniImg" src="${each}" alt="mini" onclick="changeMini(event)"/>`
    ).join("")} 
        </div>
        <img id="main-image" class="main-image" src="${product.images[0]} " alt="macbok img1" />
    </div>
    <div class="product-description-block">
        <h1 class="title">${product.title}</h1>
        <form class="selector">
            <fieldset>
                <label class="label" for="color">Color</label>
                <select id="color" type="text" placeholder="Selecciona un color">
                ${product.colors.map(
        (each) => `<option value=${each}>${each}</option>`
    ).join("")}
                </select>
            </fieldset>
        </form>
        <div style="width: 100%; display: flex; align-items: center;">
            <h2 style="margin-right: 10px;">Precio:</h2>
            <p style="margin-left: auto;">
                <span style="text-align: right;">${"$" + product.price}</span>
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
        <h2 id="checkout-total-price" class="checkout-total-price">${"$" + product.price}</h2>
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
            <input id="txt_cantidad" type="number" value="1" onchange="changeSubtotal(this)"/>
            <button id="btn_comprar" class="btn-primary">Comprar</button>
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


function changeMini(event) {
    // console.log("imagen mini");
    const selectedSrc = event.target.src;
    // const bigSelector = document.querySelector("#bigImg");
    const bigSelector = document.querySelector("#main-image");
    bigSelector.src = selectedSrc;
}

function changeSubtotal(c) {
    // console.log(c.value);
    // console.log(c);
    const cant_prod = c.value >= 0 ? c.value : 0;
    const product = products.find((each) => each.id === id);
    const subTotal = product.price * cant_prod;
    document.querySelector("#checkout-total-price").textContent = "$" + subTotal;

}

const btn_click_add = document.getElementById("btn-add-cart")
    .addEventListener("click", () => {
        // console.log("aqui");
        saveProduct(id);
    });

function saveProduct(id) {
    const found = products.find((each) => each.id === id);
    // console.log(found);
    const product = {
        id: id,
        title: found.title,
        price: found.price,
        image: found.images[0],
        // color: document.querySelector("#color-" + id).value,
        color: document.querySelector("#color").value,
        // quantity: document.querySelector("#quantity-" + id).value,
        quantity: document.querySelector("#txt_cantidad").value,
    };
    const stringifyProduct = JSON.stringify(product);
    // console.log(stringifyProduct);
    localStorage.setItem("cart", stringifyProduct);
    // console.log(localStorage.getItem("cart"));

}

function saveProduct(id) {
    const found = products.find((each) => each.id === id);
    const product = {
        id: id,
        title: found.title,
        price: found.price,
        image: found.images[0],
        color: document.querySelector("#color").value,
        quantity: document.querySelector("#txt_cantidad").value,
    };

    //obtener el cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Verificar si ya existe el carrito
    if (cart && cart.length > 0) {
        // Si el carrito existe, agregar el nuevo 
        cart.push(product);
    } else {
        // Si el carrito no existe, crear uno nuevo
        cart = [product];
    }

    // const stringifyProduct = JSON.stringify(product);
    // localStorage.setItem("cart", stringifyProduct);

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

}