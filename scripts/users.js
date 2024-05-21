import { verificar_login } from "./auth.js";

function verifOnline() {
    return sessionStorage.getItem("isOnline") === "true";
}

function cerrarSesion() {
    sessionStorage.removeItem("isOnline");
    sessionStorage.removeItem("emailUsuario");
}

function getUsuarios(){
    return JSON.parse(localStorage.getItem("usuarios")) || []
} 
 
function guardarUsuarios(lista_usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(lista_usuarios));
}
function registarUsuario(email, password, offers) {
    let lista_usuarios = getUsuarios();
    // Verificar  el correo
    let verificar_nuevoUsuario = lista_usuarios.find((usuario) => usuario.email === email);
    if (verificar_nuevoUsuario) {
        return {success: false,message: "El correo electrónico ya se encuentra registrado.",};
    }
    // Agregar el nuevo usuario
    lista_usuarios.push({ email, password, offers });
    guardarUsuarios(lista_usuarios);
    return { success: true, message: "Se registró con éxito." };
}

const selec_form_login = document.getElementById("loginForm");
selec_form_login?.addEventListener("submit", (event)=>{ 
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = verificar_login(email, password);
    if (result.success) {
        // alert(result.message);
        Swal.fire(result.message, "", "success");
        window.location.href = "index.html";
    } else {
        // alert(result.message);
        Swal.fire(result.message, "", "error");
    }
})
 


export {verifOnline, cerrarSesion, getUsuarios, registarUsuario}