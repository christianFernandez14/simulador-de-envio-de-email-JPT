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

  // Haciendo referencia a los botones
  const btnSubmit = document.querySelector('#botones button[type="submit"]')
  const btnReset = document.querySelector('#botones button[type="reset"]')

  // console.log(btnReset); // viendo que estoy tomando el elemento correcto

  inputEmail.addEventListener('blur', validar);
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  function validar(event) {
    const valorInput = event.target.value;
    const valorReferencia = event.target.parentElement;

    if (valorInput.trim() === '') {
      mostrarAlerta(`El campo ${event.target.id} es obligatorio`, valorReferencia);

      // Reiniciando la propiedad y validando los campos
      email[event.target.name] = ''
      comprobarEmail();
      return;

    }

    if (!validarEmail(valorInput) && event.target.id === 'email') {
      mostrarAlerta('No es un email valido', valorReferencia);

      // Reiniciando la propiedad y validando los campos
      email[event.target.name] = ''
      comprobarEmail();
      return;

    }

    limpiarAlerta(valorReferencia);

    email[event.target.name] = event.target.value.trim().toLowerCase()

    // Habilitando boton
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
      // console.log('boton habilitado...');

      console.log(email); // viendo como se llena, pero no se borrar del obejto al elimninarlo del input

      // Habilitando el boton
      btnSubmit.classList.add('opacity-50');
      btnSubmit.disabled = true;

    } else {
      // desabilitando el boton
      btnSubmit.classList.remove('opacity-50');
      btnSubmit.disabled = false;
    }

  }

});




/**Comentarios extras:
 * 
 * 1.- Con el escenario más claro de lo que tenemos o no en el objeto, podemos trabajar para habilitar el boton 
 * 
 * 2.- Debemos tomar referencia de los botones, tanto el submit como el reset
 * 
 * 3.- Con la funcion que estamos desarrollando, debemos tener cuidado que si elimino algun dato de algun input, este boton (submit), debe desabilitarse nuevo, y para ello lo ideal es llamar la funcion luego de comprobar todo 
 * 
 * 4.- Debes reiniciar la propiedad, para que pueda validar si hay campo vacio o no, ya que lo puedes 
 */