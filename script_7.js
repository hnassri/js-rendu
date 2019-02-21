let books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
let a = 0;
let x = 0;
let y = "";
let z = 0;
let f = "";
let myBook = "";
let myBookId = 0;
books.forEach(info => {
  if (info.rented > 0){
    a++;
  }
  if (info.rented >= x) {
    x = info.rented;
    y = info.title;
  }
  if (info.id === 873495) {
    myBook = info.title;
    myBookId = info.id;
  }
  if (info.id === 133712) {
    books.splice(books.indexOf(info), books.indexOf(info)+1)
  }
})
z = x;
books.forEach(info => {
  if (info.rented <= z) {
    z = info.rented;
    f = info.title;
  }
})
if (a === books.length) {
  console.log("Oui tous les livres ont déjà été empruntés au moins une fois");
} else {
  console.log("Il y a des livres qui n'ont pas encore été empruntés");
}
console.log("Le lvre avec l'id " + myBookId + " a pour titre " + myBook)
console.log("Le livre le plus emprunté est " + y + " avec " + x + " emprunts à son actif")
console.log("Le livre le moins emprunté est " + f + " avec " + z + " emprunts à son actif")
console.log("Un livre a été supprimé.")

let sortedName = books.sort(function(a, b){
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1}
  return 0;
 })
 
 console.log(sortedName);