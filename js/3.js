
let fraseCompleta = "";

do{
  let primeraFrase = prompt("ingresa una frase")
if ( fraseCompleta.length === 0) {

    fraseCompleta += primeraFrase;
}else{
    fraseCompleta += "-" + primeraFrase;
}
} while (confirm("deseas ingresar otra frase ?"))

document.write(`<p> la frase completa es: ${fraseCompleta} </p>` )