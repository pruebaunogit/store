const btn_click_comprar = document.getElementById("btn_comprar")
    .addEventListener("click", () => {
        // borrar todos los productos del array cartproducts
        cartproducts = [];

        // Borrar todos los productos del localStorage
        // localStorage.removeItem("cart");
        localStorage.clear();

        // actualizar la impresión de las tarjetas de productos del carrito (sin productos)
        // printItemsCart(cartproducts, "products");
        // actualizar la impresión del cuadro de detalle del total (sumando cero)
        // createTotalTemplate(cartproducts);

        // Condiciona el renderizado de la vista para que informe al usuario que no hay productos en el carrito cuando efectivamente no hay productos en el localStorage.

        document.getElementById("msj-n-h").textContent = 'Gracias por su compra';        
        document.getElementById("product-container-cart").style.display = 'none';
        document.getElementById("msj_no_hay_productos").style.display = 'block';
        // verificarProductos();
        // verificarProductos();
    })

function verificarProductos() { 
    // console.log("vP");
    setTimeout(()=>{document.getElementById("msj-n-h").textContent = 'No hay productos'; }, 5000);
    // localStorage.clear()
    if (cartproducts.length <= 0) {
        document.getElementById("msj_no_hay_productos").style.display = 'block';
        document.getElementById("product-container-cart").style.display = 'none';
    }else{
        document.getElementById("msj_no_hay_productos").style.display = 'none';
        document.getElementById("product-container-cart").style.display = 'inline-flex';
    }
}
verificarProductos();