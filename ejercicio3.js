/*
Enunciado:
Dada una cadena de texto, darle la vuelta e invertir el orden 
de sus caracteres, sin usar metoodos propios del lenguaje, 
solo estructuras de control.

Ejemplo:

invertir("hola") //Devuelve: 'aloh'

Como hacerlo:
-Funcion con parametro "texto"
-Crear una variable para guardar la cadena invertida
-Bucle que recorra el string y guarde los caracteres en la variable

*/

function invertir(texto) {
    let invertido = "";

    for (let letra of texto){
        invertido = letra + invertido;
    }

    return invertido;
}

// otra forma de hacerlo:

function invertir(texto) {
    return texto.split("").reverse().join('');
}

console.log("Texto invertido: ", invertir("lucia"));


