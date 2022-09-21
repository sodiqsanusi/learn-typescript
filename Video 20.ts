//* Tuples

/*
  Tuples allow you to strictly infer the types of a particular element in arrays.
  This means, you can specify that a element of a given index should be of a particular type
*/

let tup: [string, number, {name: string}, boolean]; // Each type specified in the array will strictly match with the types of the elements at the given indexes

tup = ['lateefah', 12, {name: 'Ade'}, false]; //* Only when all types have been satisfied will the tuple be error-free
tup[1] = '1' //! This will give an error as the element at index 1 is supposed to be a number.

tup.push('Hii') // This will work because we just specified the types of the first 4 elements.

let test: [string, number][]; // An array of arrays. The inner arrays must have a string as first element & a number as second

test = [['lol', 12], ['huu', 3]]