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


// Ejercicio 2
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.


// Ejercicio 3
// Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, la suma de los tres números.
