// ARREGLOS
// Se declaran utilizando corchetes y cada elementos es una posición del arreglo/lista
// var arreglo = [ pos0 , pos1, pos2, ..., posN ]

var arregloVacio = [];

// Posición       0   ,   1   ,   2   ,   3
var colores = ['Negro', 'Rojo', 'Azul', 'Rosa'];

console.log(colores);

// ¿Cómo acceder a cada valor del arreglo?

console.log(colores[0]); // Negro
console.log(colores[2]); // Azul
console.log(colores[4]); // undefined, significa que no está definido ningún elemento en esa posición, más no es un error como tal

// ¿Cómo agregar elementos a mi arreglo?
// arreglo.push()

colores.push('Blanco');
colores.push('Verde');

console.log(colores); // ['Negro', 'Rojo', 'Azul', 'Rosa', 'Blanco', 'Verde']
console.log(colores[4]); // Blanco
console.log(colores[5]); // Verde

// ¿Cómo eliminar el último elemento de mi arreglo?
// arreglo.pop()

colores.pop()
console.log(colores); // ['Negro', 'Rojo', 'Azul', 'Rosa', 'Blanco']

// ¿Cómo eliminar valores específicos de nuestro arreglo o sustituirlos?
// arreglo.splice(val1, val2, val3)
// val1: en qué posición quieres empezar
// val2: cuántos valores quieres remover
// val3: elemento que desean agregar

colores.splice(4, 1) // Si no pongo el tercer argumento, simplemente lo elimina
colores.splice(3, 1, 'Amarillo') //Si sí pongo el tercer argumento, lo sustituye

console.log(colores);

//Dato curioso: Las cadenas también se pueden interpretar como arreglos de caracteres
var cadena = 'Pedro González';
console.log(cadena[0]); // P

// ¿Cómo coloco los elementos del arreglo al revés?
// arreglo.reverse()

colores.reverse()
console.log(colores);


// Más métodos y referencias: https://www.w3schools.com/js/js_array_methods.asp


// OBJETOS
// Se declaran objetos utilizando llaves y cada elemento que contiene se considera una propiedad o llave (key)
// objeto = { propiedad: valor }

var objeto = {}

var sensei = { nombre: 'Pedro', apellido: 'González' };

var persona = {
  nombre: 'Pedro',
  apellido: 'González',
  edad: 26,
  telefono: 9988458554,
  correo: 'cancun@devf.mx',
  musica: {
    reggeaton: {
      JBalvin: ['Negro', 'Blanco', 'Rosa'],
      BadBunny: ['Ignorantes', 'Callaita', 'Caro']
    },
    cumbia: ['Los Angeles Azules', 'El Zapato'],
    rock: 'AC/DC'
  },
  peliculas: ['Comedia', 'Terror', 'Documental'],
  esta_vivo: true,
}

console.log(persona);

// Para acceder a propiedades del objeto utilizamos la estructura objeto.propiedad

console.log(persona.nombre);
console.log(persona.musica.reggeaton.JBalvin[1]);


// FORMATO JSON
// JSON es JavaScript Object Notation, es el formato con el que intercambiamos información en la red, de manera mucho más simple a diferencia de el formato XML que se usaba antes
// Para este formato SÍ se requiere comillas dobles

var personaJson = {
  "nombre": "Pedro",
  "ciudad": "Cancún",
  "edad": 22,
  "musica": {
    "reggeaton": {
      "jbalvin": ["Rojo", "Blanco", "Negro"],
      "badbunny": ["Caro", "La Santa"]
    },
    "cumbia": "Los Ángeles Azules",
    "rock": "AC/DC"
  },
  "peliculas": ["Terror", "Documental", "Comedia"]
}

console.log(personaJson);

// Referencia: https://www.w3schools.com/js/js_objects.asp
