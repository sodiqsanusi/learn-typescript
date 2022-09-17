//* Intefaces

/*
  Interfaces are like Type aliases for objects/classes, just a bit advanced.
*/

interface Person {
  name: string,
  age: number,
  isTeen?: boolean,
  bio(word: string): string;
}

let oyin: Person = {
  name: 'Oyindamola Oyinkansola',
  age: 20,
  bio(word) {
    return word
  },
  isTeen: true
}

//* The object "oyin" above will not contain any error as it follows the structure of interface "Person" strictly

let damola: Person = {
  name: 'Adedamola Talabi',
  age: '19', //! This will give an error as the property 'age' has to be a number. Specified in the interface
  skills: ['singing', 'public speaking'],
  bio(word: number) {
    return word * 2
  }, //! Error as bio is supposed to take in a string parameter
}