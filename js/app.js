// Cuando queremos que nuestros eventos se carguen, posterior a la carga de todo el HTML
document.addEventListener('DOMContentLoaded', function () {

  // Seleccionamos los elementos de la interfaz
  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');

  console.log(inputMensaje); // verificamos que es elemento correcto

});





/**Comentarios extras:
 * 
 * 1.- Lo que podemos ver es que tenemos un formulario con 3 campos (Email, Asunto, Mensaje), de los cuales deben pasar sus respectivas validaciones, como leeremos los datos de un formulario
 * 
 * 2.- Nos aseguramos que funcionen los eventos post descarga de todo el documento.
 * 
 * 3.- Comenzamos a seleccionar los impunts que trabajaran con los eventos
 * 
 */