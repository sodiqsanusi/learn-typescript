//* Enums

/*
  Enums help to associate constants with a number alternative.

  E.g, you use numbers to associate the authors of a book. An enum will let you use variables
  to declare this authors, but will substitute the variables for their index numbers on compilation.
*/

enum authors {
  Collen_Hoover,
  Penelope_Douglas,
  Anna_Todd,
  Sarah_Maas
}

console.log(authors.Anna_Todd) // This will return 2
console.log(authors.Collen_Hoover) // This will return 0
console.log(authors.Sarah_Maas) // This will return 3
console.log(authors.Kuku_Damilare) //! Will give an error as the variable is not in the enum