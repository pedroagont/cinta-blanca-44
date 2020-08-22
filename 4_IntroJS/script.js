
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



// RETO VARIABLES
//
// Guarda en variables el nombre de las siguientes mascotas:
//
// 1. Pedrito
// 2. Rufo
// 3. Chancla
//
// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// “Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho”
