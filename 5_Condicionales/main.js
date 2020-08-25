console.log('Hola desde consola! Todo bien!');

// ESTRUCTURA DE UN IF-ELSE
// if ( condicion ) {
//   paso 1 si se cumple o si es verdadera
// } else {
//   paso 2 no se cumple o si es falsa
// }

// OPERADORES RELACIONALES
// menor que: <
// mayor que: >
// menor igual: <=
// mayor igual: >=
// comparar:  ==
// comparar idénticamente: ===
// diferente de: !==

var texto = '100';
var numero = 100;

console.log(typeof texto, typeof numero);

// DOBLE igualdad verifica que valores sean iguales pero no "estrictamente"
if (texto == numero){
  console.log(texto + ' y ' + numero + ' son iguales ==');
} else {
  console.log(texto + ' y ' + numero + ' son diferentes ==');
}

// TRIPLE igualdad verifica que valores sean iguales incluyendo el tipo de dato
if (texto === numero){
  console.log(texto + ' y ' + numero + ' son iguales ===');
} else {
  console.log(texto + ' y ' + numero + ' son diferentes ===');
}

// Diferente de
if (texto !== numero){
  console.log(texto + ' y ' + numero + ' son diferentes !==');
} else {
  console.log(texto + ' y ' + numero + ' son iguales !==');
}


// EJEMPLO EDAD
var edad = 26;

if (edad >= 18) {
  console.log('Eres MAYOR de edad!');
} else {
  console.log('Eres MENOR de edad!');
}

// EJEMPLO IF ANIDADO
var dia = 'nublado';
var hora = '5:00';

if ( dia === 'nublado' ) {
  console.log('No salgas! Es posible que llueva :( 🌧');
} else {
  if ( hora === '5:00') {
    console.log('Estás a tiempo para la función! 🎬');
  } else {
    console.log('Corre porque vas tarde 🏃‍♀️');
  }
}
