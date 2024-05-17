{/* <script src="scripts/perfil.js"></script> */}
{/* <script src="scripts/products.js"></script>
<script src="scripts/productCards.js"></script>
<script src="scripts/layout.js"></script>
<script src="scripts/filterProducts.js"></script> */}


import {generarMenus} from './scripts/layout.js' 
// import verificarLogin from './scripts/perfil.js'
import {printCards,loadProductDetails} from './scripts/productCards.js'
import {captureText} from './scripts/filterProducts.js'



generarMenus() 
// let productos_seleccionados = obj_products;
// printCards(productos_seleccionados, "products");
// verificarLogin();
loadProductDetails()
// limitar_descrip()
