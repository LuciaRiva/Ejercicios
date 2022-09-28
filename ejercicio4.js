/*
Enunciado:
Dibujar un cuadrado hueco con asteriscos.

ejemplo:

cuadrado(4)

// devuelve

****
*  *
*  *
****

Como hacerlo:
-Funcion para crear el lado de arriba y abajo del cuadrado.
-Funcion q haga los lados y el hueco del cuadrado.
-Bucle de 0 al tamaño del lado menos 2 para equilibrar con el *
-Ir concatenando en una variable cada linea del cuadrado
-Mostrar el cuadrado en la funcion principal

*/

/*
function dibujoCuadrado(largo) {

for (var i=1; i<=largo; i++) {

i == 1 || i == largo

? console.log('*'.repeat(largo))

: console.log('*' + ' '.repeat(largo-2) + '*')

}

}

dibujoCuadrado(6)
*/

function lado (numero) {
    let lado= "";

    for (let i =0; i < numero; i++){
        lado += "*";
    }

    return lado;
}

function cuadrado(numero) {

//Lado de arriba

    let dibujo = lado(numero) + "\n";
    let contenido= "";

//Filas
    for(let i=0; i<(numero-2); i++){
        
        contenido = "*";

//Contenido huevo
        for(let x=0; x<(numero-2); x++){
            contenido += " ";
        }

        contenido += "*";

        //Añadir fila al dibujo
        dibujo += contenido + "\n";
    }

//lado de abajo
    dibujo += lado(numero);

return dibujo;

}

console.log(cuadrado(4));