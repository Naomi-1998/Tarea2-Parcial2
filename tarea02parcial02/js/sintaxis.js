// Variables:
// En JavaScript, puedes declarar variables utilizando var, let o const. var se utilizaba anteriormente, mientras que let y const fueron introducidos en ECMAScript 2015 (ES6).
// let y const son variables de bloque, lo que significa que solo están disponibles dentro del bloque en el que se declaran.
// const se utiliza para declarar constantes, cuyo valor no puede cambiar una vez asignado.
// Declaración de variables
let nombre = 'John';
let edad = 25;
const PI = 3.1416;
let estado=true;
let algo;
algo=22
// Arreglos:
// Los arreglos en JavaScript son colecciones ordenadas de elementos.
// Puedes declarar un arreglo utilizando corchetes [] y separar los elementos con comas.
// Puedes acceder a los elementos de un arreglo utilizando el índice, comenzando desde 0.
// Declaración de un arreglo
let numeros = [1, 2, 3, 4, 5];
console.log(numeros)
//  indice     0  1  2  3  4
// Acceso a elementos del arreglo
let primerNumero = numeros[0]; // 1

// Modificación de elementos del arreglo
console.log(primerNumero)
numeros[2] = 10;
console.log(numeros[2])

// Objetos:
// Los objetos en JavaScript son colecciones de propiedades y valores asociados.
// Puedes declarar un objeto utilizando llaves {} y especificar las propiedades y valores separados por comas.
// Puedes acceder a las propiedades de un objeto utilizando la notación de punto (objeto.propiedad) o la notación de corchetes (objeto['propiedad']).
// Declaración de un objeto
let persona = {
  nombre: 'John',
  edad: 25,
  ciudad: 'New York'
};

// Acceso a propiedades del objeto
console.log(persona)
let nombrePersona = persona.nombre; // 'John'
let edadPersona = persona['edad']; // 25

// Modificación de propiedades del objeto
persona.edad = 30;

console.log(nombrePersona)
console.log(edadPersona)
console.log(persona)

// Bucle for:

// El bucle for se utiliza cuando se conoce de antemano la cantidad de veces que se desea iterar.
// La estructura del bucle for consta de tres partes: inicialización, condición y expresión de incremento/decremento.
// La inicialización se ejecuta una vez al comienzo del bucle y se utiliza para establecer la variable de control.
// La condición se evalúa antes de cada iteración. Si la condición se evalúa como true, se ejecuta el cuerpo del bucle. Si la condición se evalúa como false, el bucle se detiene.
// La expresión de incremento/decremento se ejecuta al final de cada iteración y se utiliza para actualizar la variable de control.
// Ejemplo de bucle for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Resultado: 0, 1, 2, 3, 4
// Bucle while(mientras):

// El bucle while es adecuado cuando necesitas repetir un bloque de código mientras
// una condición o condiciones se cumplen, sin que necesariamente esté relacionado con un número
// de iteraciones fijo. Puedes utilizarlo en casos como iteraciones basadas en condiciones
// específicas, bucles basados en eventos y validación/repetición de entrada del usuario. 
// Recuerda siempre asegurarte de que haya una condición de salida para evitar bucles infinitos.
// por tal motivo tiene que haber un proceso que afecto al valor de la variable que interviene
// en la condicion del ciclo
// Ejemplo de bucle while
// caso: iteraciones conocidas inicio y fin
// 1) encontrar el proceso repetitivo:  console.log(i);
// 2) encontrar la variable(s) del inicio y fin del ciclo: i=0 y 5
// 3) encontrar la condicion para proceso repetitivo: i < 5
// 4) crear, buscar el proceso que afecte a la condicion repetitiva:  i=i+1
let i=0;
while (i < 5) {
  console.log(i);
  i=i+1 // = i++
}
// Resultado: 0, 1, 2, 3, 4
// Ejemplo: Validar entrada de usuario
let respuesta = '';
while (respuesta !== 'sí' && respuesta !== 'no') {
  respuesta = prompt('¿Deseas continuar? (sí/no)');
}
//Condiciones: if (si)

// Las condiciones, también conocidas como estructuras condicionales, se utilizan para 
//ejecutar diferentes bloques de código dependiendo de si una condición se evalúa como verdadera
// o falsa.

// Estructura básica de una condición:

// La estructura básica de una condición en JavaScript es el if (si) y el else (sino).
// El bloque de código dentro del if se ejecuta si la condición se evalúa como verdadera (true).
// El bloque de código dentro del else se ejecuta si la condición se evalúa como falsa (false).
if (condicion) {
  // Bloque de código si la condición es verdadera
} else {
  // Bloque de código si la condición es falsa
}
// Condiciones múltiples:

// Puedes encadenar múltiples condiciones utilizando else if para evaluar diferentes casos.
// El bloque de código dentro del primer if que se evalúa como verdadero se ejecuta y el 
// resto se omite.
// El bloque de código dentro del else se ejecuta solo si ninguna de las condiciones anteriores
// se evalúa como verdadera.
if (condicion1) {
  // Bloque de código si la condicion1 es verdadera
} else if (condicion2) {
  // Bloque de código si la condicion1 es falsa y la condicion2 es verdadera
} else if (condicion3) {
  // Bloque de código si la condicion1 y la condicion2 son falsas y la condicion3 es verdadera
} else {
  // Bloque de código si ninguna de las condiciones anteriores es verdadera
}
// Operadores de comparación:

// Puedes utilizar operadores de comparación para evaluar condiciones en JavaScript.
// Algunos operadores de comparación comunes son: == (igual a), != (diferente de), 
// > (mayor que), < (menor que), >= (mayor o igual que), <= (menor o igual que).
// Los operadores de comparación devuelven un valor booleano (true o false) 
// dependiendo del resultado de la comparación.
let x = 5;
let y = 10;

if (x > y) {
  // Bloque de código si x es mayor que y
} else if (x == y) {
  // Bloque de código si x es igual a y
} else {
  // Bloque de código si x es menor que y
}
// Operadores lógicos:

// Puedes combinar múltiples condiciones utilizando operadores lógicos como && (y), ||
// (o) y ! (no).
// El operador &&(y) evalúa como verdadero si todas las condiciones son verdaderas.
// El operador ||(o) evalúa como verdadero si al menos una de las condiciones es verdadera.
// El operador !(no) invierte el valor de la condición (verdadero se convierte en falso, y viceversa).
let eda = 25;
let ciudad = 'Nueva York';

if (eda >= 18 && ciudad == 'Nueva York') {
  // Bloque de código si la edad es mayor o igual a 18 y la ciudad es Nueva York
}

if (eda < 18 || ciudad != 'Londres') {
  // Bloque de código si la edad es menor que 18 o la ciudad no es Londres
}

if (!(eda < 18)) {
  // Bloque de código si la edad no es menor que 18 (es decir, si es mayor o igual a 18)
}

//Funciones:

// Las funciones en JavaScript son bloques de código reutilizables que realizan una tarea 
// específica.
// Puedes declarar una función utilizando la palabra clave function, seguida del nombre de 
// la función y los parámetros entre paréntesis.
// Puedes devolver un valor utilizando la palabra clave return.

// Declaración de una función
function saludar(nombre) {
  console.log('¡Hola, ' + nombre + '!');
}
const sal1= function(nombre) {
  console.log('¡Hola, ' + nombre + '!');
}
const sal2= (nombre) => {
  console.log('¡Hola, ' + nombre + '!');
}
// Llamada a la función
saludar('Ana'); // ¡Hola, Ana !
sal1("Ana1")
sal2("Ana2")
// Manejo del DOM básico:

// El DOM (Document Object Model) es la representación estructurada del contenido de 
// una página web. // Puedes acceder y manipular elementos del DOM utilizando métodos
// y propiedades proporcionados por el navegador.
// Obtener un elemento del DOM por su ID
let titulo = document.getElementById('titulo');

// Cambiar el contenido del elemento
titulo.textContent = 'Nuevo título';

// Añadir un evento de clic al elemento
titulo.addEventListener('click', function() {
  console.log('Has hecho clic en el título.');
});
// Una clase es una plantilla que define las propiedades y los métodos(funciones) de un 
// objeto. Proporciona una forma de crear objetos que comparten características comunes y 
// permite la reutilización de código.
class Persona {
  // constructor(nom, eda) {
  //   this.nombre = nom;
  //   this.edad = eda;
  // }
  
  // saludar() {
  //   console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  // }
  presentar(){
    console.log("Metodo de la clase")
  }
}

// const persona1 = new Persona("Juan", 25);
// persona1.saludar(); // Output: Hola, mi nombre es Juan y tengo 25 años.
const person = new Persona(); // declara o instancia una variable del tipo de la clase
person.presentar()
