console.log('Hola desde retos!');

//RETO 1
//Crear con funciones de tipo flecha o arrow functions () => {}
//Una función que reste dos números
//Una función que multiplique dos números

// ------ CASO 1 Con return: Retornando la respuesta solamente
// Mandamos a llamar la función en consola para imprimir el resultado que "retorna" la función (se retorna implícitamente porque son arrow functions de una sola línea)

const resta = (num1, num2) => num1 - num2;
console.log(resta(10, 5)); //5
console.log(resta(230, 150)); //80

const multiplicar = (num1, num2) => num1 * num2;
console.log(multiplicar(6, 5)); //30
console.log(multiplicar(10, 90)); //900


// ------ CASO 2 Sin return: Imprimiendo en consola directamente DESDE la función
// Cambia la forma en la que mandamos a llamar la función, ya no se requiere el uso de la consola

const restaConsole = (num1, num2) => console.log(num1 - num2);
resta(10, 5); //5
resta(230, 150); //80

const multiplicarConsole = (num1, num2) => console.log(num1 * num2);
multiplicar(6, 5); //30
multiplicar(10, 90); //900


//RETO 2
//Una función que le pregunte al usuario dos valores y que regrese:
//El área de un cuadrado
//El área de un rectángulo
//El área de un triángulo

// ------ CASO 1 Con return: Tomando los valores como argumentos de las funciones (adentro de los paréntesis) y retornando la respuesta

const areaCuadrado = (lado) => lado * lado;
console.log(areaCuadrado(4)); //16

const areaRectangulo = (base, altura) => base * altura;
console.log(areaRectangulo(4, 8)); //32

const areaTriangulo = (base, altura) => (base * altura) / 2;
console.log(areaTriangulo(3, 6)); //9


// ------ CASO 2 Sin return: Imprimiendo en consola directamente DESDE la función y haciendo uso de prompts

const areaCuadradoConsole = () => {
  let lado = prompt('Ingresa el tamaño de los lados de tu cuadrado');
  console.log(lado*lado);
}
areaCuadradoConsole();

const areaRectanguloConsole = () => {
  let base = prompt('Ingresa el tamaño de la base de tu rectángulo');
  let altura = prompt('Ingresa el tamaño de la altura de tu rectángulo');
  console.log(base * altura);
}
areaRectanguloConsole();

const areaTrianguloConsole = () => {
  let base = prompt('Ingresa el tamaño de la base de tu triángulo');
  let altura = prompt('Ingresa el tamaño de la altura de tu triángulo');
  console.log((base * altura) / 2);
}
areaTrianguloConsole();
