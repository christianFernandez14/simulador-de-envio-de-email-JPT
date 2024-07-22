document.addEventListener('DOMContentLoaded', function () {

  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');

  // Asignemos los eventos a cada input
  inputEmail.addEventListener('blur', function () {
    // Este evento se ejecuta cuando sales de un campo
    console.log('Sali del input...');
  })

  inputAsunto.addEventListener('input', function () {
    // Este evento se ejecuta mientras vayas escribiendo el input
    console.log('Esto viene del inputAsunto...');
  })

  inputMensaje.addEventListener('blur', function (e) {
    // Este evento se ejecuta mientras vayas escribiendo el input
    console.log(e.target); // me trae solo cuando salgo del input o textarea realmente
  })

});





/**Comentarios extras:
 * 
 * 1.- Es momento de trabajar con los eventos, por cada input creado, no es más que el registro de unos eventos, para que se ejecute ciertas funciones.
 * 
 * 2.- Hablando de eventos, en los formularios, los mas usados son "input", "blur", "focus", no tendria mucho sentido usar el "click"
 * 
 * 3.- Para cubrir la validaciones, yo debe ver, escuchar o como quieras interpretar, lo que el usuario coloca en el input y eso lo podemos lograr, pasando el evento como parametro a la funcion callback y accediendo a las propiedades del evento
 */