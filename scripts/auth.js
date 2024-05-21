import { getUsuarios, registarUsuario } from "./users.js";
// LOGIN
const sel_form_login = document.getElementById("login_form");
sel_form_login?.addEventListener("submit", (event)=>{
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

// REGISTRO
const sel_registro_login = document.getElementById("register_form");
sel_registro_login?.addEventListener("submit", (event)=>{
    event.preventDefault();
    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;
    const offers = document.getElementById("offers").checked;
    if (password.length < 6) { 
        Swal.fire("La contraseña debe tener al menos 6 caracteres.", "", "warning");
        return false;
    }
    const result = registarUsuario(email, password, offers);
    if (result.success) { 
        Swal.fire(result.message, "", "success");
        window.location.href = "login.html";
    } else {
        Swal.fire(result.message, "", "error");
    }
})

 
function verificar_login(email, pwd) {
    let lista_usuarios = getUsuarios(); 
    let usuario = lista_usuarios.find(
        (usuario) => usuario.email === email && usuario.password === pwd
    );
    if (usuario) {
        sessionStorage.setItem("isOnline", true);
        sessionStorage.setItem("emailUsuario", email);
        return { success: true, message: "Se inició sesión correctamente." };
    }
    return { success: false, message: "Datos incorrectos.", };
}

export {verificar_login}