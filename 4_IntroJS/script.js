
//VARIABLES

var saludo = 'Hola desde Saludo!'; // String-Cadena
var edad = 18; // Valor numérico
var verdadero = true; //Booleanos verdadero o falso
var falso = false;

var arreglo = []; // Arreglos o listas de elementos, corchetes [pos0, pos1, posN]

var arregloFrutas = ['manzana', 'naranja', 'pera'];
// arregloFrutas[0]; // manzana
var arregloRandom = ['Pedro', 26, 'Cancún', 'Sensei Cinta Blanca'];
// arregloRandom[2] // Cancún

var objeto = {}; // Objetos con propiedas, llaves

var objetoSencillo = { nombre: 'Miguel' };

var sensei = { nombre: 'Pedro', edad: 26, curso: 'Blanca', activo: true };
// sensei.nombre // Pedro

var autor = 'Hola, escribí un libro que se llama "Cien Años de Soledad"';
//Si usamos comillas dobles al exterior, podemos usar comillas simples al interior y viceversa
// "Hola 'Pedro'", 'Hola "Pedro"'

// SUMAR
var num1 = 100;
var num2 = 200;
console.log(num1 + num2);

// CONCATENAR
var nombre = 'Pedro';
console.log('Hola, mi nombre es ' + nombre);

//SENSIBLE A MAYÚSCULAS Y MINÚSCULAS, NO FUERTEMENTE TIPADO, DEPENDIENDO EL TIPO DE VAR PODEMOS VOLVER A DECLARARLA
var numX = 100;
console.log(numX);
var numX = 200;
var numx = 123;
console.log(numX, numx);

// OUTPUTS
console.log('Hola desde consola!');
console.log(sensei);

// alert('Hola desde alert!');

//INPUTS
// prompt('Ingresa tu dato');

var nombre = prompt('Ingresa tu nombre', 'Juan Pérez');
var email = prompt('Ingresa tu email', 'ejemplo@correo.com');
var nacimiento = prompt('Ingresa tu fecha de nacimiento', 'DD/MM/AA');
console.log(nombre);



// RETO 1: VARIABLES
//
// Guarda en variables el nombre de las siguientes mascotas:
//
// 1. Pedrito
// 2. Rufo
// 3. Chancla
//
// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// “Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho”

var mascota1 = 'Pedrito';
var mascota2 = 'Rufo';
var mascota3 = 'Chancla';

console.log('Mis mascotas son ' + mascota1 + ', ' + mascota2 + ' y ' + mascota3 + '. Les quiero mucho.');
alert('Mis mascotas son ' + mascota1 + ', ' + mascota2 + ' y ' + mascota3 + '. Les quiero mucho.');


// RETO 2: INPUT OUTPU
//
// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:
//
// “Quiero mucho a mis mascotas mascota1 y mascota2”
//
// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts
//

var mascota1 = prompt('Ingresa el nombre de una de tus mascotas');
var mascota2 = prompt('Ingresa el nombre de otra de tus mascotas');

console.log('Quiero mucho a mis mascotas ' + mascota1 + ' y ' + mascota2);
alert('Quiero mucho a mis mascotas ' + mascota1 + ' y ' + mascota2);


// RETO 3: CONVERSIÓN DE DATOS
//
// Guarda la cadena de texto “100” en una variable
var texto = '100';

// Muestra el contenido de esta variable en consola
console.log(texto);

// Muestra el TIPO DE DATO de esta variable en consola
console.log(typeof texto);

// Transforma la variable de string a number
var num = parseInt(texto);

// Muestra nuevamente el contenido de esta variable en consola
console.log(num);

// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla?
// El color

//¿Qué es entonces un tipo de dato?
// Es lo que nos permite diferenciar entre diferentes tipos de variables para manejarlos adecuadamente
