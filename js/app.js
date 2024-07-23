document.addEventListener('DOMContentLoaded', function () {
  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario')

  inputEmail.addEventListener('blur', validar);
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  function validar(event) {
    const valorInput = event.target.value;
    const valorReferencia = event.target.parentElement;

    if (valorInput.trim() === '') {
      mostrarAlerta(`El campo ${event.target.id} es obligatorio`, valorReferencia);

    } else {
      console.log(valorInput.trim());
    }

  };

  function mostrarAlerta(mensaje, referencia) {
    // Comprobamos si existe un alerta, pero no nos vamos al document, sino a la referencia
    // const existeAlerta = document.querySelector('.alert'); // Aca buscaba en todo el documentos
    const existeAlerta = referencia.querySelector('.alert');  // aca solo en el input que queremos

    console.log(referencia);
    console.log(existeAlerta);

    if (existeAlerta) {
      existeAlerta.remove()
    }

    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alert');
    referencia.appendChild(error);

  };

});




/**Comentarios extras:
 * 
 * 1.- Ahora el problema esta asociado a que el mensaje de alerta sale multiple veces y lo que queremos que salga una sola vez, cuando no se cumpla la condición.
 * 
 * 2.- Para solucionar lo anterior tenemos que fijarnos que nos muestra el elemento alerta, y podemos usar unas de sus clases, para seleccionarla y condicionarla
 * 
 * 3.- Nos encontramos que habiamos incluido una class de nombre alert, y a ella apuntamos, haciendo referencia al elemento que viene del segundo parametro de la funcion que estoy trabajando, ya que si tomamos todo el documento, nos borraria al alerta previa si haberla corregido por la validacion que le pusimos con el "if"
 */