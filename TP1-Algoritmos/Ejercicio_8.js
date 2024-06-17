

const texto = prompt("Ingresa un texto:", );
function Vocal(caracter) {
  const vocales = "aeiouáéíóú";
  return vocales.includes(caracter.toLowerCase());
}

for (let i = 0; i < texto.length; i++) {
  if (Vocal(texto[i])) {
    const posicion = i + 1;
    console.log(`La primera vocal es ${texto[i]} y está en la posición Nº${posicion}.`);
    break; 
  }
}