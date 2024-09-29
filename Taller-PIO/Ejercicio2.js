/* Variables Interactivas
Tema: Uso de let y const
Ejercicio: Crea un programa que pida al usuario su edad usando prompt.
Usa let para la edad y const para almacenar un mensaje que diga
"Tu edad es [edad]".
Muestra el mensaje en la consola. */

// descarga el modulo prompt-sync para leer la entrada de usuario
const prompt = require("prompt-sync")();

// solicita la edad y lo guarda en la variable
let age = prompt("Ingresa tu edad: ");

// construye el string del mensaje con la variable age
const msg = `Tu edad es ${age}`;

// imprime por consola el mensaje
console.log(msg);
