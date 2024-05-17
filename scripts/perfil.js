let isOnline = false;

localStorage.setItem("isOnline", isOnline)

// console.log(localStorage);

const btn_logOn = document.getElementById("logOn");
const btn_logOff = document.getElementById("logOff");

btn_logOn.addEventListener("click",()=>{
    console.log("inició sesión");
    isOnline = true;
    localStorage.setItem("isOnline", isOnline)
    verificarLogin();
})

btn_logOff.addEventListener("click",()=>{
    console.log("cerró sesión");
    isOnline = false;
    localStorage.setItem("isOnline", isOnline)
    verificarLogin();
})

export default function verificarLogin() {
    console.log("verific");
    if (isOnline) {
        // ocultar el icono de "iniciar sesion"
        let elementosActivos = document.querySelectorAll('.isOffline');
        elementosActivos.forEach(function (elemento) {
            elemento.style.display = 'none';
        });
        // mostrar iconos de carrito y perfil
        let elementosOcultos = document.querySelectorAll('.isOnline');
        elementosOcultos.forEach(function (elemento) {
            elemento.style.display = 'block';
        });
    } else {
        // isOnline == false
        // mostar el icono de "iniciar sesion"
        let elementosOcultos = document.querySelectorAll('.isOffline');
        elementosOcultos.forEach(function (elemento) {
            elemento.style.display = 'block';
        });
        // ocultar iconos de carrito y perfil
        let elementosActivos = document.querySelectorAll('.isOnline');
        elementosActivos.forEach(function (elemento) {
            elemento.style.display = 'none';
        });
    }

    console.log(localStorage);
}
/* 
const persona = {
    nombre: 'Alex',
    edad: 28,
    correo: "alex@gmail.com",
    altura: "1.65cm",
    peso: "65kg",
    hobbys: {
        hobby1: "leer",
        hobby2: "futbol",
        hobby3: "montar bicicleta",
    }
};

document.getElementById("nombre").textContent = "Nombre: " + persona.nombre;
document.getElementById("edad").textContent = "Edad: " + persona.edad;
document.getElementById("correo").textContent = "Correo: " + persona.correo;
if (persona.edad >= 18) {
    document.getElementById("altura").textContent = "Altura: " + persona.altura;
    document.getElementById("peso").textContent = "Peso: " + persona.peso
}

let frutas = ["manzana", "banana", "naranja"];
let [fruta1, fruta2, fruta3] = frutas; */
// console.log(fruta1); // manzana
// console.log(fruta2); // banana
// console.log(fruta3); // naranja 