{/* <script src="scripts/perfil.js"></script> */}
{/* <script src="scripts/products.js"></script>
<script src="scripts/productCards.js"></script>
<script src="scripts/layout.js"></script>
<script src="scripts/filterProducts.js"></script> */}

import verificarLogin from './scripts/perfil.js'
import {generarMenus} from './scripts/layout.js' 
import {printCards} from './scripts/productCards.js'
import {captureText} from './scripts/filterProducts.js'

import { limitar_descrip } from './scripts/utils.js'

generarMenus() 
// let productos_seleccionados = obj_products;
// printCards(productos_seleccionados, "products");
// verificarLogin();

limitar_descrip()
