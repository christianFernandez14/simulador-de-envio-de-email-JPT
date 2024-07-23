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
    // Como ya comprobamos que la funcion me rotorna lo esperado, lo envolvemos dentro de un if
    if (!validarEmail(valorInput) && event.target.id === 'email') {
      // LLamamos de nuevo mostrarAlerta, pero con otro mensaje
      mostrarAlerta('No es un email valido', valorReferencia);
      return;
    }

    limpiarAlerta(valorReferencia);

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

  // Trabajando con la validacion del email
  function validarEmail(email) {
    // Expresion regular para validar un email
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);

    // console.log(resultado);
    return resultado; // Me retorna true or false
  }

});




/**Comentarios extras:
 * 
 * 1.- Especificamente en el campo de email, ciertamente valida porque el campo no este vacio, pero si le pasas cualquier valor, te lo valida y se va el alerta, es hora de que vemos validaciones más especifica y nos apoyaremos en codigo "regex", una expresión regular
 * 
 * 2.- Luego de validar que lo que ta colocando el usuario es un email valido, esa validación se me va para los demás input, por lo tanto extendi aun mas el condicional vericadolo con el Id del input
 */