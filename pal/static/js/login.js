
const users = {"richard": "1234"};

let btnRegistro = document.getElementById("btnRegistro")

function iniciarSesion() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Comprobar si el usuario existe en el localStorage
    const userData = localStorage.getItem(username);

    if (userData) {
        const user = JSON.parse(userData);

        if (user.password === password) {
            alert("Inicio de sesión exitoso");
            window.location.href="admin.html"
        } else {
            alert("Contraseña incorrecta. Intente nuevamente.");
        }
    } else {
        alert("Usuario no encontrado. Regístrese primero.");
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    iniciarSesion();
});




function registrarUsuario() {
    const newUsername = document.getElementById("username").value;
    const newPassword = document.getElementById("password").value;

    // Comprobar si el usuario ya existe en localStorage
    const existingUserData = localStorage.getItem(newUsername);

    if (existingUserData) {
        alert("El usuario ya existe. Intente con un nombre de usuario diferente.");
    } else {
        // Crear un objeto de usuario
        const newUser = {
            username: newUsername,
            password: newPassword
        };

        // Almacenar el usuario en localStorage como JSON
        localStorage.setItem(newUsername, JSON.stringify(newUser));
        alert("Usuario registrado con éxito");
    }

    // Limpiar el formulario de registro
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

        btnRegistro.addEventListener("click", () => {
            event.preventDefault();
            registrarUsuario();
});


