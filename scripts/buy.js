import { cartproducts } from './cart.js'

const btn_click_comprar = document.getElementById("btn_comprar")
    .addEventListener("click", () => {
        Swal.fire({
            title: "Se procederá a finalizar la compra, ¿Estás seguro de continuar?",
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Cancelar",
            // denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                
                cartproducts.length = 0; 
                // Borrar todos los productos del localStorage
                localStorage.removeItem("cart");
                Swal.fire("Compra realizada!", "", "success");
                document.getElementById("msj-n-h").textContent = 'Gracias por su compra';
                document.getElementById("product-container-cart").style.display = 'none';
                document.getElementById("msj_no_hay_productos").style.display = 'block';
            } /* else if (result.isDismissed) {
                Swal.fire("Changes are not saved", "", "info");
            } */
        });
 
    })

export function verificarProductos() {

    if (cartproducts.length <= 0) {
        document.getElementById("msj_no_hay_productos").style.display = 'block';
        document.getElementById("product-container-cart").style.display = 'none';
    } else {
        document.getElementById("msj_no_hay_productos").style.display = 'none';
        document.getElementById("product-container-cart").style.display = 'inline-flex';
    }
} 
