document.addEventListener('DOMContentLoaded', function () {

  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario')

  inputEmail.addEventListener('blur', validar);
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  function validar(event) {
    const valorInput = event.target.value

    console.log(event.target.id); // cada input tiene asociado un Id

    if (valorInput.trim() === '') {
      // Hacemos dinámico el mensaje de la alerta
      mostrarAlerta(`El campo ${event.target.id} es obligatorio`);

    } else {
      console.log(valorInput.trim());
    }

  };

  function mostrarAlerta(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
    formulario.appendChild(error)

  };

});




/**Comentarios extras:
 * 
 * 1.- Hasta este punto solo generamos un texto que dice que hay un error, debemos personalizar un poco más ese mesaje, para saber que tipo de error es.
 * 
 * 2.- Hacemos uso del argumento y parametros en la función para que podamos personalizarla mejor
 */