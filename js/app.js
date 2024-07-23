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
      return;

    }

    limpiarAlerta(valorReferencia);
    // Para verificar en consola que si entra al if de arriba, no se ejecuta la linea 21
    // console.log('despues del if');

  }

  function mostrarAlerta(mensaje, referencia) {

    limpiarAlerta(referencia);

    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alert');
    referencia.appendChild(error);

  }

  function limpiarAlerta(referencia) {
    // console.log('Desde limpiar alerta...');

    const existeAlerta = referencia.querySelector('.alert');

    if (existeAlerta) {
      existeAlerta.remove()
    }
  }

});




/**Comentarios extras:
 * 
 * 1.- Ahora el problema esta asociado a que el mensaje de alerta sale multiple veces y lo que queremos que salga una sola vez, cuando no se cumpla la condición.
 * 
 * 2.- Para solucionar lo anterior tenemos que fijarnos que nos muestra el elemento alerta, y podemos usar unas de sus clases, para seleccionarla y condicionarla
 * 
 * 3.- Nos encontramos que habiamos incluido una class de nombre alert, y a ella apuntamos, haciendo referencia al elemento que viene del segundo parametro de la funcion que estoy trabajando, ya que si tomamos todo el documento, nos borraria al alerta previa si haberla corregido por la validacion que le pusimos con el "if"
 * 
 * 4.- El return interno del if, nos ayuda a cortar la ejecucion y que el codigo no siga ejecutando.
 * 
 * 5.- Viendo que el codigo que esta en "mostrarAlerta", es lo que debemos hacer en "validar", es momento de crear una funcion que se encargue de es logica.
 */