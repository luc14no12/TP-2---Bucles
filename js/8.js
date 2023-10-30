let numeroMaximo = prompt("Introduce un número (no mayor de 50):");

if (!isNaN(numeroMaximo) && numeroMaximo <= 50) {
  for (let i = 1; i <= numeroMaximo; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += j;
    }
    console.log(linea);
  }
} else {
  alert("El valor introducido no es válido. Debe ser un número no mayor de 50.");
}
