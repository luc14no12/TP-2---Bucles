let numeroMaximo = prompt("Introduce un número (no mayor de 50):");

if (!isNaN(numeroMaximo) && numeroMaximo <= 50) {
  for (let i = numeroMaximo; i >= 1; i--) {
    let linea = '';
    for (let j = i; j >= 1; j--) {
      linea += i;
    }
    console.log(linea);
  }
} else {
  alert("el valor introducido no es valido");
}
