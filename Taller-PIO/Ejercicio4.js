/* Calculadora de Operaciones
Tema: Operadores Aritméticos
Ejercicio: Crea una pequeña calculadora.
Pide al usuario dos números mediante prompt.
Pregunta qué operación desea realizar (suma, resta, multiplicación o división).
Realiza la operación elegida y muestra el resultado en la consola. */

// descarga el modulo prompt-sync para leer la entrada de usuario
const prompt = require("prompt-sync")();

// solicita al usuario el primer número
const number1 = parseInt(prompt("Ingrese el primer número: "));
// solicita al usuario el segundo número
const number2 = parseInt(prompt("Ingrese el segundo número: "));
// solicita al usuario la operacion a realizar
const operation = prompt("¿Que operación desea realizar? +, -, *, /: ");
// variable para almacenar el resultado de la operacion
let result = 0;

// Estructura swicht para validar que
// operación desea realizar el usuario
switch (operation) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    // valida si el segundo número es cero
    if (number2 == 0) {
      console.log("No se puede realizar división entre cero");
      // para terminar el programa
      process.exit(0);
    }
    result = number1 / number2;
    break;
  // en caso de que ingrese una operación incorrecta
  default:
    console.log("Ingreso una opción incorrecta");
    process.exit(0);
}

// imprime el resultado
console.log(
  `El resultado de ${number1} ${operation} ${number2} es = ${result}`
);
