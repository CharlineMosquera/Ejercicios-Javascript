/* Investigando el Uso de if
Tema: Condicionales (investigación)
Ejercicio: Investiga cómo funciona la estructura if en JavaScript.
Luego, escribe un ejemplo simple de cómo usar if para mostrar
un mensaje en la consola basado en la comparación de dos
variables numéricas. Asegúrate de que tu código sea funcional
y de explicar cómo lo has utilizado en un comentario. */

// descarga el modulo prompt-sync para leer la entrada de usuario
const prompt = require("prompt-sync")();

// solicita la edad y lo guarda en la variable
const age = parseInt(prompt("Ingresa tu edad: "));
// variable para guardar el mensaje a imprimir
let msg = "";

// valida si la edad es mayor o igual a 18
if (age >= 18) {
  msg = "Eres mayor de edad";
} else {
  msg = "Eres menor de edad";
}

// imprime por consola el mensaje
console.log(msg);
