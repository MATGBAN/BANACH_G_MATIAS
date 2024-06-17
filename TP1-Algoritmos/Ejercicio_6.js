
const solicitud_mes = prompt ("Ingrese el numero del mes que desea mostrar del 1 al 12","");
const numero_mes_ingresado = parseInt(solicitud_mes);
const numero_mes = numero_mes_ingresado - 1;
const posicion_mes = [0,1,2,3,4,5,6,7,8,9,10,11];

if (posicion_mes.includes(numero_mes))
    {
        let posicion = posicion_mes.indexOf(numero_mes);
        const meses = ["Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];
        document.write("El mes que solicitaste es: ", meses[posicion])
    }
    else {
        document.write("El numero del mes ingresado es incorrecto, vuelve a recargar la pagina!!!")
    }




    