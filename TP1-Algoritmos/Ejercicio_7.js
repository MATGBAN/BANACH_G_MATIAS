
const valores = [true, false, 2, "hola", "mundo", 3, "char"];

//PUNTO 1
// Filtra los elementos del array
const elementosDeTexto = valores.filter(item => typeof item === "string");

// Encuentra el texto más largo
const elementoMasLargo = elementosDeTexto.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, "");
console.log("El elemento de texto más largo es:", elementoMasLargo);

//PUNTO 2
//Ordena e imprime de menor a mayor
elementosDeTexto.sort((a, b) => a.length - b.length);
console.log("Elementos de texto ordenados por longitud:", elementosDeTexto);


//PUNTO 3
//Calcula las operaciones matematicas
var num1 = valores.find(elemento => typeof elemento === "number");
var num2 = valores.find(elemento => typeof elemento === "number" && elemento !== num1);

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);