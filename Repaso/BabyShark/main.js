// REPASO DE CICLOS Y FUNCIONES CON BABY SHARK
//
// LETRA:
//
// Baby shark, doo doo doo doo doo doo.
// Baby shark, doo doo doo doo doo doo.
// Baby shark, doo doo doo doo doo doo.
// Baby shark!
//
// Mommy shark, doo doo doo doo doo doo.
// Mommy shark, doo doo doo doo doo doo.
// Mommy shark, doo doo doo doo doo doo.
// Mommy shark!
//
// Daddy shark, doo doo doo doo doo doo.
// Daddy shark, doo doo doo doo doo doo.
// Daddy shark, doo doo doo doo doo doo.
// Daddy shark!
//
// Grandma shark, doo doo doo doo doo doo.
// Grandma shark, doo doo doo doo doo doo.
// Grandma shark, doo doo doo doo doo doo.
// Grandma shark!
//
// Grandpa shark, doo doo doo doo doo doo.
// Grandpa shark, doo doo doo doo doo doo.
// Grandpa shark, doo doo doo doo doo doo.
// Grandpa shark!
//
// Let’s go hunt, doo doo doo doo doo doo.
// Let’s go hunt, doo doo doo doo doo doo.
// Let’s go hunt, doo doo doo doo doo doo.
// Let’s go hunt!
//
// Run away, doo doo doo doo doo doo.
// Run away, doo doo doo doo doo doo.
// Run away, doo doo doo doo doo doo.
// Run away!
//
// Safe at last, doo doo doo doo doo doo.
// Safe at last, doo doo doo doo doo doo.
// Safe at last, doo doo doo doo doo doo.
// Safe at last!
//
// It’s the end, doo doo doo doo doo doo.
// It’s the end, doo doo doo doo doo doo.
// It’s the end, doo doo doo doo doo doo.
// It’s the end!


// FORMA 1: Almacenando las letras en una variable con el uso de `` e imprimiendolas en consola

// const liricas = `
// Baby shark, doo doo doo doo doo doo.
// Baby shark, doo doo doo doo doo doo.
// Baby shark, doo doo doo doo doo doo.
// Baby shark!
//
// Mommy shark, doo doo doo doo doo doo.
// Mommy shark, doo doo doo doo doo doo.
// Mommy shark, doo doo doo doo doo doo.
// Mommy shark!
//
// Daddy shark, doo doo doo doo doo doo.
// Daddy shark, doo doo doo doo doo doo.
// Daddy shark, doo doo doo doo doo doo.
// Daddy shark!
//
// Grandma shark, doo doo doo doo doo doo.
// Grandma shark, doo doo doo doo doo doo.
// Grandma shark, doo doo doo doo doo doo.
// Grandma shark!
//
// Grandpa shark, doo doo doo doo doo doo.
// Grandpa shark, doo doo doo doo doo doo.
// Grandpa shark, doo doo doo doo doo doo.
// Grandpa shark!
//
// Let’s go hunt, doo doo doo doo doo doo.
// Let’s go hunt, doo doo doo doo doo doo.
// Let’s go hunt, doo doo doo doo doo doo.
// Let’s go hunt!
//
// Run away, doo doo doo doo doo doo.
// Run away, doo doo doo doo doo doo.
// Run away, doo doo doo doo doo doo.
// Run away!
//
// Safe at last, doo doo doo doo doo doo.
// Safe at last, doo doo doo doo doo doo.
// Safe at last, doo doo doo doo doo doo.
// Safe at last!
//
// It’s the end, doo doo doo doo doo doo.
// It’s the end, doo doo doo doo doo doo.
// It’s the end, doo doo doo doo doo doo.
// It’s the end!`;
//
// console.log(liricas);


// FORMA 2: Ciclo for que repita los versos que se repiten

// const babyShark = 'Baby shark, doo doo doo doo doo doo.';
// for (var i = 0; i < 3; i++) {
//   console.log(babyShark);
// }
// console.log('Baby shark!');
//
// const mommyShark = 'Mommy shark, doo doo doo doo doo doo.';
// for (var i = 0; i < 3; i++) {
//   console.log(mommyShark);
// }
// console.log('Mommy shark!');
//
// const daddyShark = 'Daddy shark, daa daa daa daa daa daa.';
// for (var i = 0; i < 3; i++) {
//   console.log(daddyShark);
// }
// console.log('Daddy shark!');
//
// const grandmaShark = 'Grandma shark, doo doo doo doo doo doo.';
// for (var i = 0; i < 3; i++) {
//   console.log(grandmaShark);
// }
// console.log('Grandma shark!');
//
// const grandpaShark = 'Grandpa shark, doo doo doo doo doo doo.';
// for (var i = 0; i < 3; i++) {
//   console.log(grandpaShark);
// }
// console.log('Grandpa shark!');
//
// const letsHunt = 'Let’s go hunt, doo doo doo doo doo doo.';
// for (var i = 0; i < 3; i++) {
//   console.log(letsHunt);
// }
// console.log('Let’s go hunt!');
//
// const runAway = 'Run away, doo doo doo doo doo doo.';
// for (var i = 0; i < 3; i++) {
//   console.log(runAway);
// }
// console.log('Run away!');
//
// const safe = 'Safe at last, doo doo doo doo doo doo.';
// for (var i = 0; i < 3; i++) {
//   console.log(safe);
// }
// console.log('Safe at last!');
//
// const itsEnd = 'It’s the end, doo doo doo doo doo doo.';
// for (var i = 0; i < 3; i++) {
//   console.log(itsEnd);
// }
// console.log('It’s the end!');


// FORMA 3: Mediante el uso de una función que reciba como parámetro el elemento a repetir

// const dooDooDoo = (primerElemento) => {
//   for (var i = 0; i < 3; i++) {
//     console.log(primerElemento + ' doo doo doo doo doo doo.');
//   }
//   console.log(primerElemento + '!');
// }
//
// dooDooDoo('Baby Shark')
// dooDooDoo('Mommy Shark')
// dooDooDoo('Daddy Shark')
// dooDooDoo('Grandma Shark')
// dooDooDoo('Grandpa Shark')
// dooDooDoo('Let’s go hunt')
// dooDooDoo('Run away')
// dooDooDoo('Safe at last')


// FORMA 4: Mediante el uso de una función que reciba como parámetro un arreglo que contenga todos los elementos a repetir

const dooDooDooArreglo = (arreglo) => {
  //Ojo con los iteradores, cambian de nombre (var i y var j) para no confundir al ciclo for
  //El ciclo con letra i es para que le aplique la tarea a los elemntos del arreglo
  //El ciclo con letra j es para que repita el verso con doo doo doo tres veces
  for (var i = 0; i < arreglo.length; i++) {
    for (var j = 0; j < 3; j++) {
      console.log(arreglo[i] + ' doo doo doo doo doo doo.');
    }
    console.log(arreglo[i] + '!');
  }
}

const elementos = [
  'Baby Shark',
  'Mommy Shark',
  'Daddy Shark',
  'Grandma Shark',
  'Grandpa Shark',
  'Let’s go hunt',
  'Run away',
  'Safe at last'
]

dooDooDooArreglo(elementos);
