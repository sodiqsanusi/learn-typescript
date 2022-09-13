/** 
 **In the beginning, God created the Heavens and the Earth. 
 **And he said to the surface of the waters, "Hello, world".
**/
console.log("Hello world!");
console.log("First code using Typescript. Let's fucking go!")

//* TYPE BASICS

/**
 ** Typescript is a strictly typed language.

 * This means that, for each variable you create, you have to specify the data type(s) that the variable
 * will accept. This improves the security of the codebase and helps in preventing errors caused by wrong 
 * data types implemented in algorithms.
 * 
 ** NB: If you don't specify the data types, Typescript will use the data type of the value you gave
  the variable initially.
 */

 let lilac = 'Hii'; //* The data type of "lilac" is inferred here as a string based on its initial value.
 lilac = 40; // This will give an error because the variable "lilac" can only accept a string value.
 lilac = 'How are you?'

 let getDateOfBirth = (age: number) => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear - age)
 }

getDateOfBirth('hii'); // Will give an error due to the fact that I specified the data type of the parameter of the function
getDateOfBirth(20);