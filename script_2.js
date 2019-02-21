function factorielle() {
  let number = prompt("De quel nombre veux tu calculer la factorielle");
  let n = number;
  for(let num = 1; num < n; num ++){
    number *= num;
  }
  return number;
}

console.log(factorielle());