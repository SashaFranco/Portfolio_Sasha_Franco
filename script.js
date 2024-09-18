// scripts.js

document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if(nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
    } else {
        alert("Gracias por tu mensaje, " + nombre + ". Nos pondremos en contacto contigo pronto.");
        // Puedes hacer más validaciones o enviar el formulario a través de un backend aquí
    }

    // Reseteamos el formulario
    document.getElementById('formulario-contacto').reset();
});
