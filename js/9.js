for (let i = 1; i <= 500; i++) {
  if (i % 4 === 0 && i % 9 === 0) {
    console.log(i + " (Múltiplo de 4 y 9)");
  } else if (i % 4 === 0) {
    console.log(i + " (Múltiplo de 4)");
  } else if (i % 9 === 0) {
    console.log(i + " (Múltiplo de 9)");
  } else {
    console.log(i);
  }

  if (i % 5 === 0) {
    console.log("—————————————————————");
  }
}
