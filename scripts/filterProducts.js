/* event.key: Esta propiedad devuelve la tecla que se ha soltado como una cadena de texto. Por ejemplo, si se suelta la tecla "a", event.key contendrá la cadena "a".
event.keyCode: Es una propiedad obsoleta que devuelve el código de la tecla que se ha soltado. Se ha dejado de usar en favor de event.key.
event.which: Otra propiedad obsoleta similar a event.keyCode, que también devuelve el código de la tecla que se ha soltado.
event.shiftKey, event.ctrlKey, event.altKey, event.metaKey: Estas propiedades booleanas indican si las teclas Shift, Ctrl, Alt (o Option en Mac) y Meta (tecla de comando en Mac) están presionadas al mismo tiempo que la tecla que se suelta.
event.target: Esta propiedad devuelve una referencia al elemento DOM que recibió el evento. Puede ser útil si deseas manipular el elemento que recibió la entrada del teclado.
 */
/* function captureText(e){
    // console.log(e);
    const events_key ={
        key: e.key,
        keyCode: e.keyCode,
        which: e.which,
        shiftKey : e.shiftKey,
        target_value: e.target.value,
        innerHTML:e.target.outerHTML,
        innerHTML:e.target.type
    }

    return console.table(events_key);
} */

// captureText();
let searchSelector = document.getElementById('search');
// searchSelector.addEventListener("keyup", captureText);
searchSelector.addEventListener("keyup", event=>captureText(event));


function captureText(event) {
    const searchText = event.target.value.toLowerCase(); // Captura el texto introducido y convierte a minúsculas
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchText)); // Filtra los productos cuyo título incluye el texto capturado
    printCards(filteredProducts, "products"); // Actualiza la vista con los productos filtrados
}

