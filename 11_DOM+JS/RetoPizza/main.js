//-------------------> Challenge <------------------
// * Usar Bootstrap *
// Preguntar Nombre
// Preguntar Dirección
// Preguntar Teléfono
// Preguntar si quieren pizza con piña o sin
// respuestas: sí o no
// -> mostrar las respuestas en una card de Bootstrap

console.log('Hola desde consola, este es el reto pizza!');

//PASO 1: Declarar los elementos que usaré del html

//INPUTS
const nombre = document.getElementById('nombre');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const pinia = document.getElementById('pinia');
const ordenar = document.getElementById('ordenar');
const card = document.getElementById('card');

//RESPUESTAS / CARD
const respuestaNombre = document.getElementById('respuestaNombre');
const respuestaDireccion = document.getElementById('respuestaDireccion');
const respuestaTelefono = document.getElementById('respuestaTelefono');
const respuestaPinia = document.getElementById('respuestaPinia');
const imagenPizza = document.getElementById('imagenPizza');

//PASO 2: Declarar la función que generará la card
const crearComanda = () => {


  if(nombre.value === '' | direccion.value === '' | telefono.value === '' | pinia.value === '') {
    alert('Debes llenar todos los campos del formulario'); //El usuario lo ve
    console.log('Usuario intentó ordenar con campos vacíos'); //El usuario no lo ve, lo ve el desarrollador
  } else {

      //Modificamos el contenido de cada respuesta de la card por el valor que ingresó el usuario
      respuestaNombre.innerHTML = nombre.value;
      respuestaDireccion.innerHTML = direccion.value;
      respuestaTelefono.innerHTML = telefono.value;

      //Almacenar en una nueva variable el value de pinia y convertirlo a minúsculas con el método .toLowerCase()
      let piniaMinus = pinia.value.toLowerCase();

      console.log(pinia.value);
      console.log(piniaMinus);

      //Condicionamos la respuesta del usuario para saber si quiere piña o no
      if (piniaMinus === 'no') {
        respuestaPinia.innerHTML = 'Sin piña 😭';
        imagenPizza.src = 'https://hacermasapizza.com/img/pizza-pepperoni-916.jpg';
      } else if (piniaMinus === 'si' | piniaMinus === 'sí') {
        respuestaPinia.innerHTML = 'Con piña 🤪';
        imagenPizza.src = 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg';
      } else {
        respuestaPinia.innerHTML = 'No indicó si quiere piña o no 😕';
        imagenPizza.src = 'https://image.freepik.com/foto-gratis/repartidor-camisa-polo-amarilla-gorra-sosteniendo-cajas-pizza-pie-mano-cabeza-error-recordar-error-olvido-concepto-mala-memoria-rosa-aislado_141793-19258.jpg';
      }

      //Removemos la clase d-none para que se muestre la card una vez que se ejecute esta función
      card.classList.remove('d-none');
  }
}

//PASO 3: Agregamos el event listener al botón de ordenar para que cuando se le haga click ejecute le función previamente declarada crearComanda
ordenar.addEventListener('click', crearComanda);


//PUNTOS EXTRAS!! :)
// ✅ Condicionar que todos los inputs deban ser llenados para que se despliegue la card
// ✅ Cambiar la imagen a la card una para la pizza con piña y otra para la pizza sin piña
// ✅ Evitar que la respuesta de la piña se escriba en mayúscula o cambiar por checkbox o radio (opción de bolita)
