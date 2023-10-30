while (true) {
    let dniNumero = prompt("Introduce el número de DNI :");
  
    
    if (dniNumero === null || dniNumero.trim() === "") {
    
      break;
    }
  
    dniNumero = parseInt(dniNumero);
  
    if (!isNaN(dniNumero) && dniNumero >= 0 && dniNumero <= 99999999) {
      let resto = dniNumero % 23;
      let letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  
      let letraDNI = letrasDNI[resto];
  
      alert("La letra del DNI " + dniNumero + " es: " + letraDNI);
    } else {
      alert("El valor introducido no es válido. Debe ser un número entre 0 y 99999999");
    }
  }
  