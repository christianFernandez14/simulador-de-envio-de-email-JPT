document.addEventListener('DOMContentLoaded', function () {

  // Creamos un objeto, para que la validacion de todas sus propiedades en conjunto me pueda habilitar el boton del enviar, es como una referencia para verificar que todo los campos esten llenos
  const email = {
    email: '',
    asunto: '',
    mensaje: ''
  }

  // Verificamos que el objeto este vacio
  console.log(email);

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

    if (!validarEmail(valorInput) && event.target.id === 'email') {
      mostrarAlerta('No es un email valido', valorReferencia);
      return;

    }

    limpiarAlerta(valorReferencia);

    // Buen lugar para cargar el objeto "email", que me servira para habilitar el objeto, por lo tanto asiganamos los valores dinamicamente.
    email[event.target.name] = event.target.value.trim().toLowerCase() // Trim, para siempre asegurarme de no guardar espacios inecesarios.

    // Probamos que tal, a ver si lo esta guardando correctamente
    console.log(email);
    // Comprobamos el objeto email
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
    // console.log('Desde la funcion comprobar email...');// esta entrando
    console.log(Object.values(email).includes('')); // Convierto mi objeto en un array de los valores de ese objeto
    // Con la validacion anterior, no solo conseguimos un array, sino tambien iteramos sobre ella, para saber si algun input o valor mejor dicho; esta vacio.

  }

});




/**Comentarios extras:
 * 
 * 1.- Listo, ya tenemos todas la posibles validaciones de los 3 inputs del proyecto, pero aun no se me habilita el boton de "enviar" y mucho menos esta habilitado el de "reset"
 * 
 * 2.- Creamos un objeto, mejor opcion para ir guardando los valores que el usuario vaya colocando en los inputs
 * 
 * 2.- La pregunta que nos debemos hacer, es donde ir cargando los valores del objeto creado, buena pregunta no; la mejor opcion es luego de pasar todas las validaciones, y debes usar una función para hacerlo
 * 
 * 3.- Una vez en la función, accedo a la propiedad de Objetc.values, para obtener un array con los valores de las propiedades del objeto.
 */