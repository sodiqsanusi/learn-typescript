// * Objects & Arrays

// ** ARRAYS

/* The strict types still apply to array's and object's values, i.e
   the data types of all values of an array or object can either be predefined
   or inferred.
*/

let stringArray = ['Ade', 'moyin'] // With this, Typescript will infer that all values in this array must be strings.
stringArray.push('as') // This will work as we are pushing a string value to the array.
stringArray.push(2); //! This will give an error as the "stringArray" can only accept strings as elements due to Typescript

/*
  The data types that are present in the array on definition will be the accepted strict types for the array's elements
*/

let mixedArray = ['hi', 3] // By inference, this array will be able to accept both string and number elements only.
mixedArray[1] = 'cross'; // This will work;
mixedArray[0] = true; //! This will give an error
mixedArray.push({manga: 'solo leveling'}) //! This will also give an error

/*
  You can predefine the data types you want in the array on definition if you don't want
  the types to be inferred
*/

let lilac: number[]; // This 'lilac' variable must be an array that will only accept numbers as elements due to the predefined types.
lilac = 'sjs' //! This will give an error as Typesript is expecting an array of numbers only.
lilac = [7, 9, 0] // This will work
lilac.push('jsjs'); //! This will give an error due to the string value been passed to a number only array

//* You can use the `any` keyword to specify that any data type can be used.

let allTypes: any[] = ['hii', 98, ['a'], true] // This will work due to the `any` keyword

//* You can also combine data types to be present

let numAndBool: (number | boolean)[] = [9, false] // This works
numAndBool.push('lol'); //! This will give an error as the array can only accept numbers and booleans as elements

// ** OBJECTS

/*
  In objects, their properties have similar strict typing to variables. You can predefine it or
  it will be inferred by the value it gets.

  Also, after initialization, you can't add or remove any properties from the created object,
  you can change the property's value surely (as long as it's of the same type), but the property
  must be there.
*/

let testObject = {
  testForString: 'hii',
  testForNum: 30
}

testObject.testForNum = 'a' // ! Was expecting a number, will give an error
testObject.lion = 'roar!' //! You can't add a new property in the object cus it wasn't initialised at first.

testObject = true; //! 'testObject' must be an object with two properties: testForString and testForNum.

