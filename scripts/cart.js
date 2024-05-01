
const cartproducts = JSON.parse(localStorage.getItem("cart")) || [];
console.table(cartproducts);

const contendedorProductosCart = document.getElementById("container-items");


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
            <span style="margin-right: 10px;font-size: 20px;">${product.description}</span>
            <p style="margin-left: auto;">
                <span style="text-align: right;font-size: 20px;font-weight: bold;" >${formatDinero(product.price)}</span>
            </p>
        </div> 
        <input type="number"  class="product-cantidad" value="${ product.quantity}" />
        </div> 
    </article>


    `;
}
createTotalTemplate(cartproducts);
function createTotalTemplate(arrayOfProducts) {
    let total = 0;
    arrayOfProducts.forEach(
        (each) => (total = total + each.price * each.quantity)
    );
    // total = new Intl.NumberFormat("pe-PE", { style: "currency", currency: "PEN" }).format(
    //     total,
    //   );
    document.getElementById("txt-total-cart").textContent =  formatDinero(total);

    // return `
    //     <h4 class="total-title"> Resumen del pedido </h4>
    //     <p class="total-p">Subtotal $ ${total}</p>
    //     <button id="buy" type="button">COMPRAR</button>
    // `;
}

function formatDinero(monto = 0) {
    let montoFormat = 0;
    if( monto >=0){
        montoFormat =  new Intl.NumberFormat("pe-PE", { style: "currency", currency: "PEN" }).format(
            monto,
          );
    }else{
        return 0;
    }
    return "S/ "+montoFormat;
}

/* 
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
    localStorage.setItem("cart", JSON.stringify(cart)); */