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

    if (valorInput.trim() === '') {
      mostrarAlerta();

    } else {
      console.log(valorInput.trim());
    }

  };

  function mostrarAlerta() {
    const error = document.createElement('P');
    error.textContent = 'Hay un error';
    // agreamos algunas clases de tailwind, para que lusca como una alerta de verdad
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

    // Inyectamos el error al formulario
    formulario.appendChild(error)

  };

});




/**Comentarios extras:
 * 
 * 1.- El documento hasta ahora, nuevamente lo muestra en consola
 * 
 * 2.- Llevemos ese elemento al HTML
 * 
 * 3.- Apuntamos al elemento del formulario y le hacemos un append, pero te daras cuentas que lo agrega al final del elemento seleccionado
 */