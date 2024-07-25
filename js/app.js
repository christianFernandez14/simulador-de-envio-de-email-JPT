document.addEventListener('DOMContentLoaded', function () {

  const email = {
    email: '',
    asunto: '',
    mensaje: ''
  }

  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario');
  const btnSubmit = document.querySelector('#botones button[type="submit"]');
  const btnReset = document.querySelector('#botones button[type="reset"]');
  const spinner = document.querySelector('#spinner');

  inputEmail.addEventListener('input', validar);
  inputAsunto.addEventListener('input', validar);
  inputMensaje.addEventListener('input', validar);
  formulario.addEventListener('submit', enviarEmail)

  function enviarEmail(event) {
    event.preventDefault();

    spinner.classList.add('flex');
    spinner.classList.remove('hidden');

    setTimeout(() => {
      // desabilitamos y habilitamos las clases anteriores
      spinner.classList.remove('flex');
      spinner.classList.add('hidden');

      // Reiniciamos nuestro objeto
      email.email = '';
      email.asunto = '';
      email.mensaje = '';

      formulario.reset();
      comprobarEmail();

    }, 3000);

  }

  btnReset.addEventListener('click', function (event) {
    event.preventDefault();

    email.email = '';
    email.asunto = '';
    email.mensaje = '';

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
 * 1.- Perfecto ya logramos ver el spinner; pero la idea es que duro un tipo de simulacion y no se ve más, para eso usaremos un settimeout, para simular que se esta enviando el email
 * 
 * 2.- Nos apoyamos de funciones propias de Js, como la setTimeOut, para hacer esa simulacion
 * 
 * 3.- Hacemos como un toggle, añdimos y quitamos clases para simular el punto anterior
 * 
 * 
 */