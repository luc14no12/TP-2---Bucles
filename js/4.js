let suma = 0;

while (true) {
  let entrada = prompt("Introduce un número:");
  if (entrada === null) {
    break;
}
let numero = parseFloat(entrada);

if (!isNaN(numero)) {
    suma += numero;
} else {
    alert("eso no es un número. introduce un número válido.");
}
}

alert("La suma total de los números es: " + suma);