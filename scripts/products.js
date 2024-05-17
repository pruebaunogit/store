/* const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
};

producto1.id = "id123";
producto1['foto'] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp"; */

// console.log(producto1);


class Product {
    constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this._supplier = supplier;
        this.colors = colors;
        this.description = description;
    }
    get getSupplier() {
        return this._supplier;
    }
    set setSupplier(newName) {
        this._supplier = newName;
    }

    sellUnits(units) {
        if (this.stock > 0) {
            if (this.stock - units < 0) {
                return 'No hay suficiente stock';
            }
            this.stock = this.stock - units;

            return 'Stock calculado';
        } else {
            return 'No hay stock';
        }

    }
}

// const prod1 = new Product('1', 'Macbook Pro 15"4', 5500.00, 70, ['assets/mock1.jpg', 'assets/mock2.jpg', 'assets/mock1.jpg'], true, 'Apple');
// const prod2 = new Product('2', 'prod 2', 50.0, ['prod2.jpg'], false, 'Xiaomi');
// const prod3 = new Product('3', 'prod 3', 100.0, 20, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", true);

// console.log(prod2);
// console.log(prod3);
// console.log(prod2.title);
// console.log(prod3.onsale);

// const prod4 = new Product('4', 'Laptop', 999.00, 10, ['laptop.jpg'], true, 'Lenovo' );
// console.log(prod4);
// prod4.setSupplier = 'ASUS';
// console.log(prod4.getSupplier);

// const prod5 = new Product('5', 'iPhone 15 Pro', 4500.00, 12, ['iphone15pro.jpg'], true, 'Apple' );
/* console.log(prod5.stock);
let sell1 = prod5.sellUnits(10);
console.log(sell1);
let sell2 = prod5.sellUnits(5);
console.log(sell2);
console.log(prod5); */

// ***** Listado de productos en la tienda
/* const products = [prod1, prod2, prod3, prod4, prod5];
console.log(products); // impresión en consola del array completo.
console.log(products[1]); //impresión del segundo elemento del array.
console.log(products[products.length-1].title); //la impresión de la propiedad title del último elemento del array. 
 */

// ***** Ampliando la lista de productos
// const products = [prod1, prod2, prod3, prod4];

// const prod5 = new Product('5', 'iPhone 15 Pro', 4500.00, 12, ['iphone15pro.jpg'], true, 'Apple');
// const prod6 = new Product('5', 'Pixel 8 Pro', 3500.00, 5, ['pixel8pro.jpg'], true, 'Google' );
/* 
products.unshift(prod5); //Agrega prod5 al inicio del array utilizando el método unshift.
products.push(prod6); //Agrega prod6 al final del array utilizando el método push. 
console.log(products);
 */
// ***** Eliminación de productos de una lista 

// products.shift(); // quita el primer elemento del array utilizando el método shift. 
// products.pop(); // Quita el último elemento del array utilizando el método pop. 
// console.log(products);


// ***** Enriquecimiento de información de productos
// const prod5 = new Product('5', 'iPhone 15 Pro', 4500.00, 12, ['iphone15pro.jpg'], true, 'Apple');
// Define los arrays de imágenes
// prod5.colors = ['red', 'black', 'purple', 'gold'];
// prod5.description = 'De alta gama';


const prod1 = new Product('1', 'Macbook TEST Pro 15"4', 7500.00, 70, ['assets/mock1.jpg', 'assets/mock2.jpg', 'assets/mock1.jpg'], true, 'Apple', ['gray', 'gold'], 'Space Gray');
const prod2 = new Product('2', 'Macbook Air 13"', 5500.00, 70, ['assets/mock2.jpg', 'assets/mock2.jpg', 'assets/mock1.jpg'], true, 'Apple', ['gray', 'gold'], 'Space Gray');
const prod3 = new Product('3', 'Macbook Pro 15"4', 7500.00, 70, ['assets/mock1.jpg', 'assets/mock2.jpg', 'assets/mock1.jpg'], true, 'Apple', ['gray', 'gold'], 'Space Gray');
const prod4 = new Product('4', 'Macbook Air 13"', 5500.00, 70, ['assets/mock2.jpg', 'assets/mock2.jpg', 'assets/mock1.jpg'], true, 'Apple', ['gray', 'gold'], 'Space Gray');
const prod5 = new Product('5', 'Macbook Pro 15"4', 7500.00, 70, ['assets/mock1.jpg', 'assets/mock2.jpg', 'assets/mock1.jpg'], true, 'Apple', ['gray', 'gold'], 'Space Gray');
const prod6 = new Product('6', 'Macbook Air 13"', 5500.00, 70, ['assets/mock2.jpg', 'assets/mock2.jpg', 'assets/mock1.jpg'], true, 'Apple', ['gray', 'gold'], 'Space Gray');
// const products = [prod1, prod2, prod3, prod4, prod5, prod6];

// Creating 6 Apple products
const products = [
    new Product(
        1,
        "iPhone 13 Pro",
        999,
        50,
        ["./assets/iphone13pro.webp",
        "./assets/iphone13pro2.webp",
        "./assets/iphone13pro3.webp"
        ],
        true,
        "Apple Inc.",
        ["Graphite", "Silver", "Gold", "Sierra Blue"],
        "The iPhone 13 Pro is the latest flagship smartphone from Apple, featuring a stunning Super Retina XDR display, A15 Bionic chip, and advanced camera system."
    ),
    new Product(
        2,
        "MacBook Pro 16-inch",
        2399,
        30,
        ["./assets/macbookpro16.webp",
        "./assets/macbookpro162.webp",
        "./assets/macbookpro163.webp"
        ],
        false,
        "Apple Inc.",
        ["Space Gray", "Silver"],
        "The MacBook Pro 16-inch is a powerful laptop designed for professionals, with a stunning Retina display, up to 64GB of memory, and a range of powerful processors."
    ),
    new Product(
        3,
        "iPad Air",
        599,
        60,
        ["./assets/ipadair.webp",
        "./assets/ipadair2.webp",
        "./assets/ipadair3.webp"
        ],
        true,
        "Apple Inc.",
        ["Space Gray", "Silver", "Rose Gold", "Green", "Sky Blue"],
        "The iPad Air offers a perfect balance of power and portability, featuring the powerful A14 Bionic chip, a beautiful Liquid Retina display, and support for the Apple Pencil."
    ),
    new Product(
        4,
        "Apple Watch Series 8",
        399,
        40,
        ["./assets/applewatchseries8.webp",
        "./assets/applewatchseries82.webp",
        "./assets/applewatchseries83.webp"
        ],
        false,
        "Apple Inc.",
        ["Midnight", "Starlight", "Green", "Blue", "Product(RED)"],
        "The Apple Watch Series 8 is the ultimate device for a healthy life, with advanced health features, a larger and brighter display, and a range of stylish bands."
    ),
    new Product(
        5,
        "AirPods Pro",
        249,
        80,
        ["./assets/airpodspro.webp",
        "./assets/airpodspro2.webp",
        "./assets/airpodspro3.webp"
        ],
        true,
        "Apple Inc.",
        ["White"],
        "AirPods Pro deliver Active Noise Cancellation for immersive sound, transparency mode for hearing the world around you, and a customizable fit for all-day comfort."
    ),
    new Product(
        6,
        "iMac 24-inch",
        1299,
        25,
        [
        "./assets/imac24.webp",
        "./assets/imac242.webp",
        "./assets/imac243.webp"
        ],
        false,
        "Apple Inc.",
        ["Blue", "Green", "Pink", "Silver", "Yellow", "Orange"],
        "The iMac 24-inch features a stunning 4.5K Retina display, powerful M1 chip, and a range of vibrant colors to brighten up any workspace."
    )
];
// export { products };