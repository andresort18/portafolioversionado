function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
      alert("Por favor, completa todos los campos obligatorios.");
      return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
      return false;
    }

    return true;
  }