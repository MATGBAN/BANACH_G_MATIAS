
let dato, resultado;
// la linea anterior le asigna a las variables dato y resultado el tipo let cuyo alcance 
// es limitado a su bloque en este caso al estar al inicio igualmente es accesible por todo 
// el programa dado que no esta dentro de un bloque --> {}

val1 = window.prompt("Introduce tu nombre", "...");
val2 = window.prompt("Introduce tu apellido", "...");
//las dos lineas anteriores asignan a la variable val1 --> nombre  y val2 --> apellido
//esto se genera al saltar una primera ventana POP-UP con la leyenda "Introduce tu nombre" y
//una segunda ventana con la leyenda "Introduce tu apellido"
// despues de la coma los tres puntitos es lo que va a aparecer en el campo 
//para ingresar los datos solicitados dentro de la ventana POP UP


resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//aca simplemente le asigna a la variable resultado la leyenda que esta entre los backsticks
// ademas despues de los dos puntos muestra las variables val1 y val2

document.write(resultado);
//este metodo imprime en el cuerpo de la pagina la variable "resultado"
