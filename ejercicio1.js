/*
- Test en cada ejercicio.
-Enunciado:
Dada una cadena de texto, comprobar si es un palindromo o no.
Los palindromod don palabras que se leen igual aun estando invertidas.

Ejemplo:
palindromo ("otto") // devuelve: true
palindromo ("victor") // devuelve: false

Como hacerlo:
-Funcion con parametro "texto"
-Separar el texto en un array de letras.
-Darle la vuelta.
-Unir el array de letras de un string y comparar con el parametro.
*/

function palindromo(text) {
    let invested = text
                    .split('')
                    .reverse()
                    .join('');

    return (invested === text)

}

console.log("¿Es un palindromo?" + palindromo("lucia"));

console.log("¿Es un palindromo?" + palindromo("otto"));