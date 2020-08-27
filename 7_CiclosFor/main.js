console.log('Hola desde consola!!');

// CICLOS FOR
// Se utilizan para repetir bloques de código con determinadas instrucciones, en donde cada repetición se considera una iteración.
// La estructura de los ciclos for es la siguiente:
//
// for (inicio; final; paso/secuencia) {
//   tarea a repetir
// }

for (var i = 0; i <= 100; i = i + 1) {
  console.log(i);
}

// i = i + 1 se puede abreviar haciendo uso de i++

for (var i = 0; i <= 100; i++) {
  console.log(i);
}

//Para avanzar de 2 en 2
for (var i = 0; i <= 100; i = i + 2) {
  console.log(i);
}

// i = i + N se puede abreviar como i += N

//Para avanzar de 3 en 3
for (var i = 0; i <= 100; i += 3) {
  console.log(i);
}

//Para avanzar de 5 en 5
for (var i = 0; i <= 100; i += 5) {
  console.log(i);
}

//RETO 1: CICLOS FOR
//Empezar en 10, llegar a -250 y retroceder de 1 en 1
//Empezar en -50, llegar a 500 y avanzar de 5 en 5
//Empezar en 1000, llegar a 2000 y avanzar de 10 en 10

for (var i = 10; i >= -250; i--) {
  console.log(i);
}

for (var i = -50; i <= 500; i+=5) {
  console.log(i);
}

for (var i = 1000; i <= 2000; i+=10) {
  console.log(i);
}

//¿Cómo se ligan los ciclos con los arreglos?
//Uso más común para ciclar arreglos

var alumnos = [
  'Ricardo',
  'Carlos',
  'Wilberth',
  'Justin',
  'Veronica',
  'Beth',
  'Dalia',
  'Cristina',
  'Kath'
]

console.log(alumnos);
console.log(alumnos.length);

alumnos.push('Mateo', 'Ignacio')

console.log(alumnos);
console.log(alumnos.length);

//Ejemplo: imprimir en consola las posiciones par del arreglo
//Condicionamos el arreglo con IF
for (var i = 0; i < alumnos.length; i++) {
  if (i % 2 === 0) {
    console.log(i + ' ' + alumnos[i]);
  } else {
    console.log(i + ' es impar');
  }
}
