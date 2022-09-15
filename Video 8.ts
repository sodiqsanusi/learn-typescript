// * Function Basics

/*
  Just like arrays or objects, Functions also have their own data types.
  It can be predefined or inferred.
*/

let isTest = () => {
  console.log("Typescript has been mid sha, fun to learn tho!")
}

isTest = 0; //! Error here due to the fact that "isTest" must always be a function.
isTest = () => {
  console.log('Rhedwan, one of the best fr')
}

/*
  You can also define the data types that are expected per parameter
*/

let add = (a:number, b:number) => {
  console.log(a + b)
}
add(2, 3);
add('4', '9'); //! Error here because the function expects parameters of the number type
add(3); //! Error here as the function expects exactly two parameters

//* You can make a parameter optional by putting a question mark before the colon specifying the type to be used

let lilac = (w: number, x:number, z?:string) => {
  console.log(w + x)
  console.log(z)
}

lilac(1, 8) // Didn't give an error here as the last parameter is optional
lilac(9, 8, '233');

// You can also use default parameters if you want to.

//* You can also specify the return type of a function

let subtract = (a:number, b:number):string => {
  return `Result = ${a - b}`;
}