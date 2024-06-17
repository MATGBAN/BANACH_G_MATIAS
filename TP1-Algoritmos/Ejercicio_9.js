
notas= [];
total=0;

for (i=0; i < 5;) {
    
    notas_ingresadas = prompt ("Ingrese sus notas","");
    nota = parseFloat(notas_ingresadas);
    if (nota >=0 && nota <11){
        total = total + nota;
        promedio = total/5;
        notas.push(nota);
        i++
    } else {
        alert("Nota incorrecta ingrese nota valida");
        i=0
    }  
}
document.write("Las notas son: ", notas, "  Su promedio es: ", promedio)
