// Actividad: Renderizando los productos con un template string -  ***********// 
const productsSelector = document.getElementById("products");

/* let productsTemplate = `
<article class="product-card">
            <a class="product-card" href="details.html">
              <img
                class="product-img"
                src="assets/mock1.jpg"
                alt="Macbook Pro"
              />
              <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                  <span class="price">$750.000</span>
                  <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </a>
          </article>
          <article class="product-card">
            <a class="product-card" href="details.html">
              <img
                class="product-img"
                src="assets/mock2.jpg"
                alt="Macbook Pro"
              />
              <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                  <span class="price">$750.000</span>
                  <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </a>
          </article>
`;

productsSelector.innerHTML = productsTemplate; */


// Actividad: Renderizar los productos de forma dinámica  -- **************//
/*  
constructor(id, title, price, stock, images, onsale, supplier, colors, description) 
const prod1 = new Product('1', 'Macbook Pro 15"4', 7500.00, 70, 
['assets/mock1.jpg', 'assets/mock2.jpg', 'assets/mock1.jpg']
, true, 'Apple',['gray','gold'],'Space Gray'); 
*/
function createCard(product) {
    return `
    <article class="product-card">
        <a href="details.html?id=${product.id}" class="product-card">
            <img class="product-img" src="${product.images[0]}" alt="${product.id}" />
                <div class="product-info">
                    <span class="product-title">${product.title}</span>
                    <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                    <span class="price">${product.price}</span>
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

/* let productsTemplate = "";
for (const element of products) {
    productsTemplate = productsTemplate + createCard(element)
}

productsSelector.innerHTML = productsTemplate; */

// Actividad: Función de renderizado ---************//
function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

printCards(products, "products");