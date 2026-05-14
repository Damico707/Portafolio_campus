const menuBoton = document.getElementById('menuBoton');
const menu = document.getElementById('menu');

menuBoton.addEventListener('click', function () {
  menu.classList.toggle('activo');
});

// Cerrar el menu al hacer clic en un enlace
const enlacesMenu = document.querySelectorAll('.menu a');

enlacesMenu.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    menu.classList.remove('activo');
  });
});

// Mensaje simple al enviar el formulario
const formulario = document.getElementById('formularioContacto');

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  alert('Gracias por tu mensaje. Pronto me pondre en contacto contigo.');
  formulario.reset();
});