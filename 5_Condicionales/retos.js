console.log('Hola desde retos!');

// ------- RETO 1: PASSWORD
// Almacenar un password en una variable
// Preguntar al usuario su contraseña
// Si la contraseña es correcta, mostrar en consola: 'Bienvenido'
// Si la constraseña no es correcta, mostrar en consola: 'Password incorrecto, intente de nuevo'

var pregunta = prompt('Ingresa tu contraseña')
var password = 'tortaDeTamal123'

if (pregunta === password) {
  console.log('Bienvenido!')
} else {
  console.log('Inténtalo de nuevo')
}

// ------- RETO 2: PAR O IMPAR
// Le van a preguntar al usuario que les dé un número.
// Van a decir si este numero es par o es impar.
// modulo -> % <-

var numero = parseInt(prompt('Ingresa cualquier número'))

if (numero % 2 === 0) {
  console.log(numero + ' es par')
} else if (numero % 2 === 1) {
  console.log(numero + ' es impar')
} else {
  console.error('Datos incorrectos')
}


// Ejercicio 1
// Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.
// Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador.

var jugador1 = prompt('Jugador 1, ingresa piedra, papel o tijera').toLowerCase()
var jugador2 = prompt('Jugador 2, ingresa piedra, papel o tijera').toLowerCase()

console.log(jugador1, jugador2);

// cadena.toUpperCase() sirve para pasar una cadena a mayúsculas
// cadena.toLowerCase() sirve para pasar una cadena a minúsculas

if (jugador1 === jugador2) {
  alert('Empate');
} else if (jugador1 === 'papel' && jugador2 === 'piedra' || jugador1 === 'piedra' && jugador2 === 'tiejra' || jugador1 === 'tijera' && jugador2 === 'papel') {
  alert('Gana jugador 1');
} else if (jugador2 === 'papel' && jugador1 === 'piedra' || jugador2 === 'piedra' && jugador1 === 'tijera' || jugador2 === 'tijera' && jugador1 === 'papel') {
  alert('Gana jugador 2');
} else {
  alert('Datos incorrectos')
}

// Ejercicio 2
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.

var num1 = parseInt(prompt('Ingresa un número'));
var num2 = parseInt(prompt('Ingresa otro número'));
var num3 = parseInt(prompt('Ingresa un último número'));

if (num1 > num2 && num1 > num3) {
  alert('El número: ' + num1 + ' es el mayor de los tres')
} else if (num2 > num1 && num2 > num3) {
  alert('El número: ' + num2 + ' es el mayor de los tres')
} else if (num3 > num1 && num3 > num2) {
  alert('El número: ' + num3 + ' es el mayor de los tres')
} else if (num1 == num2 && num2 == num3) {
  alert('Los tres números son iguales')
} else {
  alert('Debes ingresar valores numéricos')
}

// Ejercicio 3
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, la suma de los tres números.

var num1 = parseInt(prompt('Ingresa un número'));
var num2 = parseInt(prompt('Ingresa otro número'));
var num3 = parseInt(prompt('Ingresa un último número'));

// En este caso, la condición funciona para validar las respuestas de los usuarios
// Usando el caracter ! antes de la variable, verificamos que la varible exista
// Es decir si !num significa que num es false o que no existe, invalidando el input

if (!num1 | !num2 | !num3) {
  alert('Debes ingresar valores numéricos');
} else {
  alert('La suma de los tres números es: ' + (num1 + num2 + num3));
}
