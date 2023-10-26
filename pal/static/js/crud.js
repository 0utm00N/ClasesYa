const perfilUsuario = {
    nombre: "Juan",
    apellido: "Pérez",
    fechaNacimiento: "1990-01-15",
};

// Mostrar los datos iniciales del perfil
document.getElementById("nombre").textContent = perfilUsuario.nombre;
document.getElementById("apellido").textContent = perfilUsuario.apellido;
document.getElementById("fechaNacimiento").textContent = perfilUsuario.fechaNacimiento;

// Actualizar el perfil
document.getElementById("editarForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nuevoNombre = document.getElementById("nuevoNombre").value;
    const nuevoApellido = document.getElementById("nuevoApellido").value;

    // Actualizar el objeto perfilUsuario con los nuevos datos
    perfilUsuario.nombre = nuevoNombre;
    perfilUsuario.apellido = nuevoApellido;

    // Actualizar los elementos HTML con los nuevos datos
    document.getElementById("nombre").textContent = nuevoNombre;
    document.getElementById("apellido").textContent = nuevoApellido;

    // Restablecer los campos a solo lectura
    document.getElementById("nuevoNombre").setAttribute("readonly", true);
    document.getElementById("nuevoApellido").setAttribute("readonly", true);
});


function eliminarDatosDePerfil() {
    // Puedes reiniciar los datos del perfil o realizar otras acciones necesarias
    perfilUsuario.nombre = "";
    perfilUsuario.apellido = "";

    // También puedes ocultar los elementos del perfil o redirigir a otra página
    document.getElementById("nombre").textContent = "";
    document.getElementById("apellido").textContent = "";

    // Restablecer los campos del formulario de edición
    document.getElementById("nuevoNombre").value = "";
    document.getElementById("nuevoApellido").value = "";

    // Además, podrías realizar acciones adicionales, como enviar una solicitud al servidor para eliminar la cuenta permanentemente
}

// Eliminar la cuenta
document.getElementById("eliminarCuentaButton").addEventListener("click", function () {
    if (confirm("¿Está seguro de que desea eliminar su cuenta?")) {
        // Aquí puedes eliminar los datos del perfil
        eliminarDatosDePerfil();
    }
});