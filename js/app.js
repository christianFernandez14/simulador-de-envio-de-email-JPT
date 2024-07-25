document.addEventListener('DOMContentLoaded', function () {

  const email = {
    email: '',
    asunto: '',
    mensaje: ''
  }

  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario')
  const btnSubmit = document.querySelector('#botones button[type="submit"]')
  const btnReset = document.querySelector('#botones button[type="reset"]')

  inputEmail.addEventListener('input', validar);
  inputAsunto.addEventListener('input', validar);
  inputMensaje.addEventListener('input', validar);

  btnReset.addEventListener('click', function (event) {
    event.preventDefault(); // acá prevenimos el evento por default

    // Reiniciamos el objeto
    email.email = '';
    email.asunto = '';
    email.mensaje = '';

    // viendo que propiedades tiene el elemento formulario
    console.log(formulario);

    formulario.reset();
    comprobarEmail();
  })

  function validar(event) {
    const valorInput = event.target.value;
    const valorReferencia = event.target.parentElement;

    if (valorInput.trim() === '') {
      mostrarAlerta(`El campo ${event.target.id} es obligatorio`, valorReferencia);
      email[event.target.name] = ''
      comprobarEmail();
      return;

    }

    if (!validarEmail(valorInput) && event.target.id === 'email') {
      mostrarAlerta('No es un email valido', valorReferencia);
      email[event.target.name] = ''
      comprobarEmail();
      return;

    }

    limpiarAlerta(valorReferencia);
    email[event.target.name] = event.target.value.trim().toLowerCase()
    comprobarEmail()

  }

  function mostrarAlerta(mensaje, referencia) {

    limpiarAlerta(referencia);

    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alert');
    referencia.appendChild(error);

  }

  function limpiarAlerta(referencia) {
    const existeAlerta = referencia.querySelector('.alert');

    if (existeAlerta) {
      existeAlerta.remove()
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);

    return resultado;
  }

  function comprobarEmail() {
    if (Object.values(email).includes('')) {

      btnSubmit.classList.add('opacity-50');
      btnSubmit.disabled = true;
      return;

    }
    btnSubmit.classList.remove('opacity-50');
    btnSubmit.disabled = false;

  }

});




/**Comentarios extras:
 * 
 * 1.- Antes de continuar con el boton de reset, modifiquemos un poco la funcion comprobarEmail, para que dejar de utulizar if y else.
 * 
 * 2.- Para ver un poco mas en tiempo real, el tipo de envento que usabamos en los input; cambiemolo por el de tipo "input"
 * 
 * 3.- Volviendo a a nuestro boton "reset", desde el HTML, nos percatamos que viene por default su comportambiento, ya que encontramos el atributo "type=reset", la idea acá es interactuar un poco con el usuario
 * 
 * 4.- A pesar que le quitamos el comportamiento por default, debes tambien considerar limpiar el objeto y comprobar los campos
 */