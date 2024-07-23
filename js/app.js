document.addEventListener('DOMContentLoaded', function () {

  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');

  inputEmail.addEventListener('blur', validar);
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  function validar(event) {
    const valorInput = event.target.value

    if (valorInput.trim() === '') {
      // Buen momento para separar el codigo y crear otra funcion que se encargue esta logica
      mostrarAlerta()
    } else {
      console.log(valorInput.trim());
    }

  };

  // Se encargara de la logica del error
  function mostrarAlerta() {
    // console.log('Hubo un error');
    // Generando la alerta en un HTML
    const error = document.createElement('P')
    error.textContent = 'Hay un error'

    console.log(error);
  };

});





/**Comentarios extras:
 * 
 * 1.- Creamos una variables para guardar el valor del input
 * 
 * 2.- Interactuamos con el usuario indicandole que hay un error; con una "alerta" y debe resolverlo.
 * 
 * 3.- Hasta ahora solo hemos visto lo mensaje por la consola, para ver si esta comunicandose nuestras funciones, pero la idea es que usuario vea lo que esta pasando.
 * 
 * 4.- Puedes ir creando tu elemento como mas guste, agregado atributos, clases, entre otras cosas
 */