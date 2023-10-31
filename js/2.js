let numero = parseInt(prompt("ingresa un numero del 1 al 10"));
let calificacion = " ";

if (numero < 0 || numero > 10) {
    calificacion = "numero erroneo";
} else if (isNaN(numero)) {

    calificacion = "introduce un numero valido"
} else {
    switch (numero) {
        case 0:
        case 1:
        case 2:
            calificacion = "muy deficiente";
            break;
        case 3:
        case 4:
            calificacion = "insuficiente";
            break;
        case 5:
        case 6:
            calificacion = "suficiente";
            break;
        case 7:
            calificacion = "bien"
            break;
        case 8:
        case 9:
            calificacion = "notable"
            break;
            case 10 :
            calificacion = "sobresaliente";
    }

}
alert( calificacion)

