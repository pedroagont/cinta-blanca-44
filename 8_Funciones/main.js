console.log('Hola desde consola, todo bien! 😎');

//FUNCIONES
// Las funciones son un conjunto de instrucciones que podemos mandar a llamar en determinado paso de nuestro código
// La estructura básica para declarar una fucnión es la siguiente:
//
// function miNombreDeFuncion() {
//   //Código a ejecutar cuando esta función sea llamada
// }
//
// function funcionConParametros(param1, param2, ..., paramN) {
//   //Código a ejecutar cuando esta función sea llamada
//   //console.log(param1, param2, etc etc);
// }
//
// Para mandar a llamar una función sólo la escribimos
// miNombreDeFuncion();
// funcionConParametros(param1, param2, ..., paramN);

function saludar(){
  console.log('Hola desde saludar! 👍');
}
saludar();

var saludar2 = function (){
  console.log('Hola desde saludar2! 🍩');
}
saludar2();

// PRINCIPIOS DE ECMASSCRIPT6
// ECMASSCRIPT6 = ES62015
// var: es una variable global
// let: es una variable local
// const: es una constante
// arrow functions: sintetiza la declaración de funciones

var textoVar = 'Esto es un texto declarado con var';
function mostrarTextoVar(){
  console.log(textoVar);
}

function mostrarTextoLet(){
  let textoLet = 'Esto es un texto decalardo con let';
  console.log(textoLet);
}

mostrarTextoVar()
mostrarTextoLet()
// console.log(textoLet); //Esto marca error porque la variable tipo let no permite ser accedida fuera de su scope local

const funcionConstante = function () {
  console.log('Hola desde función constante');
}

funcionConstante();

// Esta nueva declaración marcaría error debido a que el mismo nombre ya fue declarado como constante previamente
// const funcionConstante = function () {
//   console.log('Hola desde nueva función constante');
// }

// Arrow Functions: miFuncion = () => {}
// const miNombreDeFuncion = () => {
//   //Código a ejecutar cuando esta función sea llamada
// }
// miNombreDeFuncion();

// const funcionConParametros = (param1, param2, ..., paramN) => {
//   //Código a ejecutar cuando esta función sea llamada
// }
// funcionConParametros(param1, param2, ..., paramN);

const saludoNombre = (nombre) => {
  if (nombre) {
    console.log('Hola ' + nombre + '! 👋');
  } else {
    console.log('Debes ingresar un nombre como paramétro');
  }
}

saludoNombre('Ricardo');
saludoNombre('Carlos');
saludoNombre('Dalia');
saludoNombre('Verónica');
saludoNombre();

//Ejemplo:
//Crear una función que permita sumar dos números

//Declaración normal
function sumarNormal(num1, num2){
  console.log(num1 + num2);
}

//Declaración Arrow
const sumarArrow = (num1, num2) => console.log(num1 + num2);

sumarNormal(28, 22); //50
sumarNormal(100, 125); //225

//Funciones arrow nos dan el mismo resultado pero su declaración se considera más elegante
sumarArrow(28, 22); //50
sumarArrow(100, 125); //225


//EJEMPLO RETURN
// Utilizamos el return para indicar dónde finaliza nuestra función y qué es lo que nos debe regresar
// Todo lo que pongamos después del return no se interprea en nuestro código
// En las arrow function de una línea, el return queda implícito, es decir, que no se necesita poner

// const sumarDos = (num1, num2) => {
//   return num1 + num2;
// }

const sumarDos = (num1, num2) => num1 + num2; //lo mismo que arriba pero el return es implícito cuando la función arrow tiene únicamente una línea de código

const imprimirEnConsola = (texto) => console.log(texto);

imprimirEnConsola(sumarDos(10,15));
