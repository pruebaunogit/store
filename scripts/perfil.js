/* let isOnline = false;
if (localStorage.getItem("isOnline") === "") {
    localStorage.setItem("isOnline", isOnline)
} */

// console.log(localStorage);
import { verifOnline, cerrarSesion } from "./users.js";

export  function crearListenersPerfil() {
    const btn_logOn = document.getElementById("logOn");
    const btn_logOff = document.getElementById("logOff");

    btn_logOn.addEventListener("click", () => {
        // console.log("inició sesión");
        // isOnline = true;
        // localStorage.setItem("isOnline", isOnline)
        verificarLogin();
    })

    btn_logOff.addEventListener("click", () => {
        // console.log("cerró sesión");
        cerrarSesion();
        // isOnline = false;
        // localStorage.setItem("isOnline", isOnline)
        verificarLogin();
    })
}
function stringToBoolean(str) {
    // Convertir el string a minúsculas y compararlo con "true"
    return str.toLowerCase() === 'true';
}
export function verificarLogin() {
    // const verif_login = localStorage.getItem("isOnline");
    const verif_login = verifOnline()
    // console.log("verific");
    // if (stringToBoolean(verif_login)) {
    if (verif_login) {
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

    // console.log(localStorage);
}
