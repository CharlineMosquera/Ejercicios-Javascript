/* Comparando Números
Tema: Operadores de Comparación
Ejercicio: Crea un programa que pida al usuario dos números.
Asigna estos números a dos variables y muestra en la consola
si el primer número es mayor que el segundo utilizando un operador de comparación.
Usa un segundo operador de comparación para mostrar si son iguales. */

// descarga el modulo prompt-sync para leer la entrada de usuario
const prompt = require("prompt-sync")();

// solicita al usuario el primer número
const number1 = parseInt(prompt("Ingrese el primer número: "));
// solicita al usuario el segundo número
const number2 = parseInt(prompt("Ingrese el segundo número: "));
// variable para guardar el mensaje a imprimir
let msg = "";

/* sentencia if para comparar los valores */
if (number1 == number2) {
  msg = "Los números son iguales";
} else if (number1 > number2) {
  msg = "El primer número es mayor";
} else {
  msg = "El segundo número es mayor";
}

// imprime el mensaje por consola
console.log(msg);
