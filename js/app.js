document.addEventListener('DOMContentLoaded', function () {

  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');

  inputEmail.addEventListener('blur', validar);

  inputAsunto.addEventListener('blur', validar);

  inputMensaje.addEventListener('blur', validar);

  function validar(event) {
    console.log(event.target.value);

  }

});





/**Comentarios extras:
 * 
 * 1.- Dejemos los eventos 'blur' y luego probaremos con otros.
 * 
 * 2.- Viendo que el callback sera como repetitivo, lo ideal es hacer una Fn y desarrollar toda la logiica ahi
 */