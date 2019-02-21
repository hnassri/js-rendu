const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
let fullName = [];
entrepreneurs.forEach(info => {
  if (info.year >= 1970 && info.year < 1980) {
    console.log(info);
  }
  fullName.push(info.first + " " + info.last);
  console.log(info.first + " " + info.last + " aurait " + (2019-info.year) + " ans aujourd'hui.")
})
console.log(fullName)
//Trie les inventeurs par ordre alphabétique du nom de famille

let sortedName = entrepreneurs.sort(function(a, b){
  if(a.last < b.last) { return -1; }
  if(a.last > b.last) { return 1}
  return 0;
 })
 
 console.log(sortedName);