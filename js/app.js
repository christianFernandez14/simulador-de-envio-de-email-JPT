document.addEventListener('DOMContentLoaded', function () {

  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');

  inputEmail.addEventListener('blur', validar);
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  function validar(event) {
    // Comprobando que esta vacio el campo
    if (event.target.value.trim() === '') {
      console.log('Esta vacio');
    } else {
      console.log(event.target.value.trim());
    }

  };

});





/**Comentarios extras:
 * 
 * 1.- La idea del formulario es que sea llenado, por lo tanto vamos a validar que No esten vacios
 * 
 * 2.- Recomendable que uses .trim; para eliminar espacios en blanco al incio y al final de un string
 */