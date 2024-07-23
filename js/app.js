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

    const valorReferencia = event.target.parentElement
    // Haciendo algo de traversing
    console.log(event.target.parentElement);

    if (valorInput.trim() === '') {
      mostrarAlerta(`El campo ${event.target.id} es obligatorio`, valorReferencia);

    } else {
      console.log(valorInput.trim());
    }

  };

  // Le pasamos la referencia como otro parametro
  function mostrarAlerta(mensaje, referencia) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
    // Dejamos de apuntar al formulario y nos fijamos de la referencia.
    referencia.appendChild(error)

  };

});




/**Comentarios extras:
 * 
 * 1.- Hasta ahora los mensajes de alerta, no estan sino hasta al final del formulario, estos es producto del appendChild que tiene.
 * 
 * 2.- Hcaemos traversing al docuemento, hasta ubicar donde queremos posicionarnos, para de luego dejar de apuntar al formulario completo y solo enfoncarnos en el elemento donde queremos inyectar el mensaje
 * 
 */