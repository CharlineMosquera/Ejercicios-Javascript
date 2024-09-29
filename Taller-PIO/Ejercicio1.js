/* Hola Mundo Creativo
Tema: Introducción a JavaScript
Ejercicio: Escribe un código que muestre un saludo personalizado en la consola.
Usa prompt para pedir al usuario su nombre y crea un mensaje que diga
"¡Hola [nombre]! Bienvenido al taller de JavaScript". */

// descarga el modulo prompt-sync para leer la entrada de usuario
const prompt = require("prompt-sync")();

// solicita el nombre y lo guarda en la variable
let name = prompt("Ingresa tu nombre: ");

// construye el string del mensaje con la variable de name
let msg = `¡Hola ${name}! Bienvenido al taller de JavaScript.`;

// imprime por consola el mensaje deseado
console.log(msg);
