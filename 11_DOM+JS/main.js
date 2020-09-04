console.log('Hola desde consola! 🤓');

//DOCUMENT OBJECT MODEL Hace referencia a todo el HTML como un objeto en sí mismo al que podemos acceder para crear, agregar, modificar, remover, o alterar de cualquier forma desde JS
//Link de referencia W3Schools: https://www.w3schools.com/js/js_htmldom.asp
console.log(document);

// Para tomar elementos del html podemos hacer referencia a ellos utilizando el método .getElementById('mi-id')
const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');
const entrada = document.getElementById('entrada');
const boton = document.getElementById('boton');
const respuesta = document.getElementById('respuesta');

// console.log(titulo);
// console.log(subtitulo);
// console.log(entrada);
// console.log(boton);
// console.log(respuesta);

const cambiar = () => {
  titulo.innerHTML = 'Soy el título modificado desde JS! 😱';
  subtitulo.innerHTML = 'Soy el subtítulo modificado desde JS! 🤯';
  // .value es el texto que ingresamos en los inputs
  respuesta.innerHTML = entrada.value;
  // console.log(entrada.value); //Nos muestra en consola lo que el usuario ingresó al input
}

//Para hacer referencia a eventos que sucedan con cada elemento, hacemos uso del método addEventListener('evento-a-escuchar', funcionQueQueremosEjecutarConEseEvento)
//Link para más información: https://www.w3schools.com/js/js_htmldom_eventlistener.asp

boton.addEventListener('click', cambiar);
