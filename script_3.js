function pyramid() {
  let diese = "";
  let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
  for(let num = 1; num <= number; num++) {
    let space = "";
    diese += "#" ;
    for (let n = 1; n <= number-num; n++) {
      space += " ";
    }
    console.log(space + diese)
  }
}
pyramid();
