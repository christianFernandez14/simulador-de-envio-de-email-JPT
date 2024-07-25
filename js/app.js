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
      spinner.classList.remove('flex');
      spinner.classList.add('hidden');

      resetFormulario();


      // Añadimos alerta de envio de formulario
      const alertaExito = document.createElement('P');
      alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
      alertaExito.textContent = 'Mensaje enviado correctamente';

      formulario.appendChild(alertaExito);

      // Como se quedaba el mensaje en HTML, le agregamos otro setTimeout, para tuviera un tiempo finito
      setTimeout(() => {
        alertaExito.remove()
      }, 2500);

    }, 3000);

  }

  btnReset.addEventListener('click', function (event) {
    event.preventDefault();

    resetFormulario()
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

  function resetFormulario() {
    email.email = '';
    email.asunto = '';
    email.mensaje = '';

    formulario.reset();
    comprobarEmail();

  }
});




/**Comentarios extras:
 * 
 * 1.- Antes de continuar con el diseño del mesaje que el formulario fue enviado, podras ver que hay codigo que se repite, el de reiniciar el formulario, creo que es momento de hacer una funcion que se encargue de esa logica. y lo sustitumos por los codigos.
 * 
 * 2.- Luego de solucionado lo anterior, creamos un script dentro de setTimeOut, pero de requerirlo en otra parte ahi si diseñamos una funcnión.
 * 
 * 
 */