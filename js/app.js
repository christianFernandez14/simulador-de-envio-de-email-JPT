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

  // Tomamos el elemento que creamos, para poder manipular su accion
  const spinner = document.querySelector('#spinner')

  console.log(spinner);

  inputEmail.addEventListener('input', validar);
  inputAsunto.addEventListener('input', validar);
  inputMensaje.addEventListener('input', validar);

  // Aca escucharemos el evento del envio
  formulario.addEventListener('submit', enviarEmail)

  function enviarEmail(event) {
    event.preventDefault();

    console.log('Enviando...');

    spinner.classList.add('flex');
    spinner.classList.remove('hidden');


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
 * 1.- Una vez comprobado los cmapos, las validaciones y que ambos botones se estan comportando como queremos, vamos a simular que estamos enviado el formulario.
 * 
 * 2.- Trabajamos añadiendo algo mas visual e interactivo con el usuario, un spinner
 */